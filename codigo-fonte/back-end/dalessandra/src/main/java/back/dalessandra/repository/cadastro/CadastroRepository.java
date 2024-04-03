package back.dalessandra.repository.cadastro;

import back.dalessandra.Model.Cadastro;
import back.dalessandra.Model.Estoque;
import org.apache.commons.lang3.text.translate.NumericEntityUnescaper;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CadastroRepository extends JpaRepository<Cadastro, Integer> {


}
