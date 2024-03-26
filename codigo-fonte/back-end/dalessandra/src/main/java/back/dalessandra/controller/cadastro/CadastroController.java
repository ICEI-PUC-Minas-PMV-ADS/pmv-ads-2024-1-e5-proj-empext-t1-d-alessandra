package back.dalessandra.controller.cadastro;

import back.dalessandra.Model.Cadastro;
import back.dalessandra.service.CadastroService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@Controller
@RestController
@RequestMapping("/cadastros")
public class CadastroController {
    private final CadastroService cadastroService;

    public CadastroController(CadastroService cadastroService) {
        this.cadastroService = cadastroService;
    }

    @PostMapping("/cadastrar")
    public ResponseEntity<?> cadastrarCadastro(Cadastro cadastro) {
        try {
            cadastroService.cadastrarCadastro(cadastro);
            return ResponseEntity.status(HttpStatus.CREATED).body("Cadastro realizado com sucesso.");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Erro ao cadastrar: " + e.getMessage());
        }
    }
}
