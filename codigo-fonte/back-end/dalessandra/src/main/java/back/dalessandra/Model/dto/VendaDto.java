package back.dalessandra.Model.dto;

import back.dalessandra.Model.Cliente;
import back.dalessandra.Model.Item;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class VendaDto {

    private Integer codVenda;
    private Integer codCliente;
    private String formaPagto;
    private LocalDateTime dtVenda;
    private Double vlTotal;
    private List<Item> listaItens;
    private Cliente cliente;
}
