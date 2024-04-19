package back.dalessandra.controller.venda;

import back.dalessandra.Model.Venda;
import back.dalessandra.Model.dto.VendaDto;
import back.dalessandra.service.venda.VendaService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.List;

@RestController
@Controller
@RequestMapping("/venda")
@RequiredArgsConstructor
public class VendaController {

    private final VendaService vendaService;

    @GetMapping
    public List<Venda> findAll() {
        return vendaService.findAll();
    }

    @GetMapping("/{codVenda}")
    public Venda findByCodVenda(@PathVariable Integer codVenda) {
        return vendaService.findByCodVenda(codVenda).orElse(null);
    }

    @GetMapping("/totalVendas")
    public float calcularTotalVendas() {
        return vendaService.calcularTotalVendas();
    }

    @GetMapping("/relatorio-dia")
    public Page<Venda> findByDiaVenda(LocalDateTime dtVenda, Pageable pageable) {
        return vendaService.findByDiaVenda(dtVenda, pageable);
    }

    @PostMapping
    public VendaDto create(@RequestBody VendaDto venda) {
        return vendaService.create(venda);
    }

    @DeleteMapping("/{codVenda}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteByVenda(@PathVariable Integer codVenda){
        vendaService.deleteByVenda(codVenda);
    }
}
