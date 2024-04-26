package back.dalessandra.service.login;

import back.dalessandra.repository.login.loginRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class loginService {
    @Autowired
    private loginRepository loginRepository;

    public String validarUsario(String email, String senha){
        if(loginRepository.validarUsuario(email, senha).size()!=0){
            return "Validado com sucesso";
        }
        return "Erro ao tentar encontrar o usuario";
    }

}
