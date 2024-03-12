package back.dalessandra.repository.financeiro;

import back.dalessandra.Model.Financeiro;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface FinanceiroRepository extends JpaRepository<Financeiro,Integer> {
    @Query("select u from Financeiro u where idDespesa = ?1")
    Financeiro obterInfo(@Param("idDespesa") int idDespesa);

    @Query("select u from Financeiro u where nomeDespesa =?1")
    Financeiro buscarNomeDespesa(@Param("nomeDespesa") String nomeDespesa);

    @Query("select u from Financeiro u where tipoDespesa =?1")
    Financeiro buscarTipoDespesa(@Param("tipoDespesa") String tipoDespesa);


}