package back.dalessandra.controller.login;

import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import back.dalessandra.service.login.loginService;

import java.time.LocalDate;

@Controller
@RestController
@RequestMapping("/login")
@RequiredArgsConstructor
public class loginController {
   @Autowired
   private loginService loginService;
    @GetMapping("/validar")
    private String validarUsuario(@RequestParam("email")String email, @RequestParam("senha") String senha){
        if (loginService.validarUsario(email,senha)=="Validado com sucesso"){
            return "ok";
        }
        return "erro";
    }
    @PutMapping("/updateSenha/{cpfCpnj}/{novaSenha}")
    private String updateSenha(
            @RequestParam("dataNascimento") @DateTimeFormat(pattern = "dd/MM/yyyy")LocalDate dataNascimento,
            @PathVariable("cpfCpnj")String cpfCpnj,
            @PathVariable("novaSenha") String novaSenha){
        return loginService.upadeSenha(dataNascimento,cpfCpnj,novaSenha);
    }

}
