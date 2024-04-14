package back.dalessandra.repository.cliente;

import back.dalessandra.DTO.ListaComprasClienteDevedorDTO;
import back.dalessandra.Model.Cliente;
import back.dalessandra.DTO.ClienteDevedorDTO;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface ClienteDevedorRepository extends JpaRepository<Cliente,Integer> {
        @Query("SELECT new back.dalessandra.DTO.ClienteDevedorDTO(cli.codCliente, cli.nomeCliente, ven.codVenda, ven.dtVenda,ven.vlTotal, ven.formaPagto) FROM Venda as ven INNER JOIN Cliente as cli ON ven.codCliente = cli.codCliente WHERE ven.formaPagto = 'AN' or ven.formaPagto = 'an' "
        )
        List<ClienteDevedorDTO> listarCLientesDevedores();
        @Query("select new back.dalessandra.DTO.ListaComprasClienteDevedorDTO(e.nomeProduto,e.tamanho,i.quantidade,e.valorVenda,i.vlTotal,v.dtVenda)" +
                "from\n" +
                "\tItem i\n" +
                "inner join\n" +
                "\tVenda v\n" +
                "\ton i.codVenda = v.codVenda\n" +
                "inner join\n" +
                "\tEstoque e \n" +
                "\ton \n" +
                "\ti.codProduto = e.codProduto\n" +
                "where i.codVenda = ?1"
        ) List<ListaComprasClienteDevedorDTO> listarProdutosClienteDevedor(@Param("codVenda") int codVenda);

}
