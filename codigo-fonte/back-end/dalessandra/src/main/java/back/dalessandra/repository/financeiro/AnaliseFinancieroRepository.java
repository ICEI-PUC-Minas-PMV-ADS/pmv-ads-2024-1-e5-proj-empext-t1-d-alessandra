package back.dalessandra.repository.financeiro;

import back.dalessandra.DTO.entradasVsSaidasDTO;
import back.dalessandra.DTO.relatorioMaioresMetodosPagamentoDTO;
import back.dalessandra.Model.Financeiro;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface AnaliseFinancieroRepository extends JpaRepository<Financeiro,Integer> {
    @Query("select new back.dalessandra.DTO.entradasVsSaidasDTO(\n" +
                "\tto_char(v.dtVenda,'MM/YYYY') as mesAno,\n" +
                "\tsum(v.vlTotal) as entrada,\n" +
                "\tsum (f.valorDespesa) saida)\n" +
            "from \n" +
                " \tVenda v\n" +
            "inner join \n" +
                "\tFinanceiro f\n" +
            "on \n" +
             "\tto_char(v.dtVenda,'TMmonth')= to_char(f.dataDespesa,'TMmonth')\n" +
            "where \n" +
                "\textract (YEAR FROM v.dtVenda) = :ano\n" +
            "group by \n" +
                "\tto_char(v.dtVenda,'MM/YYYY')"
         )
    List<entradasVsSaidasDTO> ObeterrelatorioSaidaVsEntrada(@Param("ano")int ano);
    @Query("select new back.dalessandra.DTO.relatorioMaioresMetodosPagamentoDTO(\n" +
              "\tv.formaPagto as formaPagamento,\n" +
              "\tcount(v.formaPagto))\n" +
            "from \n" +
                " \tVenda v\n" +
            "where \n" +
                 "\textract (YEAR FROM v.dtVenda) = :ano\n" +
            "group by \n" +
                    "\tto_char(v.dtVenda,'MMMM/YYYY'),\n" +
                    "\tv.formaPagto"
    )
    List<relatorioMaioresMetodosPagamentoDTO>obterRelatorioMetodoPagamento(@Param("ano") int ano);
}
