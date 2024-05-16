package back.dalessandra.service.financeiro;

import back.dalessandra.Model.Financeiro;
import back.dalessandra.repository.financeiro.FinanceiroRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.stereotype.Service;

import java.util.*;
import java.util.Date;
import java.time.LocalDate;

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

        if (financeiro.getDataDespesa() == null) {
            financeiro.setDataDespesa(null);
        }

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
    public void updateTipoDespesa(int idDespesa, String tipoDespesa){
        Financeiro tipoAlterar = financeiroRepository.updateDespesa(idDespesa);
        tipoAlterar.setTipoDespesa(tipoDespesa);
        financeiroRepository.save(tipoAlterar);

    }
    public void updateValorDespesa(int idDespesa, float valorDespesa){
        Financeiro valorAlterar = financeiroRepository.updateDespesa(idDespesa);
        valorAlterar.setValorDespesa(valorDespesa);
        financeiroRepository.save(valorAlterar);

    }

    public void updateDataDespesa(int idDespesa, @DateTimeFormat(pattern = "dd/MM/yyyy") LocalDate dataDespesa) {
        Financeiro dataDespesaAlterar = financeiroRepository.updateDespesa(idDespesa);
        dataDespesaAlterar.setDataDespesa(dataDespesa);
        financeiroRepository.save(dataDespesaAlterar);
    }

    public void updateDataVencimento(int idDespesa, @DateTimeFormat(pattern = "dd/MM/yyyy") LocalDate dataVencimento) {
        Financeiro dataVencimentoAlterar = financeiroRepository.updateDespesa(idDespesa);
        dataVencimentoAlterar.setDataVencimento(dataVencimento);
        financeiroRepository.save(dataVencimentoAlterar);
    }


}