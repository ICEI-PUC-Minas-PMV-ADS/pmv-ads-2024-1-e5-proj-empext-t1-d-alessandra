# Especificações do Projeto

## Arquitetura e Tecnologias

O projeto adotará uma arquitetura moderna e escalável para atender às necessidades da loja D'Alessandra. A solução será desenvolvida utilizando as seguintes tecnologias:

1) Frontend: 
    * Tailwind
    * React

</br>

2) Backend: 
    * Java - Spring boot - Lombok  
    * Solid

</br>

3) Banco de Dados: 
    * MySQL
    
4) Arquitura de Software: 
    * BFF

## Project Model Canvas
O Project Model Canvas é uma ferramenta de planejamento que permite a equipe visualizar e estruturar os principais elementos de um projeto em um único quadro. O Project Model Canvas simplifica a análise e a comunicação dos objetivos, recursos e atividades do projeto, promovendo uma compreensão clara e colaborativa para o escopo.

![Img](<img/../img/Model%20Canva.jpg>)


## Software Notion (KANBAN)

O Notion permite criar um quadro Kanban personalizado para atender às necessidades específicas do projeto D'Alessandra.

O Notion, um software altamente flexível e multifuncional, pode ser habilmente utilizado como uma poderosa ferramenta Kanban para gerenciar projetos de forma eficaz. O método Kanban, tem sido amplamente adotado em diversos setores para visualizar fluxos de trabalho, otimizar processos e aumentar a produtividade. O mesmo pode ser acessado através do link abaixo:

https://jeweled-duckling-fd8.notion.site/fc759d8195f545b98ac6a06ec1d9cea6?v=9cac7cd7282d48cfbe607a240c45927d&pvs=4

![Img](<img/../img/Notion.Tela.1.png>)
![Img](<img/../img/Notion.Tela.2.png>)


## Requisitos

### Requisitos Funcionais

|ID      | Descrição do Requisito                                                                                       |Prioridade|
|--------|--------------------------------------------------------------------------------------------------------------|----------|
| RF-001 |A aplicação deve permitir que o administrador faça login.	                                                    |ALTA      |
| RF-002 |O sistema deve permitir que os usuários se cadastrem na plataforma, fornecendo informações pessoais.        	|ALTA      |
| RF-003 |O sistema deve permitir realizar cadastro de produtos de estoque.	                                            |ALTA      |
| RF-004 |O sistema deve listar todos os produtos que estão em estoque com seu respectivo status.	                    |ALTA      |
| RF-005 |O sistema deve mostrar a quantidade total de produtos no estoque e o valor total do estoque.                 	|MÉDIA     |
| RF-006 |O sistema deve mostrar os produtos mais vendidos na loja.	                                                    |MÉDIA     |
| RF-007 |O sistema deve permitir o registro das vendas realizadas pela loja.	                                        |ALTA      |
| RF-008 |O sistema deve listar as vendas do dia através de um filtro.	                                                |MÉDIA     |
| RF-009 |O sistema deve ter a possibilidade de criar o cadastro do cliente.                                        	|ALTA      |
| RF-010 |O sistema deve permitir o gerenciamento dos valores vendidos no dia/semana/mês.	                            |MÉDIA     |
| RF-011 |O sistema deve permitir selecionar formas de pagamento.	                                                        |ALTA      |
| RF-012 |O sistema deve ser capaz de emitir dentro de um período, um alerta ao usuário sempre que um devedor estiver pendente de pagamento.	|ALTA      |
| RF-013 |O sistema deve permitir que a loja consiga fazer o controle das suas despesas.                               	|ALTA      |
| RF-014 |O sistema deve permitir o gerenciamento de despesas.                                                          |ALTA      |

### Requisitos não Funcionais

|ID      | Descrição do Requisito  |Prioridade |
|--------|-------------------------|----|
|RNF-001 |A aplicação será publicado em um ambiente na Internet.                                    | ALTA    | 
|RNF-002 |A aplicação será compatível com os principais navegadores do mercado.                     | ALTA    | 
|RNF-003 |A aplicação deve ser confiável, deve atender às demandas do cliente.                      | MÉDIA   | 
|RNF-004 |A aplicação deve tratar acessos não autorizados, garantindo um alto grau de segurança.    | MÉDIA   | 
|RNF-005 |A interface da aplicação será simples e limpa buscando rápido aprendizado de usabilidade. | BAIXA   | 


## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                                                                  |
|--|--------------------------------------------------------------------------------------------|
|01| A aplicação deverá ser entregue no final do semestre letivo.                               |
|02| A aplicação deve se restringir às tecnologias básicas da Web de FrontEnd e Backend.        |
|03| A equipe não pode subcontratar terceiros para o desenvolvimento do trabalho.               |
|04| A aplicação não pode ser feita por um único integrante do grupo.                           |
|05| As decisões pertinentes ao projeto devem ser tomadas por meio democrático de votação.      |
|06| A aplicação deve estar em conformidade com as leis e normas vigentes.                      |

## Diagrama de Casos de Uso

![Img](img/Modelo%20UML.png)

## Modelo ER (Projeto Conceitual)

![Img](<img/../img/Modelo%20Entidade%20Relacionamento.png>)

## Projeto da Base de Dados

![Img](img/Modelo%20Relacional.png)
