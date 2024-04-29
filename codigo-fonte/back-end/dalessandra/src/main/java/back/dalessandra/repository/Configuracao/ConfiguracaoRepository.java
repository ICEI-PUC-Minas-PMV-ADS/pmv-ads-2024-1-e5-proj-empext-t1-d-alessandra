package back.dalessandra.repository.Configuracao;

import back.dalessandra.Model.Configuracoes;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.web.bind.annotation.PathVariable;

import javax.xml.crypto.Data;
import java.util.Date;
import java.util.List;

public interface ConfiguracaoRepository extends JpaRepository<Configuracoes,Integer> {
    @Query("Select c.valorParametro from Configuracoes c where parametro ='emailsParaNotificao'")
    String recuperandoParametroEmail();
    @Query("Select c.valorParametro from Configuracoes c where parametro ='frequenciaDiasDeCobranca'")
    String recuperandoParametroDiasDeCobraca();
    @Query("Select c.valorParametro from Configuracoes c where parametro ='frequenciaDiasEvnvioEmail'")
    String recuperandoParameFrequenciaNotificao();
    @Query("Select c.valorParametro from Configuracoes c where parametro ='dataAtual'")
    Date recuperandoUltimaModificacao();
    @Query("Select c from Configuracoes c where id =?1")
    Configuracoes updateParametro(@PathVariable("id") int id);
}
