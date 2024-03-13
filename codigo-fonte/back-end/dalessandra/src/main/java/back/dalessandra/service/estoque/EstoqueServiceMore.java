package back.dalessandra.service.estoque;

import back.dalessandra.Model.Estoque;
import back.dalessandra.repository.estoque.EstoqueRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service

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
                }
                else{
                    atualizarStatus(nivel);
                    produto.setQtdAtual((int)novaQtd);
                    produto.setStatus(atualizarStatus(nivel));
                    estoqueRepository.save(produto);
                    return "Salvo com sucesso";
                    }
                }
                else { return "Produto nao existe";}
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
            Estoque produto = estoqueRepository.obterProduto(id);
            int qtdAtual =produto.getQtdAtual();
            float valorComprado = produto.getValorComprado();
            float valorAvender = produto.getValorVenda();

            if(novaQtd==0){
                produto.setQuantidadeItem(novaQtd);
                produto.setQtdAtual(novaQtd);
                produto.setValorTotalEmEstoque(novaQtd);
                produto.setValorTotalAVender(novaQtd);
                produto.setStatus("Em falta");
                estoqueRepository.save(produto);
            }
            else if(qtdAtual==0 && novaQtd!=0){

                produto.setQuantidadeItem(novaQtd);
                produto.setQtdAtual(novaQtd);
                produto.setValorTotalEmEstoque(novaQtd*valorComprado);
                produto.setValorTotalAVender(novaQtd*valorAvender);
                produto.setStatus("Bom");
                estoqueRepository.save(produto);
            } else if (qtdAtual!=0 && novaQtd!=0) {
                int somaQtd = novaQtd+produto.getQtdAtual();
                produto.setQuantidadeItem(somaQtd);
                produto.setQtdAtual(somaQtd);
                produto.setValorTotalEmEstoque(somaQtd*valorComprado);
                produto.setValorTotalAVender(somaQtd*valorAvender);
                produto.setStatus("Bom");
                estoqueRepository.save(produto);
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

        public void atualizarValorEstoque(int id, float novoValorComprado){
            Estoque produto = estoqueRepository.obterProduto(id);
            int qtd = produto.getQtdAtual();
            produto.setValorTotalEmEstoque(novoValorComprado);
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
