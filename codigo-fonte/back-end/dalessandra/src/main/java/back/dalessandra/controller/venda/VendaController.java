package back.dalessandra.controller.venda;

import back.dalessandra.Model.Venda;
import back.dalessandra.service.venda.VendaService;
import io.swagger.v3.oas.annotations.parameters.RequestBody;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

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

    @PostMapping
    public Venda create(@RequestBody Venda venda) {
        return vendaService.create(venda);
    }

    @DeleteMapping("/{codVenda}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteByVenda(@PathVariable Integer codVenda){
        vendaService.deleteByVenda(codVenda);
    }
}
