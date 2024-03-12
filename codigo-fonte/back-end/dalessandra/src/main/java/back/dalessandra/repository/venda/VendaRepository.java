package back.dalessandra.repository.venda;

import back.dalessandra.Model.Venda;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface VendaRepository extends JpaRepository<Venda,Integer> {

    @Query("select u from Venda u")
    List<Venda> findAll();

    @Modifying
    @Transactional
    @Query("insert into Venda (codVenda, codCliente, dtVenda, formaPagto, vlTotal) " +
            "values (:#{#venda.codVenda}, " +
            ":#{#venda.codCliente}, " +
            ":#{#venda.dtVenda}, " +
            ":#{#venda.formaPagto}, " +
            ":#{#venda.vlTotal})")
    void create(Venda venda);

    @Modifying
    @Transactional
    @Query("delete from Venda where codVenda = :codVenda")
    void deleteByVenda(Integer codVenda);
}
