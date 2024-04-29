package back.dalessandra.controller.configuracao;

import back.dalessandra.repository.Configuracao.ConfiguracaoRepository;
import back.dalessandra.service.configuracao.configuracaoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;

@Controller
@RestController
@RequestMapping("/configuracao")
public class configuracaoController {
    @Autowired
    configuracaoService configServe;
    @GetMapping("/recuperarParametroEmail")
    public String recuperarParametroEmail(){
        return  configServe.recuperandoParametroEmail();
    }
    @GetMapping("/recuperandoParametroFrequenciaAvisoEstoque")
    public String recuperandoParametroFrequenciaAvisoEstoque(){
        return configServe.recuperandoParameFrequenciaNotificao();
    }
    @GetMapping("/recuperandoParametroDiasCobranca")
    public String recuperandoParametroDiasCobranca(){

        return configServe.recuperandoParametroDiasDeCobraca();
    }
    @PutMapping("/atualizarValorParametro/{id}/{valor}")
    public void atualizarValorParametro(@PathVariable("id")int id, @PathVariable("valor") String valor){
        if(id==1){
            configServe.setarParametro(id, valor);
            configServe.setarParametro(4, LocalDate.now().format(DateTimeFormatter.ofPattern("dd/MM/yyyy")));
        }
        configServe.setarParametro(id, valor);
    }
}
