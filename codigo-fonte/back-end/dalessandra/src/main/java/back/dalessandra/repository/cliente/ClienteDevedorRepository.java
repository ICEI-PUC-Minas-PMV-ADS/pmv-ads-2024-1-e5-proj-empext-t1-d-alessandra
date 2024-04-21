package back.dalessandra.repository.cliente;

import back.dalessandra.DTO.*;
import back.dalessandra.Model.Cliente;
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

        @Query("select new back.dalessandra.DTO.ListaHistoricoClienteDTO(cli.codCliente, " +
                "cli.nomeCliente, " +
                "cli.email, " +
                "count(v.codVenda) as qtdDeCompra, " +
                "COUNT(CASE WHEN v.formaPagto = 'AN' THEN 1 END) AS qtdComprasPendentesPagamento) " +
                "from " +
                "Cliente cli " +
                "left join " +
                "Venda v " +
                "on " +
                "cli.codCliente = v.codCliente " +
                "group by " +
                "cli.codCliente, cli.nomeCliente, cli.email")
        List<ListaHistoricoClienteDTO> clientesCadastrados();

        @Query("select new back.dalessandra.DTO.DadosClientesDTO(\n" +
                "\t c.codCliente,\n" +
                "\t c.nomeCliente,\n" +
                "\t c.cpfCnpj,\n" +
                "\t c.email,\n" +
                "\t c.telefone,\n" +
                "\t c.rua || ', ' || c.bairro || ' - ' || c.cidade AS endereco,\n" +
                "\t c.dtCadastro,\n" +
                "\t count(v.codVenda)as qtdDeCompra,\n" +
                "\t COUNT(CASE WHEN v.formaPagto = 'AN' THEN 1 END) AS qtdComprasPendentesPagamento)\n" +
                //"\t ARRAY_AGG(CASE WHEN v.formaPagto = 'AN' THEN v.codVenda END) WITHIN GROUP (ORDER BY v.codVenda) AS pedidosPendentesPagamento)\n" +
                " from \n" +
                " \tCliente c\n" +
                " left join \n" +
                " \tVenda v \n" +
                " on \n" +
                " \tc.codCliente = v.codCliente\n" +
                " where \n" +
                " \tc.codCliente =?1\n" +
                " group by \n" +
                " \tc.nomeCliente,\n" +
                "\tc.email,\n" +
                "\tc.codCliente, \n" +
                "\tc.rua,\n" +
                "\tc.bairro, \n" +
                "\tc.cidade,\n" +
                "\tc.telefone,\n" +
                "\tc.cpfCnpj,\n" +
                "\tc.dtCadastro")
        DadosClientesDTO informacoesCliente(@Param("codCliente") int codCliente);

        @Query(
                "SELECT new back.dalessandra.DTO.HistoricoComprasClienteDTO(" +
                        "i.codVenda, " +
                        "e.nomeProduto, " +
                        "i.quantidade, " +
                        "i.vlTotal, " +
                        "v.dtVenda, " +
                        "c.nomeCliente) " +
                        "FROM Cliente c " +
                        "INNER JOIN Venda v ON c.codCliente = v.codCliente " +
                        "INNER JOIN Item i ON v.codVenda = i.codVenda " +
                        "INNER JOIN Estoque e ON i.codProduto = e.codProduto " +
                        "WHERE c.codCliente = ?1 " +
                        "ORDER BY v.dtVenda DESC " +
                        "LIMIT 5"
        )
        List<HistoricoComprasClienteDTO>comprarRecentes(@Param("codCliente") int codCliente);
        @Query(
                "SELECT new back.dalessandra.DTO.HistoricoComprasClienteDTO(" +
                        "i.codVenda, " +
                        "e.nomeProduto, " +
                        "i.quantidade, " +
                        "i.vlTotal, " +
                        "v.dtVenda, " +
                        "c.nomeCliente) " +
                        "FROM Cliente c " +
                        "INNER JOIN Venda v ON c.codCliente = v.codCliente " +
                        "INNER JOIN Item i ON v.codVenda = i.codVenda " +
                        "INNER JOIN Estoque e ON i.codProduto = e.codProduto " +
                        "WHERE c.codCliente = ?1 " +
                        "ORDER BY v.dtVenda DESC "

        )
        List<HistoricoComprasClienteDTO>todasAsCompras(@Param("codCliente") int codCliente);
        @Query(
                "SELECT new back.dalessandra.DTO.HistoricoComprasClienteDTO(" +
                        "i.codVenda, " +
                        "e.nomeProduto, " +
                        "i.quantidade, " +
                        "i.vlTotal, " +
                        "v.dtVenda, " +
                        "c.nomeCliente) " +
                        "FROM Cliente c " +
                        "INNER JOIN Venda v ON c.codCliente = v.codCliente " +
                        "INNER JOIN Item i ON v.codVenda = i.codVenda " +
                        "INNER JOIN Estoque e ON i.codProduto = e.codProduto " +
                        "WHERE c.codCliente = ?1 and v.formaPagto = 'AN' " +
                        "ORDER BY v.dtVenda DESC "

        )
        List<HistoricoComprasClienteDTO>comprasEmAberto(@Param("codCliente") int codCliente);

}
