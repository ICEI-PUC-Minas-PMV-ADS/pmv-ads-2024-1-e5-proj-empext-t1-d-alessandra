package back.dalessandra.Model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Venda {

    private Integer codVenda;
    private LocalDateTime dtVenda;
    private Integer codCliente;
    private String formaPagto;
    private Double vlTotal;
}
