package back.dalessandra.service.login;

import back.dalessandra.Model.Cadastro;
import back.dalessandra.repository.login.loginRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.stereotype.Service;

import java.time.LocalDate;

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
    public String upadeSenha(@DateTimeFormat(pattern = "dd/MM/yyyy") LocalDate dataNascimento, String cpfCnpj, String novaSenha){
        Cadastro usuarioUpdateSenha = loginRepository.encontrarUsuario(dataNascimento,cpfCnpj);
        if(loginRepository.encontrarUsuario(dataNascimento,cpfCnpj)!=null){
            usuarioUpdateSenha.setSenhaCadastro(novaSenha);
            loginRepository.save(usuarioUpdateSenha);
            return "Senha alterada Com Sucesso";
        }
        return "Erro ao encotrar usauario";

    }



}
