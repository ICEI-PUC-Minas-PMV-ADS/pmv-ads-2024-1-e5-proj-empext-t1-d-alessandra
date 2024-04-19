package back.dalessandra.controller.cadastro;

import back.dalessandra.Model.Cadastro;
import back.dalessandra.service.cadastro.CadastroService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@Controller
@RestController
@RequestMapping("/cadastros")
public class CadastroController {
    private final CadastroService cadastroService;

    public CadastroController(CadastroService cadastroService) {
        this.cadastroService = cadastroService;
    }

    @PostMapping("/cadastrar")
    public ResponseEntity<?> cadastrarCadastro(@RequestBody Cadastro cadastro) {
        try {
            // Verifica se o email já está cadastrado
            if (cadastroService.emailExiste(cadastro.getEmailCadastro())) {
                return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Este email já está cadastrado por outro usuário.");
            }

            // Se o email não estiver cadastrado, realiza o cadastro
            Cadastro novoCadastro = cadastroService.cadastrarCadastro(cadastro);
            return ResponseEntity.status(HttpStatus.CREATED).body("Cadastro realizado com sucesso");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Erro ao cadastrar: " + e.getMessage());
        }
    }



    @GetMapping("")
    public List<Cadastro> listarCadastros(){
        return  cadastroService.listarUsuario();
    }
}
