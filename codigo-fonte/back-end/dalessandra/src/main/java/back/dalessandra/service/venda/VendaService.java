package back.dalessandra.service.venda;

import back.dalessandra.Model.Financeiro;
import back.dalessandra.Model.Item;
import back.dalessandra.Model.Venda;
import back.dalessandra.Model.dto.VendaDto;
import back.dalessandra.repository.venda.VendaRepository;
import back.dalessandra.service.estoque.EstoqueServiceBd;
import lombok.RequiredArgsConstructor;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class VendaService {

    private final VendaRepository vendaRepository;
    private final ItemService itemService;

    public List<Venda> findAll() {
        return vendaRepository.findAll();
    }

    public List<Venda> findByFormaPagto(String formaPagto) {return vendaRepository.findByFormaPagto(formaPagto);}

    public Optional<Venda> findByCodVenda(Integer codVenda) {
        return vendaRepository.findByCodVenda(codVenda);
    }

    public Page<Venda> findByDiaVenda(LocalDateTime dtVenda, Pageable pageable) {
        return vendaRepository.findByDiaVenda(dtVenda, pageable);
    }

    public VendaDto create(VendaDto venda) {
        Integer codigo = vendaRepository.findAll().size() + 1;
        venda.setCodVenda(codigo);
        venda.setDtVenda(LocalDateTime.now());
        vendaRepository.create(venda);
        List<Item> item = venda.getListaItens();
        itemService.create(item, codigo);
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
