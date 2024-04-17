package back.dalessandra.service.estoque;

import back.dalessandra.Model.Estoque;
import back.dalessandra.repository.estoque.EstoqueRepository;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
@NoArgsConstructor
public class EstoqueServiceBd {
    @Autowired
    EstoqueRepository estoqueRepository;
    public String baixaNoEstoque(int id, int qtdSaida){
        Estoque produtoResgatado = estoqueRepository.obterProduto(id);

        if(produtoResgatado==null) {
          return "Produto não existe";
        }
        float qtdItemExistente = produtoResgatado.getQtdAtual() ;
        if(qtdSaida>qtdItemExistente){
            return "Não tem produto suficiente";
        }
        float novaQtd =  qtdItemExistente - qtdSaida;
        float nivel=((novaQtd/qtdItemExistente)*100);
        produtoResgatado.setQtdAtual((int)novaQtd);
        if (novaQtd == 0){
            produtoResgatado.setStatus("Em falta");
            produtoResgatado.setValorTotalEmEstoque(novaQtd);
            produtoResgatado.setValorTotalAVender(novaQtd);
        } else {
            produtoResgatado.setStatus(nivel <=20 ?"Nivel Critico":"Bom");
        }
        estoqueRepository.save(produtoResgatado);
        return "Salvo com sucesso";
    }

    public void atualizarQtdEstoque(int id, int novaQtd){
        Estoque produto = estoqueRepository.obterProduto(id);
        int qtdAtual =produto.getQtdAtual();
        float valorComprado = produto.getValorComprado();
        float valorAvender = produto.getValorVenda();
        if (novaQtd == 0 || (qtdAtual == 0 && novaQtd != 0)) {
            produto.setQuantidadeItem(novaQtd);
            produto.setQtdAtual(novaQtd);
            produto.setValorTotalEmEstoque(novaQtd * valorComprado);
            produto.setValorTotalAVender(novaQtd * valorAvender);
            produto.setStatus(novaQtd == 0 ? "Em falta" : "Bom");
        } else if (qtdAtual != 0 && novaQtd != 0) {
            int somaQtd = novaQtd + qtdAtual;
            produto.setQuantidadeItem(somaQtd);
            produto.setQtdAtual(somaQtd);
            produto.setValorTotalEmEstoque(somaQtd * valorComprado);
            produto.setValorTotalAVender(somaQtd * valorAvender);
            produto.setStatus("Bom");
        }
        estoqueRepository.save(produto);
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

    public void atualizarValorEstoque(int id, float novoValorComprado){
        Estoque produto = estoqueRepository.obterProduto(id);
        int qtd = produto.getQtdAtual();
        produto.setValorComprado(novoValorComprado);
        produto.setValorTotalEmEstoque(novoValorComprado*qtd);
        estoqueRepository.save(produto);
    }
    public void atualizarValorVenda(int id, float novoValorVenda){
        Estoque produto = estoqueRepository.obterProduto(id);
        int qtd = produto.getQtdAtual();
        produto.setValorVenda(novoValorVenda);
        produto.setValorTotalAVender(novoValorVenda*qtd);
        estoqueRepository.save(produto);
    }
}
