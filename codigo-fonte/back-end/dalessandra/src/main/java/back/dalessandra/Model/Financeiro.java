package back.dalessandra.Model;
import jakarta.persistence.*;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Date;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Financeiro {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id_despesa;
    @Column(length=30, nullable = false)
    private String tipo_despesa;
    @Column(nullable = false)
    private String nome_despesa;
    @Column(nullable = false)
    private float valor_despesa;
    @Column(nullable = false)
    private Date data_despesa;
}
