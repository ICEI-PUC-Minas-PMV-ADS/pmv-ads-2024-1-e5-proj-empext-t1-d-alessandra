package back.dalessandra.DTO;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

@Data
@AllArgsConstructor

@Builder
public class entradasVsSaidasDTO {

    private String mesAno;
    private Double entrada;
    private Double saida;
    private Double balanco;
}
