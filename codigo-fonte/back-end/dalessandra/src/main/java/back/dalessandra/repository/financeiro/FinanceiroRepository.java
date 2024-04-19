package back.dalessandra.repository.financeiro;

import back.dalessandra.Model.Cliente;
import back.dalessandra.Model.Financeiro;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.Date;
import java.util.List;
import java.util.Optional;
import java.util.Calendar;

public interface FinanceiroRepository extends JpaRepository<Financeiro,Integer> {

    @Query("select u from Financeiro u")
    List<Financeiro> findAll();

    @Query("select u from Financeiro u where dataDespesa = ?1")
    Optional<Financeiro> findBydataDespesa(Date dataDespesa);

    @Query("select u from Financeiro u where tipoDespesa = ?1")
    Optional<Financeiro> findBytipoDespesa(String tipoDespesa);

    @Modifying
    @Transactional
    @Query("insert into Financeiro (idDespesa, tipoDespesa, nomeDespesa, valorDespesa, dataDespesa, dataVencimento) " +
          "values (:#{#financeiro.idDespesa}, " +
          ":#{#financeiro.tipoDespesa}, " +
          ":#{#financeiro.nomeDespesa}, " +
          ":#{#financeiro.valorDespesa}, " +
          ":#{#financeiro.dataDespesa}, " +
          ":#{#financeiro.dataVencimento})")
    void cadastro(Financeiro financeiro);

    @Modifying
    @Transactional
    @Query("delete from Financeiro where idDespesa = :idDespesa")
    void deleteById(Integer idDespesa);

    @Query("SELECT SUM(f.valorDespesa) FROM Financeiro f")
     float calcularTotalDespesas();

    @Query("SELECT f FROM Financeiro f WHERE (:dia is null or DAY(f.dataDespesa) = :dia) AND (:mes is null or MONTH(f.dataDespesa) = :mes) AND (:ano is null or YEAR(f.dataDespesa) = :ano)")
    List<Financeiro> findByDias(@Param("dia") Integer dia, @Param("mes") Integer mes, @Param("ano") Integer ano);


    @Query("SELECT f FROM Financeiro f ORDER BY f.dataDespesa DESC")
    List<Financeiro> findAllOrderByDataDespesaDesc();

    @Query("select f from Financeiro f where idDespesa = ?1")
    Financeiro updateDespesa(@Param("idDespesa") int idDespesa);
}
