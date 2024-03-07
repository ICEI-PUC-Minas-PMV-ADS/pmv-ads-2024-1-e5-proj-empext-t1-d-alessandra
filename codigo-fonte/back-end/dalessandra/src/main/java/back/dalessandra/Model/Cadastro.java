package back.dalessandra.Model;


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
    private int id_cadastro;

    @Column(nullable = false)
    private String nome_cadastro;

    @Column(nullable = false)
    private Date datanascimento_cadastro;

    @Column(nullable = false)
    private String email_cadastro;

    @Column(nullable = false)
    private String senha_cadastro;

}