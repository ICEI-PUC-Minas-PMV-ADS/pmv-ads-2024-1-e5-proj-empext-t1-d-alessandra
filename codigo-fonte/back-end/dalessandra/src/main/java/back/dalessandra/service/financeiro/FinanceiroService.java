package back.dalessandra.service.financeiro;

import back.dalessandra.Model.Financeiro;
import back.dalessandra.repository.financeiro.FinanceiroRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FinanceiroService {
    @Autowired
    FinanceiroRepository financeiroRepository;
    public List<Financeiro> listarFinanceiro(){
        return financeiroRepository.findAll();
    }


    public String excluirDespesa(int id){
        financeiroRepository.deleteById(id);
        return ("Excluido com sucesso");
    }
}