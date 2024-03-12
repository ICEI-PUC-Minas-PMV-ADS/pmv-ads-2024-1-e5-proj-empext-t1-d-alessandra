package back.dalessandra.controller.estoque;

import back.dalessandra.Model.Estoque;
import back.dalessandra.service.estoque.EstoqueService;
import back.dalessandra.service.estoque.EstoqueServiceMore;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@RestController
@RequestMapping("/estoque")
@RequiredArgsConstructor
public class EstoqueController {

    EstoqueService estoqueService;

    @Autowired
    EstoqueServiceMore estoqueServiceMore;
    @PostMapping()
    public void cadastrarEstoque(Estoque estoque){
        estoqueService.cadastrarEstoque(estoque);
    }
    @GetMapping()
    public List<Estoque> listarEstoque(){
        return  estoqueService.listarEstoque();
    }
    @DeleteMapping("{id}")
    public String apagarProdutoEstoque(@PathVariable("id") int id){
        return estoqueService.excluirProdutoEstoque(id);
    }
    @PutMapping("baixaItem/{codProduto}/{qtdSaida}")
    public String  darBaixaEstoque(@PathVariable("codProduto") int codProduto, @PathVariable("qtdSaida") int qtdSaida){
       return estoqueServiceMore.baixaNoEstoque(codProduto, qtdSaida);
    }
    @PutMapping("adicionarMaisQuantidade/{cod}/{novaQtd}")
    public void atualizarQtdEstoque(@PathVariable("cod") int cod, @PathVariable("novaQtd") int novaQtd){
        estoqueServiceMore.atualizarQtdEstoque(cod, novaQtd);
    }
    @GetMapping("buscarCodigoProduto/{nomeProduto}")
    public Estoque buscarCodigoProduto(@PathVariable("nomeProduto") String nomeProduto){
        return estoqueServiceMore.buscarCodigoProduto(nomeProduto);
    }
    @GetMapping("quantidadeDeItemCadastrados")
    public int quantidadeDeItemCadastrados(){
        return estoqueServiceMore.qtdItemCadastrados();
    }
    @GetMapping("valorEstoqueComprado")
    public float valorEstoqueComprado(){
        return estoqueServiceMore.valorEstoqueComprado();
    }
    @GetMapping("filtroPorEstatus/{status}")
    public List<Estoque> filtroPorEstatus(@PathVariable("status") String status){
        return estoqueServiceMore.filtroPorEstatus(status);
    }
}
