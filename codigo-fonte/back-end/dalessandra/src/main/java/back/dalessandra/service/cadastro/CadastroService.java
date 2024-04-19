package back.dalessandra.service.cadastro;

import back.dalessandra.Model.Cadastro;
import back.dalessandra.repository.cadastro.CadastroRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CadastroService {
    @Autowired
    private CadastroRepository cadastroRepository;

    public Cadastro cadastrarCadastro(Cadastro cadastro) {
        return cadastroRepository.save(cadastro);
    }

    public List<Cadastro> listarUsuario(){
        return cadastroRepository.findAll();
    }

    // Método para verificar se o email já está cadastrado
    public boolean emailExiste(String email) {
        return cadastroRepository.existsByEmailCadastro(email);
    }
}
