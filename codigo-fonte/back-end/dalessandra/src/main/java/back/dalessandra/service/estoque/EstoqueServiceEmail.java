package back.dalessandra.service.estoque;

import back.dalessandra.Model.Estoque;
import back.dalessandra.repository.estoque.EstoqueRepository;
import back.dalessandra.service.configuracao.configuracaoService;
import back.dalessandra.service.envioEmail.EmailEnvio;
import jakarta.annotation.PostConstruct;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.Date;
import java.util.List;
import java.util.Timer;
import java.util.TimerTask;

@Service
@AllArgsConstructor
@NoArgsConstructor

public class EstoqueServiceEmail{
    EmailEnvio emaiEnvio =new EmailEnvio();
    @Autowired
    configuracaoService confg;
    @Autowired
    EstoqueRepository estoqueRepository;

    public void iniciarEnvioPeriodico() {
        if (confg.recuperandoParameFrequenciaNotificao() != null && confg.recuperandoDataEnvioEmail() != null) {
            int frequenciaDias = Integer.parseInt(confg.recuperandoParameFrequenciaNotificao());
            Date dataInicio = confg.recuperandoDataEnvioEmail();

            Timer timer = new Timer();
            long intervalo = frequenciaDias * 24 * 60 * 60 * 1000;

            timer.scheduleAtFixedRate(new TimerTask() {
                public void run() {
                    List<Estoque> estoqueBaixo = estoqueRepository.verificarItemsCriticos();
                    if (!estoqueBaixo.isEmpty()) {
                        eviarEmailNivelCriticoEstoque(estoqueBaixo);
                    }
                }
            }, dataInicio, intervalo);
        }
    }
    @PostConstruct
    public void init(){
        iniciarEnvioPeriodico();
}

    public String eviarEmailNivelCriticoEstoque(List<Estoque> estoque) {
            String email = confg.recuperandoParametroEmail();
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

            emaiEnvio.sendEmail(email, "Relatorio de estoque - "+dataFormatada, htmlContent.toString());
            return "enviado";

    }
}
