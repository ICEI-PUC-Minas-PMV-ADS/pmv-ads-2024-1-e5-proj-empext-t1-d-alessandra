package back.dalessandra.repository.venda;

import back.dalessandra.Model.Venda;
import lombok.RequiredArgsConstructor;
import org.jooq.DSLContext;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class VendaRepository {

    private final DSLContext sql;

    public VendaRepository(DSLContext sql) {
        this.sql = sql;
    }

    public List<Venda> findAll() {
        return sql.select().from("vendas").fetchInto(Venda.class);
    }
}
