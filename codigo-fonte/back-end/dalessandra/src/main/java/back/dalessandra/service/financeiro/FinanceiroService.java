package back.dalessandra.service.financeiro;

import back.dalessandra.Model.Estoque;
import back.dalessandra.Model.Financeiro;
import back.dalessandra.repository.financeiro.FinanceiroRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
@RequiredArgsConstructor
public class FinanceiroService {

    private final FinanceiroRepository financeiroRepository;

    public List<Financeiro> findAll() {
        return financeiroRepository.findAll();
    }

    public Financeiro cadastro(Financeiro financeiro) {
        float totalDespesas = calcularTotalDespesas();
        financeiro.setValorTotalDespesas(totalDespesas);

        if (financeiro.getDataVencimento() == null) {
            financeiro.setDataVencimento(null);
        }

        return financeiroRepository.save(financeiro);
    }

    public Optional<Financeiro> findById(Integer idDespesa) {
        return financeiroRepository.findById(idDespesa);
    }

    public Optional<Financeiro> findBydataDespesa(Date dataDespesa){
        return financeiroRepository.findBydataDespesa(dataDespesa);
    }

    public Optional<Financeiro> findBytipoDespesa(String tipoDespesa){
        return financeiroRepository.findBytipoDespesa(tipoDespesa);
    }


    public String excluirDespesa(int idDespesa){
        financeiroRepository.deleteById(idDespesa);
        return ("Excluido com sucesso");
    }

    public List<Financeiro> findByDias(Integer dia, Integer mes, Integer ano) {
        List<Financeiro> financeiros = financeiroRepository.findAll();

        if (dia != null || mes != null || ano != null) {
            List<Financeiro> financeirosFiltrados = new ArrayList<>();

            for (Financeiro financeiro : financeiros) {
                Calendar calendar = Calendar.getInstance();
                calendar.setTime(financeiro.getDataDespesa());
                int diaDespesa = calendar.get(Calendar.DAY_OF_MONTH);
                int mesDespesa = calendar.get(Calendar.MONTH) + 1;
                int anoDespesa = calendar.get(Calendar.YEAR);

                if ((dia == null || diaDespesa == dia) &&
                        (mes == null || mesDespesa == mes) &&
                        (ano == null || anoDespesa == ano)) {
                    financeirosFiltrados.add(financeiro);
                }
            }

            return financeirosFiltrados;
        } else {
            return financeiros;
        }
    }



    public float calcularTotalDespesas() {
        List<Financeiro> financeiros = financeiroRepository.findAll();
        float total = 0.0f;
        for (Financeiro financeiro : financeiros) {
            total += financeiro.getValorDespesa();
        }
        return total;
    }

    public List<Financeiro> findAllOrderByDataDespesaDesc() {
        return financeiroRepository.findAllOrderByDataDespesaDesc();
    }
    public void updateNomeDespesa(int idDespesa, String nomeDespesa){
        Financeiro despesaAlterar = financeiroRepository.updateDespesa(idDespesa);
        despesaAlterar.setNomeDespesa(nomeDespesa);
        financeiroRepository.save(despesaAlterar);

    }


}