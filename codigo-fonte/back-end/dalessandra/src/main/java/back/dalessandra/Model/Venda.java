package back.dalessandra.Model;

import com.fasterxml.jackson.annotation.JsonFormat;
import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;

@Data
@Entity
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Venda {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer codVenda;
    @Column
    private LocalDateTime dtVenda;
    @Column
    private Integer codCliente;
    @Column
    private String formaPagto;
    @Column
    private Double vlTotal;
    private float valorTotalVendas;


}
