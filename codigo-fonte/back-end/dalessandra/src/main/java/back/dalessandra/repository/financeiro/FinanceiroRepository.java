package back.dalessandra.repository.financeiro;

import back.dalessandra.Model.Financeiro;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface FinanceiroRepository extends JpaRepository<Financeiro,Integer> {

    @Query("select u from Financeiro u")
    List<Financeiro> findAll();

    @Query("select u from Financeiro u where idDespesa = ?1")
    Optional<Financeiro> findByidDespesa(Integer idDespesa);

    @Query("select u from Financeiro u where tipoDespesa = ?1")
    Optional<Financeiro> findBytipoDespesa(String tipoDespesa);

    @Modifying
    @Transactional
    @Query("insert into Financeiro (idDespesa, tipoDespesa, nomeDespesa, valorDespesa, dataDespesa) " +
            "values (:#{#financeiro.idDespesa}, " +
            ":#{#financeiro.tipoDespesa}, " +
            ":#{#financeiro.nomeDespesa}, " +
            ":#{#financeiro.valorDespesa}, " +
            ":#{#financeiro.dataDespesa})")
    void post(Financeiro financeiro);

    @Modifying
    @Transactional
    @Query("delete from Financeiro where idDespesa = :idDespesa")
    void deleteById(Integer idDespesa);
}