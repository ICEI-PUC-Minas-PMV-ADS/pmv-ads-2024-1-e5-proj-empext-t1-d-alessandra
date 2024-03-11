package back.dalessandra.repository.financeiro;

import back.dalessandra.Model.Financeiro;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface FinanceiroRepository extends JpaRepository<Financeiro,Integer> {
    @Query("select u from Financeiro u where id_despesa = ?1")
    Financeiro obterInfo(@Param("id_despesa") int id_produto);

    @Query("select u from Financeiro u where nome_despesa =?1")
    Financeiro buscarNomeDespesa(@Param("nome_despesa") String nome_despesa);

    @Query("select u from Financeiro u where tipo_despesa =?1")
    Financeiro buscarTipoDespesa(@Param("tipo_despesa") String tipo_despesa);


}