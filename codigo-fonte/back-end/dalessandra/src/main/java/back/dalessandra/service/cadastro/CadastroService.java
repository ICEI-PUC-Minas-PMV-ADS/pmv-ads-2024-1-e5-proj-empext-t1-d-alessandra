package back.dalessandra.service;

import back.dalessandra.Model.Cadastro;
import back.dalessandra.repository.CadastroRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CadastroService {
    @Autowired
    private CadastroRepository cadastroRepository;

    public Cadastro cadastrarCadastro(Cadastro cadastro) {
        return cadastroRepository.save(cadastro);
    }
}
