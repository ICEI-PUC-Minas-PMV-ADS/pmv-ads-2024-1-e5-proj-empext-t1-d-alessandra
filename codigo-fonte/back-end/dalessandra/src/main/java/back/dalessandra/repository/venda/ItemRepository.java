package back.dalessandra.repository.venda;

import back.dalessandra.Model.Item;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ItemRepository extends JpaRepository<Item,Integer>{

    @Modifying
    @Transactional
    @Query("insert into Item (codVenda, codProduto, valorUnit, quantidade, vlTotal)" +
            "values (:#{#item.codVenda}," +
            ":#{#item.codProduto}," +
            ":#{#item.valorUnit}," +
            ":#{#item.quantidade}," +
            ":#{#item.vlTotal})")
    void create(Item item);
}
