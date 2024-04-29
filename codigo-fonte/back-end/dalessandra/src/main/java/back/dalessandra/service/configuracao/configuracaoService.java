package back.dalessandra.service.configuracao;

import back.dalessandra.Model.Configuracoes;
import back.dalessandra.repository.Configuracao.ConfiguracaoRepository;
import jakarta.annotation.PostConstruct;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.Date;
import java.util.List;

@Service
@RequiredArgsConstructor
public class configuracaoService {
   @Autowired
    ConfiguracaoRepository configuracaoRepository;
   @PostConstruct
   public void init() {
        List<Configuracoes> configuracoes = configuracaoRepository.findAll();
        if (configuracoes.size()==0){
            setandoParametro("frequenciaDiasEvnvioEmail","30");
            setandoParametro("frequenciaDiasDeCobranca","30");
            setandoParametro("emailsParaNotificao","test@gmail.com");
            setandoParametro("dataAtual",LocalDate.now().format(DateTimeFormatter.ofPattern("dd/MM/yyyy")));
        }

    }

    public void setandoParametro(String parametro, String valor){
        Configuracoes config = new Configuracoes();
        config.setParametro(parametro);
        config.setValorParametro(valor);
        configuracaoRepository.save(config);
    }
    public String recuperandoParametroEmail(){
       return configuracaoRepository.recuperandoParametroEmail();
    }
    public String recuperandoParametroDiasDeCobraca(){
       return configuracaoRepository.recuperandoParametroDiasDeCobraca();
    }
    public String recuperandoParameFrequenciaNotificao(){
        return configuracaoRepository.recuperandoParameFrequenciaNotificao();
    }
    public Date recuperandoDataEnvioEmail(){
       return  configuracaoRepository.recuperandoUltimaModificacao();
    }
    public void setarParametro(int id,String valor){
        Configuracoes config = configuracaoRepository.updateParametro(id);
        config.setValorParametro(valor);
        configuracaoRepository.save(config);

    }
}
