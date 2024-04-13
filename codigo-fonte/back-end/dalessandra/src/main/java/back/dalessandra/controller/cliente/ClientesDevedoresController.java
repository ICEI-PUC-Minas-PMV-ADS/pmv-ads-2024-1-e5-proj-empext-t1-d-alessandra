package back.dalessandra.controller.cliente;

import back.dalessandra.Model.Venda;
import back.dalessandra.Model.dto.ClienteDevedorDTO;
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
}
