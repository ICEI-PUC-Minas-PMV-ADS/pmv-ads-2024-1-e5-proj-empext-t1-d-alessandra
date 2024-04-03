package back.dalessandra.controller.login;

import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import back.dalessandra.service.login.loginService;

@Controller
@RestController
@RequestMapping("/login")
@RequiredArgsConstructor
public class loginController {
   @Autowired
   private loginService loginService;
    @GetMapping("/validar/{email}/{senha}")
    private String validarUsuario(@PathVariable("email")String email, @PathVariable("senha") String senha){
        if (loginService.validarUsario(email,senha)=="Validado com sucesso"){
            return "ok";
        }
        return "erro";
    }

}
