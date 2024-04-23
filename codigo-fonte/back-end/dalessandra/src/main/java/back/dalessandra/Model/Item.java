package back.dalessandra.Model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@Entity
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Item {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer nrSequencia;
    @Column
    private Integer codVenda;
    @Column
    private Integer codProduto;
    @Column
    private String descProduto;
    @Column
    private Double valorUnit;
    @Column
    private Integer quantidade;
    @Column
    private Double vlTotal;
}
