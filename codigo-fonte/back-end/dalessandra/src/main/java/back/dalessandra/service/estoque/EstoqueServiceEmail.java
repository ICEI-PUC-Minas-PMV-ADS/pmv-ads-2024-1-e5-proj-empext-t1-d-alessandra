package back.dalessandra.service.estoque;

import back.dalessandra.Model.Estoque;
import jakarta.annotation.PostConstruct;
import back.dalessandra.service.envioEmail.EmailEnvio;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;
@Service
public class EstoqueServiceEmail extends EstoqueService{
    EmailEnvio emaiEnvio =new EmailEnvio();
    @PostConstruct
    public void init() {
        List<Estoque> estoqueBaixo = recuperarNivelBaixo();
        if (estoqueBaixo!=null){
            eviarEmailNivelCriticoEstoque(estoqueBaixo);
        }

    }

    public String eviarEmailNivelCriticoEstoque(List<Estoque> estoque) {
            LocalDateTime data = LocalDateTime.now();
            DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd/MM/yyyy HH:mm");
            String dataFormatada = data.format(formatter);
            StringBuilder htmlContent = new StringBuilder();
            htmlContent.append("<html>" +
                    "<head>" +
                    "<title>Relatorio do estoque</title>" +
                    "</head>" +
                    "<body>");
            htmlContent.append("<h1>Itens do Estoque</h1>");
            htmlContent.append(
                    "<table>"
                            + "<thead>" +
                            "<tr>" +
                            "<th>Codigo</th>" +
                            "<th>Produto</th>" +
                            "<th>Marca</th>" +
                            "<th>Status</th>" +
                            "<th>Cor</th>" +
                            "<th>Quantidade</th>" +
                            "</tr>" +
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

            emaiEnvio.sendEmail("vitor@gmail.com", "Relatorio de estoque -"+dataFormatada, htmlContent.toString());
            return "enviado";
        //}

    }
}
