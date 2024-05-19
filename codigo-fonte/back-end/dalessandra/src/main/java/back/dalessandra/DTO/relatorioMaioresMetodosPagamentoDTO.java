package back.dalessandra.DTO;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class relatorioMaioresMetodosPagamentoDTO {
    private String formaPagamento;
    private Long frequencia;

}
