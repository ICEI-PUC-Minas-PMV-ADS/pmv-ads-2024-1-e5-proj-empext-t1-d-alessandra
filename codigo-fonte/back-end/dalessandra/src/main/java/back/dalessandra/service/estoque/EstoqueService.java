package back.dalessandra.service.estoque;

import back.dalessandra.Model.Estoque;
import back.dalessandra.repository.estoque.EstoqueRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EstoqueService {
    @Autowired
    EstoqueRepository estoqueRepository;

    public void cadastrarEstoque(Estoque estoque){
        int qtdAtual = estoque.getQuantidadeItem();
        estoque.setQtdAtual(qtdAtual);
        estoque.setStatus("Bom");
        estoqueRepository.save(estoque);
    }

    public List<Estoque> listarEstoque(){
        return estoqueRepository.findAll();
    }

    public String excluirProdutoEstoque(int id){
        estoqueRepository.deleteById(id);
        return ("Excluido com sucesso");
    }
}
