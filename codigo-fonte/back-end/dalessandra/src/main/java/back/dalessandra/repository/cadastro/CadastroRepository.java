package back.dalessandra.repository.cadastro;

import back.dalessandra.Model.Cadastro;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface CadastroRepository extends JpaRepository<Cadastro, Integer> {
    // Método para verificar se o email já está cadastrado
    //@Query("select l from Cadastro where email=?1")
    boolean existsByEmailCadastro(String email);
}
