package back.dalessandra.DTO;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class ClienteDevedorDTO {
    private Integer codCliente;
    private String nomeCliente;
    private Integer codVenda;
    private LocalDateTime dtVenda;
    private Double vlTotal;
    private String formaPagto;
}
