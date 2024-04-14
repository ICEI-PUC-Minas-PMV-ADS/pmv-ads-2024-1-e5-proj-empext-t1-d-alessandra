package back.dalessandra.controller.cliente;

import back.dalessandra.DTO.ClienteDevedorDTO;
import back.dalessandra.DTO.ListaComprasClienteDevedorDTO;
import back.dalessandra.service.cliente.ClienteDevedorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@RestController
@RequestMapping("/devedores")
public class ClientesDevedoresController {
    @Autowired
    ClienteDevedorService clienteDevedor;

    @GetMapping("/listarClientesDevedores")
    public List<ClienteDevedorDTO> listarClientesDevedores(){
        return clienteDevedor.listarClientesDevedor();
    }
    @PutMapping("/updatePagamento/{id}/{metodoPagamento}")
    public String upadtePagamento(@PathVariable("id") int id, @PathVariable("metodoPagamento") String metodoPagamento){
        return clienteDevedor.updateStatusDevedor(id, metodoPagamento);
    }
    @GetMapping("/obetrProdutosDevidos/{codVenda}")
    public List<ListaComprasClienteDevedorDTO>obetrProdutosDevido(@PathVariable("codVenda") int codVenda){
        return  clienteDevedor.listarComprasClienteDevedor(codVenda);
    }
}
