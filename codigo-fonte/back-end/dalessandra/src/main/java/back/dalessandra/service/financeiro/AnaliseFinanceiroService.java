package back.dalessandra.service.financeiro;

import back.dalessandra.DTO.entradasVsSaidasDTO;
import back.dalessandra.DTO.relatorioMaioresMetodosPagamentoDTO;
import back.dalessandra.repository.financeiro.AnaliseFinancieroRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class AnaliseFinanceiroService {

    @Autowired
    AnaliseFinancieroRepository analiseFinancieroRepository;
    public List<entradasVsSaidasDTO> analiseDeEntradasESaidaas(int ano){
        return analiseFinancieroRepository.ObeterrelatorioSaidaVsEntrada(ano);
    }
    public List<relatorioMaioresMetodosPagamentoDTO>obterRelatorioDepagamento(int ano){
            return analiseFinancieroRepository.obterRelatorioMetodoPagamento(ano);
    }
}
