package back.dalessandra.DTO;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;


@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class ListaHistoricoClienteDTO {
    private  int codCliente;
    private  String nomeCliente;
    private String email;
    private  Long qtdDeCompra;
    private Long qtdComprasPendentesPagamento;


}
