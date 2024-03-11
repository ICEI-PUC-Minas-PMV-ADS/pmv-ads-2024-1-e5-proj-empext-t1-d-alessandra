package back.dalessandra.repository.estoque;

import back.dalessandra.Model.Estoque;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface EstoqueRepository extends JpaRepository<Estoque,Integer> {
    @Query("select u from Estoque u where codProduto = ?1")
    Estoque obterProduto(@Param("codProduto") int codProduto);

    @Query("select u from Estoque u where nomeProduto =?1")
    Estoque buscarCodigoProduto(@Param("nomeProduto") String nomeProduto);
    @Query("select count(*) from Estoque")
    int quantidadeItem();

    @Query("Select sum(valorTotalEmEstoque) from Estoque")
    float valorEstoqueSemValorConsumidor();

    @Query("select u from Estoque u where status=?1")
   List<Estoque> filtroPorEstatus(@Param("status") String status);


}
