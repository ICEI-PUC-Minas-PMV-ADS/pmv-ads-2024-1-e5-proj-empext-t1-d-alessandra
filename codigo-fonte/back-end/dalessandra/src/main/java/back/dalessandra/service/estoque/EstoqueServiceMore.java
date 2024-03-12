package back.dalessandra.service.estoque;

import back.dalessandra.Model.Estoque;
import back.dalessandra.repository.estoque.EstoqueRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class EstoqueServiceMore extends  EstoqueService{

    @Autowired
    EstoqueRepository estoqueRepository;

    public String baixaNoEstoque(int id, int qtdSaida){
        Estoque produto = estoqueRepository.obterProduto(id);
        if(produto!=null){
            float qtdAtual = produto.getQtdAtual() ;
            float novaQtd =  qtdAtual - qtdSaida;
            float nivel=((novaQtd/qtdAtual)*100);
            if(qtdSaida>qtdAtual){
                return "Não tem produto suficiente";
            }
            else if (novaQtd == 0){
                produto.setQtdAtual((int)novaQtd);
                produto.setStatus("Em falta");
                produto.setValorTotalEmEstoque(novaQtd);
                produto.setValorTotalAVender(novaQtd);
                estoqueRepository.save(produto);
                return "Salvo com sucesso";
            }else{
                atualizarStatus(nivel);
                produto.setQtdAtual((int)novaQtd);
                produto.setStatus(atualizarStatus(nivel));
                estoqueRepository.save(produto);
                return "Salvo com sucesso";
            }
          }else { return "Produto nao existe";}
       }
       public String atualizarStatus(float nivel){
            if(nivel<=20){
                return ("Nivel critico");
            }
            else {
                return ("Bom");
            }
       }
    public void atualizarQtdEstoque(int id, int novaQtd){
        Estoque obterProduto = estoqueRepository.obterProduto(id);
        int qtdAtual =obterProduto.getQtdAtual();
        float valorComprado = obterProduto.getValorComprado();
        float valorAvender = obterProduto.getValorVenda();

        if(novaQtd==0){
            obterProduto.setQuantidadeItem(novaQtd);
            obterProduto.setQtdAtual(novaQtd);
            obterProduto.setValorTotalEmEstoque(novaQtd);
            obterProduto.setValorTotalAVender(novaQtd);
            obterProduto.setStatus("Em falta");
            estoqueRepository.save(obterProduto);
        }
        else if(qtdAtual==0 && novaQtd!=0){

            obterProduto.setQuantidadeItem(novaQtd);
            obterProduto.setQtdAtual(novaQtd);
            obterProduto.setValorTotalEmEstoque(novaQtd*valorComprado);
            obterProduto.setValorTotalAVender(novaQtd*valorAvender);
            obterProduto.setStatus("Bom");
            estoqueRepository.save(obterProduto);
        } else if (qtdAtual!=0 && novaQtd!=0) {
            int somaQtd = novaQtd+obterProduto.getQtdAtual();
            obterProduto.setQuantidadeItem(somaQtd);
            obterProduto.setQtdAtual(somaQtd);
            obterProduto.setValorTotalEmEstoque(somaQtd*valorComprado);
            obterProduto.setValorTotalAVender(somaQtd*valorAvender);
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
