package back.dalessandra.service.venda;

import back.dalessandra.Model.Financeiro;
import back.dalessandra.Model.Venda;
import back.dalessandra.repository.venda.VendaRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class VendaService {

    private final VendaRepository vendaRepository;

    public List<Venda> findAll() {
        return vendaRepository.findAll();
    }

    public List<Venda> findByFormaPagto(String formaPagto) {return vendaRepository.findByFormaPagto(formaPagto);}

    public Optional<Venda> findByCodVenda(Integer codVenda) {
        return vendaRepository.findByCodVenda(codVenda);
    }

    public Venda create(Venda venda) {
        Integer codigo = vendaRepository.findAll().size() + 1;
        venda.setCodVenda(codigo);
        vendaRepository.create(venda);
        return venda;
    }

    public float calcularTotalVendas() {
        List<Venda> totalVendas = findAll();
        float total = 0.0f;
        for (Venda venda : totalVendas) {
            total += venda.getVlTotal();
        }
        return total;
    }

    public void deleteByVenda(Integer codVenda){
        vendaRepository.deleteByVenda(codVenda);
    }
}
