package back.dalessandra.controller.financeiro;
import back.dalessandra.Model.Financeiro;
import back.dalessandra.Model.Venda;
import back.dalessandra.service.financeiro.FinanceiroService;
import back.dalessandra.service.venda.VendaService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@RestController
@RequestMapping("/financeiro")
@RequiredArgsConstructor
public class FinanceiroController {


    private final FinanceiroService financeiroService;

    private final VendaService vendaService;

    @GetMapping
    public List<Financeiro> findAll() {
        return financeiroService.findAll();
    }

    @GetMapping("/buscarVendas")
    public List<Venda> find() { return vendaService.findAll(); }

    @GetMapping("/buscarFormaPagto")
    public List<Venda> findByFormaPagto(String formaPagto) { return vendaService.findByFormaPagto(formaPagto); }


    @GetMapping("/{idDespesa}")
    public Financeiro findByidDespesa(@PathVariable Integer idDespesa) {
        return financeiroService.findByidDespesa(idDespesa).orElse(null);
    }

    @GetMapping("/{tipoDespesa}")
    public Financeiro findBytipoDespesa(@PathVariable String tipoDespesa) {
        return financeiroService.findBytipoDespesa(tipoDespesa).orElse(null);
    }

    @PostMapping
    public Financeiro cadastro(@RequestBody Financeiro financeiro){
        return financeiroService.cadastro(financeiro);
    }

    @DeleteMapping("{idDespesa}")
    public String excluirDespesa(@PathVariable("idDespesa") int idDespesa){
        return financeiroService.excluirDespesa(idDespesa);
    }

}