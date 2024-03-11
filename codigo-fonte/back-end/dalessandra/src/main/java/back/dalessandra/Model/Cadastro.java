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
public class Cadastro {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer idCadastro;

    @Column( )
    private String nomeCadastro;

    @Column( )
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "dd/MM/yyyy", locale = "pt-BR", timezone = "America/Sao_Paulo")
    private Date dataNascimento;

    @Column( )
    private String emailCadastro;

    @Column( )
    private String senhaCadastro;

    // Getters e Setters
}
