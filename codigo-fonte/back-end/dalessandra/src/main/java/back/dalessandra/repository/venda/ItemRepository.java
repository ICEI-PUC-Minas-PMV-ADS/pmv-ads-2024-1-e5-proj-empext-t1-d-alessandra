package back.dalessandra.repository.venda;

import back.dalessandra.Model.Item;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

public interface ItemRepository extends JpaRepository<Item,Integer> {

    @Modifying
    @Transactional
    @Query("insert into Item (codVenda, codProduto, quantidade, valorUnit, vlTotal)" +
            "values (:#{item.codVenda}," +
            ":#{item.codProduto},)" +
            ":#{item.quantidade}," +
            ":#{item.valorUnit}," +
            ":#{item.vlTotal})")
    void create(Item item);
}
