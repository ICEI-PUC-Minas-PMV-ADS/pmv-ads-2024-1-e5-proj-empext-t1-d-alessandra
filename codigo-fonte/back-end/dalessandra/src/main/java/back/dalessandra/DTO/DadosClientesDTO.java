package back.dalessandra.DTO;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.sql.Time;
import java.time.LocalDate;
import java.util.Date;
import java.util.List;
import java.util.Optional;

@Data
@AllArgsConstructor

@Builder
public class DadosClientesDTO {
    private  Integer codCliente;
    private  String nomeCliente;
    private String cpfCnpj;
    private String email;
    private String telefone;
    private String endereco;
    private LocalDate dtCadastro;
    private  Long qtdDeCompra;
    private Long qtdComprasPendentesPagamento;

}
