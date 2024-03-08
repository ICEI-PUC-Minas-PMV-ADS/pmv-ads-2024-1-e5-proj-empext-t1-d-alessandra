package back.dalessandra.Model;
import com.fasterxml.jackson.annotation.JsonIgnore;
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
public class Estoque {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer codProduto;
    @Column(length = 30,nullable = false)
    private String nomePorduto;
    @Column(nullable = false)
    private int quantidadeItem;
    @Column(length = 20)
    private String marca;
    @Column(length = 20)
    private String tipo;
    @Column(length = 20)
    private String cor;
    @Column(length = 5, nullable = false)
    private  String tamanho;
    @Column(nullable = false)
    private float valorComprado;
    @Column(nullable = false)
    private  float valorVenda;
    @Column(nullable = false)
    private Date dataCadastro;
    private int qtdAtual;
    private String status;
}
