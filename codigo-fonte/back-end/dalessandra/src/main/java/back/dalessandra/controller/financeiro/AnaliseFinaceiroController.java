package back.dalessandra.controller.financeiro;

import back.dalessandra.DTO.entradasVsSaidasDTO;
import back.dalessandra.DTO.relatorioMaioresMetodosPagamentoDTO;
import back.dalessandra.service.financeiro.AnaliseFinanceiroService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@Controller
@RestController
@RequestMapping("/analiseFinanceiro")
public class AnaliseFinaceiroController {

    @Autowired
    AnaliseFinanceiroService analiseFinanceiroService;

    @GetMapping("/relatorioDeEntradasVsSaidas/{ano}")
    public List<entradasVsSaidasDTO> relatorioEntradasVsSaidas(@PathVariable("ano")int ano){
        return  analiseFinanceiroService.analiseDeEntradasESaidaas(ano);
    }
    @GetMapping("/relatorioMetodosPagamento/{ano}")
    public List<relatorioMaioresMetodosPagamentoDTO> relatorioMetodosPagamento(@PathVariable("ano")int ano){
        return analiseFinanceiroService.obterRelatorioDepagamento(ano);
    }
}
