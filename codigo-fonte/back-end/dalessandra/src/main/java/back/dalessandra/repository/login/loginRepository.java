package back.dalessandra.repository.login;

import back.dalessandra.Model.Cadastro;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.format.annotation.DateTimeFormat;

import java.time.LocalDate;
import java.util.List;

public interface loginRepository extends JpaRepository<Cadastro,Integer> {
    @Query("select c from Cadastro c where emailCadastro=?1 and senhaCadastro=?2")
    List<Cadastro> validarUsuario (@Param("emailCadastro") String emailCadastro, @Param("senhaCadastro") String senhaCadastro);
    @Query("select c from Cadastro c where dataNascimento=?1 and cpfCnpj=?2")
    Cadastro encontrarUsuario(@Param("dataNascimento")@DateTimeFormat(pattern = "dd/MM/yyyy") LocalDate dataNascimento, @Param("cpfCnpj") String cpfCnpj);
}
