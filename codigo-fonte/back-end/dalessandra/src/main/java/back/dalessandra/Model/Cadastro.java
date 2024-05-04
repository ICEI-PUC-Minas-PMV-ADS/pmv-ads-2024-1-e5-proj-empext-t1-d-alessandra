package back.dalessandra.Model;


import com.fasterxml.jackson.annotation.JsonFormat;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Cadastro {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer idCadastro;

    @Column
    private String nomeCadastro;

    @Column
    private String cpfCnpj;

    @Column
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "dd/MM/yyyy", locale = "pt-BR", timezone = "America/Sao_Paulo")
    private LocalDate dataNascimento;

    @Column
    private String emailCadastro;

    @Column
    private String senhaCadastro;


    // Getters e Setters
}
