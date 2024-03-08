package back.dalessandra.service.estoque;

import back.dalessandra.Model.Estoque;
import back.dalessandra.repository.estoque.EstoqueRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EstoqueServiceMore extends  EstoqueService{

    @Autowired
    EstoqueRepository estoqueRepository;

    public void baixaNoEstoque(int id, int qtdSaida){
        Estoque produto = estoqueRepository.obterProduto(id);
        if(produto!=null){
            int qtdAtual = produto.getQtdAtual();
            int novaQtd = qtdAtual - qtdSaida;
            atualizarStatus(produto,novaQtd);
         }
       }
       public void atualizarStatus(Estoque produto,int novaQtd){
           int qtdCadastrada = produto.getQtdAtual();
           int nivelCritcoEstoque =(novaQtd/qtdCadastrada)*100;

            if (novaQtd == 0){
                produto.setQtdAtual(novaQtd);
                produto.setStatus("Em falta");
                estoqueRepository.save(produto);
            }
            else if(nivelCritcoEstoque<=20){
                produto.setQtdAtual(novaQtd);
                produto.setStatus("Nivel critico");
                estoqueRepository.save(produto);
            }
            else {
                produto.setQtdAtual(novaQtd);
                produto.setStatus("Bom");
                estoqueRepository.save(produto);
            }
       }
    public void atualizarQtdEstoque(int id, int novaQtd){
        Estoque obterProduto = estoqueRepository.obterProduto(id);
        if(obterProduto.getQtdAtual()==0){
            obterProduto.setQuantidadeItem(novaQtd);
            obterProduto.setQtdAtual(novaQtd);
            obterProduto.setStatus("Bom");
            estoqueRepository.save(obterProduto);
        } else if (obterProduto.getQtdAtual()!=0) {
            obterProduto.setQuantidadeItem(novaQtd+obterProduto.getQtdAtual());
            obterProduto.setQtdAtual(novaQtd+obterProduto.getQtdAtual());
            obterProduto.setStatus("Bom");
            estoqueRepository.save(obterProduto);
        }
    }

    public Estoque buscarCodigoProduto(String nomeProduto){
        return estoqueRepository.buscarCodigoProduto(nomeProduto);
    }

    public int qtdItemCadastrados(){
        return estoqueRepository.quantidadeItem();
    }
    public  float valorEstoqueComprado(){
        return estoqueRepository.valorEstoqueSemValorConsumidor();
    }

    public List<Estoque> filtroPorEstatus(String status){
        return estoqueRepository.filtroPorEstatus(status);
    }

}
