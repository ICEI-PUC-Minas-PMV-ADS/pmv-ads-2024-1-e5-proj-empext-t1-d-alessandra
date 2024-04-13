package back.dalessandra.repository.cliente;

import back.dalessandra.Model.Cliente;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface ClienteDevedorRepository extends JpaRepository<Cliente,Integer> {
        @Query("SELECT cli.codCliente, cli.nomeCliente, ven.codVenda, ven.dtVenda, ven.vlTotal, ven.formaPagto FROM Venda as ven INNER JOIN Cliente as cli ON ven.codCliente = cli.codCliente WHERE ven.formaPagto = 'AN' "
        )
        List<?> listarCLientesDevedores();
}
