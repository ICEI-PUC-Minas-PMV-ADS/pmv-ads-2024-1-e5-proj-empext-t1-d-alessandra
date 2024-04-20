package back.dalessandra.DTO;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

import java.time.LocalDate;
import java.time.LocalDateTime;
@Data
@AllArgsConstructor
@Builder
public class HistoricoComprasClienteDTO {
    private int codVenda;
    private String nomeProduto;
    private int quantidade;
    private Double vlTotal;
    private LocalDateTime dtVenda;
    private String nomeCliente;
}
