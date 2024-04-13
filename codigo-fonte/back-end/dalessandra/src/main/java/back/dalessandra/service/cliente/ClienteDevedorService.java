package back.dalessandra.service.cliente;

import back.dalessandra.Model.dto.ClienteDevedorDTO;
import back.dalessandra.repository.cliente.ClienteDevedorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ClienteDevedorService {

    @Autowired
    ClienteDevedorRepository clienteDevedorRepository;

    public List<ClienteDevedorDTO> listarClientesDevedor(){
        return  clienteDevedorRepository.listarCLientesDevedores();
    }

}
