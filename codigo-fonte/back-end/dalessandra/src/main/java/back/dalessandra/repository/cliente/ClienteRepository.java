package back.dalessandra.repository.cliente;

import back.dalessandra.Model.Cliente;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface ClienteRepository extends JpaRepository<Cliente,Integer> {

    @Query("select u from Cliente u order by nomeCliente")
    List<Cliente> findAll();

    @Query("select u from Cliente u where codCliente = :codCliente")
    Optional<Cliente> findByCodCliente(Integer codCliente);

    @Modifying
    @Transactional
    @Query("insert into Cliente (codCliente, nomeCliente, email, telefone, cpfCnpj, rua, bairro, cidade, complemento, dtCadastro) " +
            "values (:#{#cliente.codCliente}, " +
            ":#{#cliente.nomeCliente}, " +
            ":#{#cliente.email}, " +
            ":#{#cliente.telefone}, " +
            ":#{#cliente.cpfCnpj}, " +
            ":#{#cliente.rua}, " +
            ":#{#cliente.bairro}, " +
            ":#{#cliente.cidade}, " +
            ":#{#cliente.complemento}," +
            ":#{#cliente.dtCadastro})")
    void create(Cliente cliente);

    @Modifying
    @Transactional
    @Query("update Cliente set nomeCliente = :#{#cliente.nomeCliente}, " +
            "email = :#{#cliente.email}, " +
            "telefone = :#{#cliente.telefone}, " +
            "cpfCnpj = :#{#cliente.cpfCnpj}, " +
            "rua = :#{#cliente.rua}, " +
            "bairro = :#{#cliente.bairro}, " +
            "cidade = :#{#cliente.cidade}, " +
            "complemento = :#{#cliente.complemento} " +
            "where codCliente = :#{#cliente.codCliente}")
    void update(Cliente cliente);

    @Modifying
    @Transactional
    @Query("delete from Cliente where codCliente = :codCliente")
    void deleteByCliente(Integer codCliente);

}
