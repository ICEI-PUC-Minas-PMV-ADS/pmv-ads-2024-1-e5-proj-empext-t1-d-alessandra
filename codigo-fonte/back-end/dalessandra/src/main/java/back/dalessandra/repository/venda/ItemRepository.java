package back.dalessandra.repository.venda;

import back.dalessandra.Model.Item;
import back.dalessandra.Model.dto.ItemDto;
import back.dalessandra.Model.filter.ItemFilter;
import jakarta.transaction.Transactional;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
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

    @Query("SELECT NEW back.dalessandra.Model.dto.ItemDto(i.codProduto, i.descProduto, e.tipo, e.qtdAtual) " +
            "FROM Item i " +
            "INNER JOIN Estoque e ON i.codProduto = e.codProduto " +
            "GROUP BY i.codProduto, i.descProduto, e.tipo, e.qtdAtual " +
            "ORDER BY SUM(i.quantidade) DESC")
    Page<ItemDto> findMaisVendidos(ItemFilter filter, Pageable pageable);
}
