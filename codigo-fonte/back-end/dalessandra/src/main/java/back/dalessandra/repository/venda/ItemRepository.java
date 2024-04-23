package back.dalessandra.repository.venda;

import back.dalessandra.Model.Item;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ItemRepository extends JpaRepository<Item,Integer>{

    @Modifying
    @Transactional
    @Query("insert into Item (codVenda, codProduto, valorUnit, descProduto, quantidade, vlTotal)" +
            "values (:#{#item.codVenda}," +
            ":#{#item.codProduto}," +
            ":#{#item.valorUnit}," +
            ":#{#item.descProduto}," +
            ":#{#item.quantidade}," +
            ":#{#item.vlTotal})")
    void create(Item item);

    @Query(value = "SELECT MAX(nr_sequencia) FROM Item", nativeQuery = true)
    Integer sequenceItem();

    @Query("select u from Item u where codVenda = ?1")
    List<Item> findByCodVenda(Integer codVenda);
}
