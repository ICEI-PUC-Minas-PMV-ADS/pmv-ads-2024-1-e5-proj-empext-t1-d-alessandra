package back.dalessandra.repository.venda;

import back.dalessandra.Model.Venda;
import back.dalessandra.Model.filter.VendaFilter;
import back.dalessandra.Model.dto.VendaDto;
import jakarta.transaction.Transactional;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface VendaRepository extends JpaRepository<Venda,Integer> {

    @Query("select u from Venda u")
    List<Venda> findAll();

    @Query("select u from Venda u where codVenda = ?1")
    Optional<Venda> findByCodVenda(Integer codVenda);

    @Query("select u from Venda u where formaPagto = ?1")
    List<Venda> findByFormaPagto(String formaPagto);

    @Query("select u from Venda u where dtVenda >= :#{#filter.dataInicio} and dtVenda <= :#{#filter.dataFim}")
    Page<Venda> findByDiaVenda(VendaFilter filter, Pageable pageable);

    @Query("select u from Venda u where dtVenda >= :#{#filter.dataInicio} and dtVenda <= :#{#filter.dataFim}")
    List<Venda> findByDiaVenda(VendaFilter filter);

    @Modifying
    @Transactional
    @Query("insert into Venda (codVenda, codCliente, dtVenda, formaPagto, vlTotal) " +
            "values (:#{#venda.codVenda}, " +
            ":#{#venda.codCliente}, " +
            ":#{#venda.dtVenda}, " +
            ":#{#venda.formaPagto}, " +
            ":#{#venda.vlTotal})")
    void create(VendaDto venda);

    @Query("SELECT SUM(f.vlTotal) FROM Venda f")
    float calcularTotalVendas();

    @Modifying
    @Transactional
    @Query("delete from Venda where codVenda = :codVenda")
    void deleteByVenda(Integer codVenda);

    @Query("select u from Venda u where codVenda=?1")
    Venda recuperarDadosVedna(@Param("codVenda") int codVenda);


}
