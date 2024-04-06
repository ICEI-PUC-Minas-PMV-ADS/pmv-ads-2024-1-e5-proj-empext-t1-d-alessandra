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

    @PostMapping
    public Financeiro cadastro(@RequestBody Financeiro financeiro){
        return financeiroService.cadastro(financeiro);
    }

    @GetMapping("/totalDespesas")
    public float calcularTotalDespesas() {
        return financeiroService.calcularTotalDespesas();
    }

    @GetMapping("/filtro")
    public List<Financeiro> findByDias(
            @RequestParam(required = false) Integer dia,
            @RequestParam(required = false) Integer mes,
            @RequestParam(required = false) Integer ano) {

        return financeiroService.findByDias(dia, mes, ano);
    }

    @GetMapping("/despesasOrdenadas")
    public List<Financeiro> findAllOrderByDataDespesaDesc() {
        return financeiroService.findAllOrderByDataDespesaDesc();
    }

    @DeleteMapping("{idDespesa}")
    public String excluirDespesa(@PathVariable("idDespesa") int idDespesa){
        return financeiroService.excluirDespesa(idDespesa);
    }

    @PutMapping("tipoDespesa/{idDespesa}")
    public ResponseEntity<String> updateTipoDespesa(@PathVariable Integer idDespesa, @RequestBody String tipoDespesa) {
        return updateAttribute(idDespesa, "tipoDespesa", tipoDespesa);
    }

    @PutMapping("nomeDespesa/{idDespesa}")
    public ResponseEntity<String> updateNomeDespesa(@PathVariable Integer idDespesa, @RequestBody String nomeDespesa) {
        return updateAttribute(idDespesa, "nomeDespesa", nomeDespesa);
    }

    @PutMapping("valorDespesa/{idDespesa}")
    public ResponseEntity<String> updateValorDespesa(@PathVariable Integer idDespesa, @RequestBody float valorDespesa) {
        return updateAttribute(idDespesa, "valorDespesa", valorDespesa);
    }

    @PutMapping("dataDespesa/{idDespesa}")
    public ResponseEntity<String> updateDataDespesa(@PathVariable Integer idDespesa, @RequestBody Date dataDespesa) {
        return updateAttribute(idDespesa, "dataDespesa", dataDespesa);
    }

    @PutMapping("dataVencimento/{idDespesa}")
    public ResponseEntity<String> updateDataVencimento(@PathVariable Integer idDespesa, @RequestBody Date dataVencimento) {
        return updateAttribute(idDespesa, "dataVencimento", dataVencimento);
    }

    private ResponseEntity<String> updateAttribute(Integer idDespesa, String attributeName, Object attributeValue) {
        Optional<Financeiro> financeiroOptional = financeiroService.findById(idDespesa);
        if (financeiroOptional.isPresent()) {
            Financeiro financeiro = financeiroOptional.get();
            switch (attributeName) {
                case "tipoDespesa":
                    financeiro.setTipoDespesa((String) attributeValue);
                    break;
                case "nomeDespesa":
                    financeiro.setNomeDespesa((String) attributeValue);
                    break;
                case "valorDespesa":
                    financeiro.setValorDespesa((float) attributeValue);
                    break;
                case "dataDespesa":
                    financeiro.setDataDespesa((Date) attributeValue);
                    break;
                case "dataVencimento":
                    financeiro.setDataVencimento((Date) attributeValue);
                    break;
                default:
                    return ResponseEntity.badRequest().body("Atributo inválido");
            }
            financeiroService.cadastro(financeiro);
            return ResponseEntity.ok(attributeName + " atualizado com sucesso");
        } else {
            return ResponseEntity.notFound().build();
        }
    }

}