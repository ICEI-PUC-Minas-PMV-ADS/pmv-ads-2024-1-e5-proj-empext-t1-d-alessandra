package back.dalessandra.repository.Configuracao;

import back.dalessandra.Model.Configuracoes;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.Date;

@Repository
public interface ConfiguracaoRepository extends JpaRepository<Configuracoes,Integer> {

    @Query("Select c.valorParametro from Configuracoes c where parametro ='emailsParaNotificao'")
    String recuperandoParametroEmail();

    @Query("Select c.valorParametro from Configuracoes c where parametro ='frequenciaDiasDeCobranca'")
    String recuperandoParametroDiasDeCobraca();

    @Query("Select c.valorParametro from Configuracoes c where parametro ='frequenciaDiasEvnvioEmail'")
    String recuperandoParameFrequenciaNotificao();

    @Query("Select c.valorParametro from Configuracoes c where parametro ='dataAtual'")
    Date recuperandoUltimaModificacao();
}
