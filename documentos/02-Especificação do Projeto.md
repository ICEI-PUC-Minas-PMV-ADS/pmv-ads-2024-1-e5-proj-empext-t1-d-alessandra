# Especificações do Projeto


## Arquitetura e Tecnologias

O projeto adotará uma arquitetura moderna e escalável para atender às necessidades da loja D'Alessandra. A solução será desenvolvida utilizando as seguintes tecnologias:

- Frontend: A interface do usuário será desenvolvida utilizando design de código, SOLID software orientado a objetos (OOD), biblioteca React e Folha de Estilo TailwindCSS.
- Backend: A lógica de negócio será desenvolvida utilizando Java, pattern BFF para Backend For Frontend.

## Project Model Canvas

![Img](<img/../img/Model%20Canva.jpg>)

## Requisitos

### Requisitos Funcionais

|ID    | Descrição do Requisito                                                                                       |Prioridade |
|------|----------------------------------------------------------------------------------------------------------------|----------|
| RF-001 |A aplicação deve permitir que o administrador faça login.	                                                    |ALTA      |
| RF-002 |O sistema deve permitir que os usuários se cadastrem na plataforma, fornecendo informações pessoais.        	|ALTA      |
| RF-003 |O sistema deve permitir realizar cadastro de produtos de estoque.	                                            |ALTA      |
| RF-004 |O sistema deve listar todos os produtos que estão em estoque com seu respectivo status.	                      |ALTA      |
| RF-005 |O sistema deve mostrar a quantidade total de produtos no estoque e o valor total do estoque.                 	|MÉDIA     |
| RF-006 |O sistema deve mostrar os produtos mais vendidos na loja.	                                                    |MÉDIA     |
| RF-007 |O sistema deve permitir o registro das vendas realizadas pela loja.	                                          |ALTA      |
| RF-008 |O sistema deve listar as vendas do dia através de um filtro.	                                                |MÉDIA     |
| RF-009 |O sistema deve ter a possibilidade de criar o cadastro do cliente.                                        	  |ALTA      |
| RF-010 |O sistema deve permitir o gerenciamento dos valores vendidos no dia/semana/mês.	                              |MÉDIA     |
| RF-011 |O sistema deve permitir o gerenciamento de pagamento.	                                                        |ALTA      |
| RF-012 |O sistema deve ser capaz de emitir um alerta ao usuário sempre que um devedor estiver pendente de pagamento.	|ALTA      |
| RF-013 |O sistema deve permitir que a loja consiga fazer o controle das suas despesas.                               	|ALTA      |
| RF-014 |Registro de despesas.                                                                                         |ALTA      |

### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001 |A aplicação será publicado em um ambiente na Internet.                                    | ALTA.   | 
|RNF-002 |A aplicação será compatível com os principais navegadores do mercado.                     | ALTA.   | 
|RNF-003 |A aplicação deve ser confiável, deve atender às demandas do cliente.                      | MÉDIA   | 
|RNF-004 |A aplicação deve tratar acessos não autorizados, garantindo um alto grau de segurança.    | MÉDIA   | 
|RNF-005 |A interface da aplicação será simples e limpa buscando rápido aprendizado de usabilidade. | BAIXA   | 


## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| A aplicação deverá ser entregue no final do semestre letivo.                               |
|02| A aplicação deve se restringir às tecnologias básicas da Web de FrontEnd e Backend.        |
|03| A equipe não pode subcontratar terceiros para o desenvolvimento do trabalho.               |
|04| A aplicação não pode ser feita por um único integrante do grupo.                           |
|05| As decisões pertinentes ao projeto devem ser tomadas por meio democrático de votação.      |
|06| A aplicação deve estar em conformidade com as leis e normas vigentes.                      |

## Diagrama de Casos de Uso

O diagrama de casos de uso é o próximo passo após a elicitação de requisitos, que utiliza um modelo gráfico e uma tabela com as descrições sucintas dos casos de uso e dos atores. Ele contempla a fronteira do sistema e o detalhamento dos requisitos funcionais com a indicação dos atores, casos de uso e seus relacionamentos. 

As referências abaixo irão auxiliá-lo na geração do artefato “Diagrama de Casos de Uso”.

> **Links Úteis**:
> - [Criando Casos de Uso](https://www.ibm.com/docs/pt-br/elm/6.0?topic=requirements-creating-use-cases)
> - [Como Criar Diagrama de Caso de Uso: Tutorial Passo a Passo](https://gitmind.com/pt/fazer-diagrama-de-caso-uso.html/)
> - [Lucidchart](https://www.lucidchart.com/)
> - [Astah](https://astah.net/)
> - [Diagrams](https://app.diagrams.net/)

## Modelo ER (Projeto Conceitual)

![Img](<img/../img/Modelo%20Entidade%20Relacionamento.png>)

## Projeto da Base de Dados

O projeto da base de dados corresponde à representação das entidades e relacionamentos identificadas no Modelo ER, no formato de tabelas, com colunas e chaves primárias/estrangeiras necessárias para representar corretamente as restrições de integridade.
