package back.dalessandra.controller.cliente;

import back.dalessandra.Model.dto.ClienteDevedorDTO;
import back.dalessandra.service.cliente.ClienteDevedorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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

}
