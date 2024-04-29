package back.dalessandra.controller.configuracao;

import back.dalessandra.repository.Configuracao.ConfiguracaoRepository;
import back.dalessandra.service.configuracao.configuracaoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

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
        configServe.setarParametro(id, valor);
    }
}
