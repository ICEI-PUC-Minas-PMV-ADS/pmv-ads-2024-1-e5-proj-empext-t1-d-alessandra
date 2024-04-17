package back.dalessandra.Model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.util.Date;

@Data
@Entity
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Cliente {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer codCliente;
    @Column
    private String nomeCliente;
    @Column
    private String email;
    @Column
    private String telefone;
    @Column
    private String cpfCnpj;
    @Column
    private String rua;
    @Column
    private String bairro;
    @Column
    private String cidade;
    @Column
    private String complemento;
    @Column
    private LocalDate dtCadastro;
}
