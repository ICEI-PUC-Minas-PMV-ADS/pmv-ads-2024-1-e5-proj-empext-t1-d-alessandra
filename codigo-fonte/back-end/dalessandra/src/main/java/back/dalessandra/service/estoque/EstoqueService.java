package back.dalessandra.service.estoque;

import back.dalessandra.Model.Estoque;
import back.dalessandra.repository.estoque.EstoqueRepository;
import back.dalessandra.service.envioEmail.EmailEnvio;
import jakarta.annotation.PostConstruct;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class EstoqueService {
    @Autowired
    EstoqueRepository estoqueRepository;
    EmailEnvio emaiEnvio =new EmailEnvio();
    public void cadastrarEstoque(Estoque estoque){
        int qtdAtual = estoque.getQuantidadeItem();
        float valorComprado = estoque.getValorComprado();
        float valorAvender = estoque.getValorVenda();
        estoque.setQtdAtual(qtdAtual);
        estoque.setValorTotalEmEstoque(valorComprado*qtdAtual);
        estoque.setValorTotalAVender(valorAvender*qtdAtual);
        estoque.setStatus("Bom");
        estoqueRepository.save(estoque);
    }

    @PostConstruct
    public void init() {
        eviarEmailNivelCriticoEstoque();
    }

    public List<Estoque> listarEstoque(){
        return estoqueRepository.findAll();
    }

    public String excluirProdutoEstoque(int id){
        estoqueRepository.deleteById(id);
        return ("Excluido com sucesso");
    }

    public String eviarEmailNivelCriticoEstoque(){
        List<Estoque> estoque = listarEstoque();
        if(estoque != null){
            StringBuilder htmlContent = new StringBuilder();
            htmlContent.append("<html>" +
                    "<head>" +
                    "<title>Itens do Estoque</title>" +
                    "</head>" +
                    "<body>");
            htmlContent.append("<h1>Itens do Estoque</h1>");
            htmlContent.append(
                    "<table>"
                            + "<thead>"+
                            "<tr>"+
                            "<th>Codigo</th>"+
                            "<th>Produto</th>"+
                            "<th>Marca</th>"+
                            "<th>Status</th>"+
                            "<th>Cor</th>"+
                            "<th>Quantidade</th>"+
                            "</tr>"+
                            "</thead>"
            );
            htmlContent.append("<tbody>");
            for (Estoque item : estoque) {
                htmlContent.append("<tr>");
                htmlContent.append("<td>").append(item.getCodProduto()).append("</td>");
                htmlContent.append("<td>").append(item.getNomeProduto()).append("</td>");
                htmlContent.append("<td>").append(item.getMarca()).append("</td>");
                htmlContent.append("<td>").append(item.getStatus()).append("</td>");
                htmlContent.append("<td>").append(item.getCor()).append("</td>");
                htmlContent.append("<td>").append(item.getQtdAtual()).append("</td>");
                htmlContent.append("</tr>");
            }
            htmlContent.append("</tbody>");
            htmlContent.append("</table>");
            htmlContent.append("</body></html>");

            emaiEnvio.sendEmail("vitorhugoemail@gmail.com","Listar Estoque",htmlContent.toString());
            return "enviado";
        }
           return "Tudo ok";
    }


}
