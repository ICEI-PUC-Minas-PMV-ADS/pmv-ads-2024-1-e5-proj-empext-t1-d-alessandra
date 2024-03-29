package back.dalessandra.repository.venda;

import back.dalessandra.Model.Venda;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface VendaRepository extends JpaRepository<Venda,Integer> {

    @Query("select u from Venda u")
    List<Venda> findAll();

    @Query("select u from Venda u where codVenda = ?1")
    Optional<Venda> findByCodVenda(Integer codVenda);

    @Query("select u from Venda u where formaPagto = ?1")
    List<Venda> findByFormaPagto(String formaPagto);

    @Modifying
    @Transactional
    @Query("insert into Venda (codVenda, codCliente, dtVenda, formaPagto, vlTotal) " +
            "values (:#{#venda.codVenda}, " +
            ":#{#venda.codCliente}, " +
            ":#{#venda.dtVenda}, " +
            ":#{#venda.formaPagto}, " +
            ":#{#venda.vlTotal})")
    void create(Venda venda);

    @Query("SELECT SUM(f.vlTotal) FROM Venda f")
    float calcularTotalVendas();

    @Modifying
    @Transactional
    @Query("delete from Venda where codVenda = :codVenda")
    void deleteByVenda(Integer codVenda);
}
