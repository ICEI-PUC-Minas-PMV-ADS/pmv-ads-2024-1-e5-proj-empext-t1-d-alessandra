package back.dalessandra.service.venda;

import back.dalessandra.Model.Item;
import back.dalessandra.Model.Venda;
import back.dalessandra.Model.filter.VendaFilter;
import back.dalessandra.Model.dto.VendaDto;
import back.dalessandra.repository.venda.VendaRepository;
import back.dalessandra.service.cliente.ClienteService;
import lombok.RequiredArgsConstructor;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class VendaService {

    private final VendaRepository vendaRepository;
    private final ItemService itemService;
    private final ClienteService clienteService;

    public List<Venda> findAll() {
        return vendaRepository.findAll();
    }

    public List<Venda> findByFormaPagto(String formaPagto) {return vendaRepository.findByFormaPagto(formaPagto);}

    public Optional<VendaDto> findByCodVenda(Integer codVenda) {
        var itens = itemService.findByCodVenda(codVenda);
        var venda =  vendaRepository.findByCodVenda(codVenda);
        var cliente = clienteService.findByCodCliente(venda.get().getCodCliente());

        if (venda.isPresent()) {
            VendaDto vendaDto = VendaDto.builder()
                    .codVenda(venda.get().getCodVenda())
                    .codCliente(venda.get().getCodCliente())
                    .formaPagto(venda.get().getFormaPagto())
                    .dtVenda(venda.get().getDtVenda())
                    .vlTotal(venda.get().getVlTotal())
                    .listaItens(itens)
                    .cliente(cliente.get())
                    .build();
            return Optional.of(vendaDto);
        }
        return Optional.empty();
    }

    public Page<Venda> findByDiaVenda(LocalDate dtVenda, Pageable pageable) {
        VendaFilter filter = VendaFilter.builder()
                .dataInicio(dtVenda.atStartOfDay())
                .dataFim(dtVenda.atTime(23, 59, 59))
                .build();
        return vendaRepository.findByDiaVenda(filter, pageable);
    }

    public List<Venda> findByDiaVenda(LocalDate dtVenda) {
        VendaFilter filter = VendaFilter.builder()
                .dataInicio(dtVenda.atStartOfDay())
                .dataFim(dtVenda.atTime(23, 59, 59))
                .build();
        return vendaRepository.findByDiaVenda(filter);
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
