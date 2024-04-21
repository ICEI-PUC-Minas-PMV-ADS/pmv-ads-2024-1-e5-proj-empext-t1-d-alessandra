package back.dalessandra.controller.cliente;
import back.dalessandra.DTO.DadosClientesDTO;
import back.dalessandra.DTO.HistoricoComprasClienteDTO;
import back.dalessandra.DTO.ListaHistoricoClienteDTO;
import back.dalessandra.Model.Cliente;
import back.dalessandra.service.cliente.ClienteService;
import back.dalessandra.service.cliente.HistoricoClienteService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
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

    @Autowired
     HistoricoClienteService historicoClienteService;
    @GetMapping
    public List<Cliente> findAll(){
        return clienteService.findAll();
    }

    @GetMapping("/{codCliente}")
    public Cliente findByCodCliente(@PathVariable Integer codCliente){
        return clienteService.findByCodCliente(codCliente).orElse(null);
    }

    @PostMapping
    public Cliente create(@RequestBody Cliente cliente){
        return clienteService.create(cliente);
    }

    @PutMapping("/{codCliente}")
    public Cliente update(@RequestBody Cliente cliente, @PathVariable Integer codCliente){
        return clienteService.update(cliente, codCliente);
    }

    @DeleteMapping("/{codCliente}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteByCliente(@PathVariable Integer codCliente){
        clienteService.deleteByCliente(codCliente);
    }

    @GetMapping("/listaDeClientesComNomeEmail")
    public List<ListaHistoricoClienteDTO> listaDeClientesComNomeEmail(){
        return  historicoClienteService.clientesCadastradoNaPlaforma();
    }
    @GetMapping("/reuperarDadosCompletosClientes/{codCliente}")
    public DadosClientesDTO reuperarDadosCompletosClientes(@PathVariable("codCliente")int id){
        return historicoClienteService.recuperarDadosCliente(id);
    }

    @GetMapping("/listarHistoricoDeCompraClienteComFiltro/{codCliente}/{tipoDeListagem}")

    public List<HistoricoComprasClienteDTO> listarHistoricoDeCompraClienteComFiltro(@PathVariable("codCliente") int codCliente, @PathVariable("tipoDeListagem") String tipoDeListagem){
        return  clienteService.historicoComprasCliente(codCliente,tipoDeListagem);
    }

}
