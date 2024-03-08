package back.dalessandra.repository.estoque;

import back.dalessandra.Model.Estoque;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EstoqueRepository extends JpaRepository<Estoque,Integer> {
}
