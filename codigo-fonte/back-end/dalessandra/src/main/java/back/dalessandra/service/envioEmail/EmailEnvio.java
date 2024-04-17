package back.dalessandra.service.envioEmail;
import jakarta.mail.*;
import jakarta.mail.internet.InternetAddress;
import jakarta.mail.internet.MimeMessage;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Properties;
@Service
public class EmailEnvio {

    private String host = "smtp.gmail.com";
    private String username = "dalessandraloja@gmail.com";
    private String password = "vtfeuxfkbtdwpffw";
    public void sendEmail(String recipient, String subject, String content) {

        Properties props = new Properties();
        props.put("mail.smtp.auth", "true");
        props.put("mail.smtp.starttls.enable", "true");
        props.put("mail.smtp.host", host);
        props.put("mail.smtp.port", "587");
        Session session = Session.getInstance(props, new Authenticator() {
            protected PasswordAuthentication getPasswordAuthentication() {
                return new PasswordAuthentication(username, password);
            }
        });

        try {
            Message message = new MimeMessage(session);
            message.setFrom(new InternetAddress(username));
            message.setRecipients(Message.RecipientType.TO, InternetAddress.parse(recipient));
            message.setSubject(subject);

            String emailContent =
                    "<header><img src=\"https://i.ibb.co/vd40tv7/Logo.png\" alt=\"logo\" border=\"0\"><header>"
                    + "<h1>Olá !</h1>"
                    + "<p>" + content + "</p>"
                    + "<p>Atenciosamente,</p>"
                    + "<p>D'Alessandra Software</p>";

            message.setContent(emailContent, "text/html");
            Transport.send(message);
            System.out.println("E-mail enviado com sucesso!");

        } catch (MessagingException e) {
            e.printStackTrace();
            System.out.println("Falha ao enviar e-mail: " + e.getMessage());
        }
    }
}
