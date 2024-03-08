package back.dalessandra.service.venda;

import back.dalessandra.Model.Venda;
import back.dalessandra.repository.venda.VendaRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class VendaService {
    private final VendaRepository vendaRepository;

    public VendaService(VendaRepository vendaRepository) {
        this.vendaRepository = vendaRepository;
    }

    public List<Venda> findAll() {
        return vendaRepository.findAll();
    }
}
