package back.dalessandra.controller.estoque;

import back.dalessandra.Model.Estoque;
import back.dalessandra.service.estoque.EstoqueService;
import back.dalessandra.service.estoque.EstoqueServiceBd;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@RestController
@RequestMapping("/estoque")
public class EstoqueController {
    @Autowired
    EstoqueService estoqueService;
    @Autowired
    EstoqueServiceBd estoqueServiceBd;
    @PostMapping()
    public String cadastrarEstoque(@RequestBody Estoque estoque){
        return estoqueService.cadastrarEstoque(estoque);
    }
    @GetMapping()
    public Page<Estoque> listarEstoque(@RequestParam(defaultValue = "0") int pagina, @RequestParam(defaultValue = "10") int tamanhoPagina, @RequestParam(required = false) String nomeProdudo, @RequestParam(required = false) String status){
        return estoqueService.listarEstoque(pagina, tamanhoPagina,nomeProdudo,status);
    }
    @GetMapping("recuperarNivelCriticoESemEstoque")
    public Page<Estoque>recuperarNivelCriticoESemEstoque(@RequestParam(defaultValue = "0") int pagina, @RequestParam(defaultValue = "10") int tamanhoPagina){
        return estoqueService.recuperarNivelBaixo(pagina, tamanhoPagina);
    }
    @DeleteMapping("{id}")
    public String apagarProdutoEstoque(@PathVariable("id") int id){
        return estoqueService.excluirProdutoEstoque(id);
    }
    @PutMapping("baixaItem/{codProduto}/{qtdSaida}")
    public String  darBaixaEstoque(@PathVariable("codProduto") int codProduto, @PathVariable("qtdSaida") int qtdSaida){
       return estoqueServiceBd.baixaNoEstoque(codProduto, qtdSaida);
    }
    @PutMapping("adicionarMaisQuantidade/{cod}/{novaQtd}")
    public void atualizarQtdEstoque(@PathVariable("cod") int cod, @PathVariable("novaQtd") int novaQtd){
        estoqueServiceBd.atualizarQtdEstoque(cod, novaQtd);
    }
    @GetMapping("buscarCodigoProduto/{nomeProduto}")
    public Estoque buscarCodigoProduto(@PathVariable("nomeProduto") String nomeProduto){
        return estoqueServiceBd.buscarCodigoProduto(nomeProduto);
    }
    @GetMapping("quantidadeDeItemCadastrados")
    public int quantidadeDeItemCadastrados(){
        return estoqueServiceBd.qtdItemCadastrados();
    }
    @GetMapping("valorEstoqueComprado")
    public float valorEstoqueComprado(){
        return estoqueServiceBd.valorEstoqueComprado();
    }
    @GetMapping("filtroPorEstatus/{status}")
    public List<Estoque> filtroPorEstatus(@PathVariable("status") String status){
        return estoqueServiceBd.filtroPorEstatus(status);
    }
    @PutMapping("atualizarValorVenda/{id}/{novoValor}")
    public String atualizarValorVenda(@PathVariable("id") int id, @PathVariable("novoValor") float novoValor){
        estoqueServiceBd.atualizarValorVenda(id,novoValor);
        return ("Atualizado com sucesso");
    }
    @PutMapping("atualizarValorComprado/{id}/{novoValor}")
    public String atualizarValorComprado(@PathVariable("id") int id, @PathVariable("novoValor") float novoValor){
        estoqueServiceBd.atualizarValorEstoque(id,novoValor);
        return ("Atualizado com sucesso");
    }
}
