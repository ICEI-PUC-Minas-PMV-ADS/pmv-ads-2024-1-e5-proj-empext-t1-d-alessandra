package back.dalessandra.controller.estoque;

import back.dalessandra.Model.Estoque;
import back.dalessandra.service.estoque.EstoqueService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@RestController
@RequestMapping("/estoque")
public class EstoqueController {
    @Autowired
    EstoqueService estoqueService;
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

}
