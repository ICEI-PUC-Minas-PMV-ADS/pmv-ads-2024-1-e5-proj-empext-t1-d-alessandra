package back.dalessandra.repository.financeiro;

import back.dalessandra.DTO.entradasVsSaidasDTO;
import back.dalessandra.DTO.relatorioMaioresMetodosPagamentoDTO;
import back.dalessandra.Model.Financeiro;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface AnaliseFinancieroRepository extends JpaRepository<Financeiro,Integer> {
    @Query("select new back.dalessandra.DTO.entradasVsSaidasDTO(" +
            "to_char(v.dtVenda, 'MM/YYYY') as mesAno, " +
            "sum(v.vlTotal) as entrada, " +
            "coalesce(sum(distinct f.valorDespesa), 0) as saida, " +
            "(sum(v.vlTotal) - coalesce(sum(distinct f.valorDespesa), 0)) as balanco) " +
            "from Venda v " +
            "left join Financeiro f on to_char(v.dtVenda, 'YYYYMM') = to_char(f.dataDespesa, 'YYYYMM') " +
            "where extract(YEAR FROM v.dtVenda) = :ano and v.formaPagto!='AN'" +
            "group by to_char(v.dtVenda, 'MM/YYYY')")
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
