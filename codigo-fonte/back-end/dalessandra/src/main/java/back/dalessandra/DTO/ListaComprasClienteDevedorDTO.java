package back.dalessandra.DTO;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class ListaComprasClienteDevedorDTO {
    private String nomeProduto;
    private String tamanho;
    private int quantidade;
    private Float valor_vend;
    private Double vlTotal;
    private LocalDateTime dtVenda;
}
