package back.dalessandra.controller.financeiro;

import back.dalessandra.Model.Financeiro;
import back.dalessandra.service.financeiro.FinanceiroService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@RestController
@RequestMapping("/financeiro")
@RequiredArgsConstructor
public class FinanceiroController {

    private final FinanceiroService financeiroService;

    @GetMapping()
    public List<Financeiro> listarFinanceiro(){
        return  financeiroService.listarFinanceiro();
    }
    @DeleteMapping("{id}")
    public String excluirDespesa(@PathVariable("id") int id){
        return financeiroService.excluirDespesa(id);
    }

}