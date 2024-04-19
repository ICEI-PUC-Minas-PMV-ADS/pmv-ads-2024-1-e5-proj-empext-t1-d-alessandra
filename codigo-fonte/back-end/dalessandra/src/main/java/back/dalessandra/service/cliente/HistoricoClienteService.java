package back.dalessandra.service.cliente;

import back.dalessandra.DTO.DadosClientesDTO;
import back.dalessandra.DTO.ListaHistoricoClienteDTO;
import back.dalessandra.repository.cliente.ClienteDevedorRepository;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class HistoricoClienteService {
    @Autowired
    ClienteDevedorRepository clienteDevedorRepository;

    public List<ListaHistoricoClienteDTO> clientesCadastradoNaPlaforma(){
        return clienteDevedorRepository.clientesCadastrados();
    }
    public DadosClientesDTO recuperarDadosCliente(int id){
        return clienteDevedorRepository.informacoesCliente(id);
    }

}
