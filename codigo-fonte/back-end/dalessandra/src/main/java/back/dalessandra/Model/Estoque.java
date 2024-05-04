package back.dalessandra.Model;

import com.fasterxml.jackson.annotation.JsonFormat;
import jakarta.persistence.*;
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
    @Column(length = 100)
    private String nomeProduto;
    @Column
    private int quantidadeItem;
    @Column(length = 20)
    private String marca;
    @Column(length = 20)
    private String tipo;
    @Column(length = 20)
    private String cor;
    @Column(length = 100)
    private  String tamanho;
    @Column
    private float valorComprado;
    @Column
    private  float valorVenda;
    @Column
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "dd/MM/yyyy", locale = "pt-BR", timezone = "America/Sao_Paulo")
    private Date dataCadastro;
    private int qtdAtual;
    private String status;
    private float valorTotalEmEstoque;
    private float valorTotalAVender;
}
