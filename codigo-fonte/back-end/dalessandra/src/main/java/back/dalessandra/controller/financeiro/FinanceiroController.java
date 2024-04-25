package back.dalessandra.controller.financeiro;

import back.dalessandra.Model.Financeiro;
import back.dalessandra.Model.Venda;
import back.dalessandra.service.financeiro.FinanceiroService;
import back.dalessandra.service.venda.VendaService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.Date;
import java.util.List;
import java.util.Optional;

@Controller
@RestController
@RequestMapping("/financeiro")
public class FinanceiroController {
    @Autowired
    FinanceiroService financeiroService;

    @Autowired
    VendaService vendaService;

    @GetMapping
    public List<Financeiro> findAll() {
        return financeiroService.findAll();
    }

    @GetMapping("/buscarVendas")
    public List<Venda> find() {
        return vendaService.findAll();
    }

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

    @PostMapping
    public Financeiro cadastro(@RequestBody Financeiro financeiro) {
        return financeiroService.cadastro(financeiro);
    }

    @GetMapping("/totalDespesas")
    public float calcularTotalDespesas() {
        return financeiroService.calcularTotalDespesas();
    }

    @GetMapping("/despesasOrdenadas")
    public List<Financeiro> findAllOrderByDataDespesaDesc() {
        return financeiroService.findAllOrderByDataDespesaDesc();
    }

    @DeleteMapping("{idDespesa}")
    public String excluirDespesa(@PathVariable("idDespesa") int idDespesa) {
        return financeiroService.excluirDespesa(idDespesa);
    }

    @PutMapping("atualizarNomeDespesa/{idDespesa}/{nomeDespesa}")

    public String trocarNomeDespesa(@PathVariable("idDespesa") int idDespesa,
                                    @PathVariable("nomeDespesa") String nomeDespesa) {
        financeiroService.updateNomeDespesa(idDespesa, nomeDespesa);
        return "Salvo com Sucesso";
    }

    @PutMapping("atualizarTipoDespesa/{idDespesa}/{tipoDespesa}")

    public String trocarTipoDespesa(@PathVariable("idDespesa") int idDespesa,
                                    @PathVariable("tipoDespesa") String tipoDespesa) {
        financeiroService.updateTipoDespesa(idDespesa, tipoDespesa);
        return "Salvo com Sucesso";
    }

    @PutMapping("atualizarValorDespesa/{idDespesa}/{valorDespesa}")

    public String trocarValorDespesa(@PathVariable("idDespesa") int idDespesa,
                                     @PathVariable("valorDespesa") float valorDespesa) {
        financeiroService.updateValorDespesa(idDespesa, valorDespesa);
        return "Salvo com Sucesso";
    }

    @PutMapping("atualizarDataDespesa/{idDespesa}")

    public String trocarDataDespesa(@PathVariable("idDespesa")int idDespesa,
                                    @RequestParam("dataDespesa")
                                    @DateTimeFormat(pattern = "dd/MM/yyyy") LocalDate dataDespesa){
        financeiroService.updateDataDespesa(idDespesa, dataDespesa);
        return "Salvo com Sucesso";
    }

    @PutMapping("atualizarDataVencimento/{idDespesa}")

    public String trocarDataVencimento(@PathVariable("idDespesa")int idDespesa,
                                       @RequestParam("dataVencimento")
                                       @DateTimeFormat(pattern = "dd/MM/yyyy") LocalDate dataVencimento){
        financeiroService.updateDataVencimento(idDespesa, dataVencimento);
        return "Salvo com Sucesso";
    }
}