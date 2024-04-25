package back.dalessandra.Model.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class ItemDto {

    private Integer codProduto;
    private String descProduto;
    private String tipo;
    private Integer qtdAtual;

}
