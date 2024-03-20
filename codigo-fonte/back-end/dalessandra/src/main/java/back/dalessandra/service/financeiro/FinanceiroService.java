package back.dalessandra.service.financeiro;

import back.dalessandra.Model.Financeiro;
import back.dalessandra.repository.financeiro.FinanceiroRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class FinanceiroService {

    private final FinanceiroRepository financeiroRepository;

    public List<Financeiro> findAll() {
        return financeiroRepository.findAll();
    }

    /*public Financeiro cadastro(Financeiro financeiro) {
        return financeiroRepository.save(financeiro);
    }*/

    public Financeiro cadastro(Financeiro financeiro) {
        float totalDespesas = calcularTotalDespesas();
        financeiro.setValorTotalDespesas(totalDespesas);
        return financeiroRepository.save(financeiro);
    }

    public Financeiro update(Financeiro financeiro){
        financeiroRepository.update(financeiro);
        return financeiro;
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
}