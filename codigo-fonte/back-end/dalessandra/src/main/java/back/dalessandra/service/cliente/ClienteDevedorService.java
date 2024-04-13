package back.dalessandra.service.cliente;

import back.dalessandra.Model.Venda;
import back.dalessandra.Model.dto.ClienteDevedorDTO;
import back.dalessandra.repository.cliente.ClienteDevedorRepository;
import back.dalessandra.repository.venda.VendaRepository;
import back.dalessandra.service.venda.VendaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ClienteDevedorService {

    @Autowired
    ClienteDevedorRepository clienteDevedorRepository;
    @Autowired
    VendaRepository vendaRepository;

    public List<ClienteDevedorDTO> listarClientesDevedor(){
        return  clienteDevedorRepository.listarCLientesDevedores();
    }

    public String updateStatusDevedor(int id,String metodoPagamento){
      Venda vendaUpadate =  vendaRepository.recuperarDadosVedna(id);
      vendaUpadate.setFormaPagto(metodoPagamento);
      vendaRepository.save(vendaUpadate);
      return "salvo com sucesso";
    }

}
