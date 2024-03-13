package back.dalessandra.controller.cliente;

import back.dalessandra.Model.Cliente;
import back.dalessandra.service.cliente.ClienteService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@Controller
@RequestMapping("/cliente")
@RequiredArgsConstructor
public class ClienteController {

    private final ClienteService clienteService;

    @GetMapping
    public List<Cliente> findAll(){
        return clienteService.findAll();
    }

    @GetMapping("/{codCliente}")
    public Cliente findByCodCliente(@PathVariable Integer codCliente){
        return clienteService.findByCodCliente(codCliente).orElse(null);
    }

    @PostMapping
    public Cliente create(Cliente cliente){
        return clienteService.create(cliente);
    }

    @PutMapping("/{codCliente}")
    public Cliente update(Cliente cliente, @PathVariable Integer codCliente){
        return clienteService.update(cliente);
    }

    @DeleteMapping("/{codCliente}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteByCliente(@PathVariable Integer codCliente){
        clienteService.deleteByCliente(codCliente);
    }
}
