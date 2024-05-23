package back.dalessandra.controller.item;

import back.dalessandra.Model.dto.ItemDto;
import back.dalessandra.Model.filter.ItemFilter;
import back.dalessandra.service.venda.ItemService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@Controller
@RequestMapping("/item")
@RequiredArgsConstructor
public class ItemController {

    private final ItemService service;

    @GetMapping("/mais-vendidos")
    public Page<ItemDto> findMaisVendidos(ItemFilter filter, Pageable pageable) {
        return service.findMaisVendidos(filter, pageable);
    }
}
