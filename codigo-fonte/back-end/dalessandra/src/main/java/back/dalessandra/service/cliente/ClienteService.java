package back.dalessandra.service.cliente;

import back.dalessandra.DTO.HistoricoComprasClienteDTO;
import back.dalessandra.Model.Cliente;
import back.dalessandra.Model.filter.ClienteFilter;
import back.dalessandra.repository.cliente.ClienteDevedorRepository;
import back.dalessandra.repository.cliente.ClienteRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.Date;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class ClienteService {

    private final ClienteRepository clienteRepository;
    private final ClienteDevedorRepository clienteDevedorRepository;

    public List<Cliente> findAll() {
        return clienteRepository.findAll();
    }

    public Optional<Cliente> findByCodCliente(Integer codCliente) {
        return clienteRepository.findByCodCliente(codCliente);
    }

    public Page<Cliente> find(ClienteFilter filter, Pageable page) {
        return clienteRepository.find(filter, page);
    }

    public Cliente create(Cliente cliente) {
        Integer codigo = clienteRepository.findAll().size() + 1;
        cliente.setCodCliente(codigo);
        cliente.setDtCadastro(LocalDate.now());
        clienteRepository.create(cliente);
        return cliente;
    }

    public Cliente update(Cliente cliente, Integer codCliente){
        cliente.setCodCliente(codCliente);
        clienteRepository.update(cliente);
        return cliente;
    }

    public void deleteByCliente(Integer codCliente){
        clienteRepository.deleteByCliente(codCliente);
    }

    public List<HistoricoComprasClienteDTO> historicoComprasCliente(int codCliente,String tipoDeListagem){
        if(tipoDeListagem.equalsIgnoreCase("compras recentes")){
            return  clienteDevedorRepository.comprarRecentes(codCliente);
        }
        else if(tipoDeListagem.equalsIgnoreCase("compras pendentes")){
            return  clienteDevedorRepository.comprasEmAberto(codCliente);
        }else {
            return clienteDevedorRepository.todasAsCompras(codCliente);
        }
    }
}
