package back.dalessandra.service.venda;

import back.dalessandra.Model.Item;
import back.dalessandra.repository.venda.ItemRepository;
import back.dalessandra.service.estoque.EstoqueServiceBd;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ItemService {

    private final EstoqueServiceBd estoqueServiceBd;
    private final ItemRepository itemRepository;

    public List<Item> create(List<Item> items, Integer codigo) {
        for(Item item : items) {
            Integer numero = itemRepository.sequenceItem() + 1;
            item.setNrSequencia(numero);
            item.setCodVenda(codigo);
            itemRepository.create(item);
            estoqueServiceBd.baixaNoEstoque(item.getCodProduto(), item.getQuantidade());
        }
        return items;
    }
}
