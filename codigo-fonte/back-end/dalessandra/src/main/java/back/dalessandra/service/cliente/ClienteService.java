package back.dalessandra.service.cliente;

import back.dalessandra.Model.Cliente;
import back.dalessandra.repository.cliente.ClienteRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class ClienteService {

    private final ClienteRepository clienteRepository;

    public List<Cliente> findAll() {
        return clienteRepository.findAll();
    }

    public Optional<Cliente> findByCodCliente(Integer codCliente) {
        return clienteRepository.findByCodCliente(codCliente);
    }

    public Cliente create(Cliente cliente) {
        Integer codigo = clienteRepository.findAll().size() + 1;
        cliente.setCodCliente(codigo);
        clienteRepository.create(cliente);
        return cliente;
    }

    public Cliente update(Cliente cliente){
        clienteRepository.update(cliente);
        return cliente;
    }

    public void deleteByCliente(Integer codCliente){
        clienteRepository.deleteByCliente(codCliente);
    }
}
