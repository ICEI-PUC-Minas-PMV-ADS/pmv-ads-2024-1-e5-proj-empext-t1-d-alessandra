package back.dalessandra.service.financeiro;

import back.dalessandra.Model.Financeiro;
import back.dalessandra.repository.financeiro.FinanceiroRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class FinanceiroService {

    private final FinanceiroRepository financeiroRepository;
    public List<Financeiro> listarFinanceiro(){
        return financeiroRepository.findAll();
    }


    public String excluirDespesa(int id){
        financeiroRepository.deleteById(id);
        return ("Excluido com sucesso");
    }
}