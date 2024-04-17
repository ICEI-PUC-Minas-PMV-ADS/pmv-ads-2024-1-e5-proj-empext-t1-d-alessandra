package back.dalessandra.repository.estoque;

import back.dalessandra.Model.Estoque;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface EstoqueRepository extends JpaRepository<Estoque,Integer> {
    @Query("select U from Estoque U where codProduto=?1 ")
    Estoque obterProduto(@Param("codProduto") int codProduto);

    @Query("select u from Estoque u where nomeProduto =?1")
    Estoque buscarCodigoProduto(@Param("nomeProduto") String nomeProduto);
    @Query("select count(*) from Estoque")
    int quantidadeItem();

    @Query("Select sum(valorTotalEmEstoque) from Estoque")
    float valorEstoqueSemValorConsumidor();

    @Query("select u from Estoque u where status=?1")
    List<Estoque> filtroPorEstatus(@Param("status") String status);

    @Query("SELECT u FROM Estoque u WHERE u.status='Em falta' OR u.status='Nivel Critico'")
    List<Estoque> verificarItemsCriticos();
    default Page<Estoque> verificarItemsCriticos(PageRequest pageRequest) {
        List<Estoque> itemsCriticos = verificarItemsCriticos();
        int start = (int) pageRequest.getOffset();
        int end = (start + pageRequest.getPageSize()) > itemsCriticos.size() ? itemsCriticos.size() : (start + pageRequest.getPageSize());
        List<Estoque> pagina = itemsCriticos.subList(start, end);
        return new PageImpl<>(pagina, pageRequest, itemsCriticos.size());
    }
    @Query("SELECT u FROM Estoque u WHERE u.nomeProduto LIKE %:nomeProduto% OR u.status LIKE %:status%")
    Page<Estoque>filroEstoque(String nomeProduto, String status, PageRequest pageRequest);
}
