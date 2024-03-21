package back.dalessandra.controller.financeiro;

import back.dalessandra.Model.Financeiro;
import back.dalessandra.Model.Venda;
import back.dalessandra.service.financeiro.FinanceiroService;
import back.dalessandra.service.venda.VendaService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;
import java.util.Optional;

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
    public List<Venda> findByFormaPagto(String formaPagto) {
        return vendaService.findByFormaPagto(formaPagto);
    }


    @GetMapping("/{dataDespesa}")
    public Financeiro findBydataDespesa(@PathVariable Date dataDespesa) {
        return financeiroService.findBydataDespesa(dataDespesa).orElse(null);
    }

    @GetMapping("/{tipoDespesa}")
    public Financeiro findBytipoDespesa(@PathVariable String tipoDespesa) {
        return financeiroService.findBytipoDespesa(tipoDespesa).orElse(null);
    }

    @PutMapping("/{idDespesa}")
    public Financeiro update(Financeiro financeiro, @PathVariable Integer idDespesa){
        return financeiroService.update(financeiro);
    }


    @PostMapping
    public Financeiro cadastro(@RequestBody Financeiro financeiro){
        return financeiroService.cadastro(financeiro);
    }

    @GetMapping("/totalDespesas")
    public float calcularTotalDespesas() {
        return financeiroService.calcularTotalDespesas();
    }

    @GetMapping("/filtro")
    public List<Financeiro> findByMonthAndYear(@RequestParam int mes, @RequestParam int ano) {
        return financeiroService.findByMonthAndYear(mes, ano);
    }

    @DeleteMapping("{idDespesa}")
    public String excluirDespesa(@PathVariable("idDespesa") int idDespesa){
        return financeiroService.excluirDespesa(idDespesa);
    }

}