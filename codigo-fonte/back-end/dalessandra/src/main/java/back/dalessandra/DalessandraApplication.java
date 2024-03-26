package back.dalessandra;

import back.dalessandra.Model.Estoque;
import back.dalessandra.repository.estoque.EstoqueRepository;
import back.dalessandra.service.envioEmail.EmailEnvio;
import back.dalessandra.service.estoque.EstoqueService;
import back.dalessandra.service.estoque.EstoqueServiceMore;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import java.util.*;
import  java.util.List;
@SpringBootApplication
public class DalessandraApplication {

	public static void main(String[] args) {
		SpringApplication.run(DalessandraApplication.class, args);

	}

}
