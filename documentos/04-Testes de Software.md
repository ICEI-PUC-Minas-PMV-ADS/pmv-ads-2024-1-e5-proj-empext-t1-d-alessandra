# Planos de Testes de Software

 ### 1 - Funcionalidades Login/Cadastro
  
Para a tela de Login e Cadastro, desenvolvemos alguns dos diversos tipos de testes para garantir que tudo esteja funcionando conforme o previsto.

**1.1 - Cadastro de infomações para acesso a Plataforma:**

- Objetivo: Cadastrar o usuário no banco de dados do software e prevenir a duplicidade de cadastros com o mesmo e-mail.
- Passos: Acessar a página de cadastro e preencher o formulário.
- Critério de Sucesso: Caso for cadastrado pela primeira vez poderá ser redirecionado para a pagina de Login e acessar a plataforma.


**1.2 - Verificação de Cadastro sem Problemas e preenchimento obrigatorio de todos os campos::**

- Objetivo: Assegurar que todos os dados sejam enviados corretamente.
- Passos: Acessar a página de cadastro e preencher o formulário.
- Critério de Sucesso: Após o preenchimento correto, um alerta de confirmação de cadastro será exibido.


**1.3 - Prevenir duplicidade de informações Cadastrais:**

- Objetivo: Prevenir a duplicidade de cadastros com o mesmo e-mail.
- Passos: Acessar a página de cadastro e preencher o formulário com informações já cadastradas.
- Critério de Sucesso: Se o e-mail já estiver cadastrado, um alerta será emitido ao usuário, caso for cadastrado pela primeira vez será redirecionado para a pagina de Login.


**1.4 - Restrição de Acesso a Usuários Cadastrados ao realizar Login:**

- Objetivo: Garantir que apenas usuários cadastrados tenham acesso à plataforma ao realizar o Login.
- Passos: Tentar acessar a plataforma com um usuário não cadastrado.
- Critério de Sucesso: Se o usuário não estiver cadastrado, o acesso será negado pelo sistema.


**1.5 - Alteração de senha de acesso ao sistema:**

- Objetivo: Permitir aos usuários cadastrados atualizar a senha caso esquecam a senha de Login.
- Passos: Tentar realizar o cadastro de uma nova senha para acessar a pagina de Login.
- Critério de Sucesso: Se o usuário não estiver cadastrado, o acesso será negado pelo sistema.


**1.6 - Testes de interações com o usuário:**

- Objetivo: Garantir que o usuário tenha a experiencia de intração com o software ao utiliza-lo:
- Passos: Tentar acessar a plataforma e navegar entre as telas.
- Critério de Sucesso: O software deverá realizar interações atraves de animações e alertas.



### 2 - Funcionalidades Estoque

Para a tela de Estoque, desenvolvemos quatro tipos de testes para garantir que tudo esteja funcionando conforme o previsto.

**2.1 - Registro de itens no estoque**

  - Objetivo: Verificar se os itens que o usuário tenta cadastra estao sendo salvos de maneira correta.
  - Passos: Aperta o botão novo registro preencher todos os dados e clicar em adicionar.
  - Criterio: Caso de sucesso, iria aparecer uma mensagem confirmando o cadastro e ele ira aparecer na lista.
     
**2.2 - Exclusão de registro** 
  - Objetivo: Verificar se o item que o usuário deseja apagar esta sendo deletado de maneira correta.
  - Passos: Clicar na lixeira do item que deseja deletar e depois confimar.
  - Criterio: Caso de sucesso, iria aparecer uma mensagem dizendo que a operção foi executada com sucesso e o intem não vai mais aparecer na lista.
     
**2.3 - Atualização de quantidade de produto em estoque** 
  - Objetivo: Verificar se o usuário consegue adicionar mais quantidade de proddutos a um item.
  - Passos: Acessar os tres pontinho na frente do item que deseja, acessar a opção atualizar quantidade, preencher e salvar.
  - Criterio: Caso de sucesso,ira aparecer uma mensagem de confirmação e a quantidade na lista será atualizada.

**2.4 - Atualização de valor de venda**

   - Objetivo: Verificar se o usuário consegue atlerar o preco de venda do produto em especifico.
   - Passos: Acessar os três pontinhos do lado do intem que deseja e clicar na opção alterar o valor de venda.
   - Criterio: Caso de sucesso, ira aparecer uma mensagem indicando que a opecao foi realizada com sucesso e na lista de estoque seu valor será atualizado.
       
**2.5 - Atualização de valor comprado** 

   - Objetivo: Verificar se o usuário consegue editar o valor que ele comprou o item
   - Passos: Acessar os três pontinhos, ir na opção atualizar valor de compra, digitar o novo valor e mandar salvar 
   - Criterio: Caso de sucesso se da quando aparece um alerta confirmando a alteração e o valor na lista estiver mudado

**2.6 - Verificar se quando e realizada a venda de um produto a quantidade no estoque e atualizada** 

   - Objetivo: Verificar se ocorre a baixa do item no estoque quando e realozada uma cenda do mesmo
   - Passos: Acessar a tela de vendas, registra uma venda com qualquer produto do estoque, voltar na tela de estoque e verificar se a quantidade modificou
   - Criterio: Caso de sucesso se da quando a quantidade de poduto for menor que a inicial


### 3 - Funcionalidades Financeiro

Na tela de Financeiro, foi desenvolvido oito testes para garantir que tudo esteja funcionando conforme o previsto.

**3.1 - Registro de despesas** 

  - Objetivo: Verificar se as despesas cadastradas pelo usuário estão sendo salvas de maneira correta.
  - Passos: Seleciona o botão "novo registro" preencher todos os dados e clica em "adicionar".
  - Criterio: Caso de sucesso, iria aparecer uma mensagem confirmando o registro e ele irá aparecer na lista.
     
**3.2 - Exclusão de despesas** 
 
  - Objetivo: Verificar se o item que o usuário deseja apagar esta sendo deletado de maneira correta.
  - Passos: Clicar na lixeira do item que deseja deletar e depois confimar.
  - Criterio: Caso de sucesso, irá aparecer uma mensagem dizendo que a operação foi executada com sucesso e o item não irá mais aparecer na lista.
     
**3.3 - Atualização de nome da despesa** 

  - Objetivo: Verificar se o usuário consegue editar o nome/descrição da despesa.
  - Passos: Acessar os tres pontos na frente do item que deseja, acessar a opção para editar o nome da despesa, preencher e salvar.
  - Criterio: Caso de sucesso,irá aparecer uma mensagem de confirmação e o campo na lista será atualizado.

**3.4 - Atualização de tipo de despesa** 

  - Objetivo: Verificar se o usuário consegue editar o tipo da despesa.
  - Passos: Acessar os tres pontos na frente do item que deseja, acessar a opção para editar o tipo da despesa, selecionar e salvar.
  - Criterio: Caso de sucesso,irá aparecer uma mensagem de confirmação e o campo na lista será atualizado.    

**3.5 - Atualização de valor da despesa** 

  - Objetivo: Verificar se o usuário consegue editar o valor da despesa.
  - Passos: Acessar os tres pontos na frente do item que deseja, acessar a opção para editar o valor da despesa, preencher e salvar.
  - Criterio: Caso de sucesso,irá aparecer uma mensagem de confirmação e o campo na lista será atualizado.

**3.6 - Atualização da data de pagamento da despesa** 

  - Objetivo: Verificar se o usuário consegue editar a data de pagamento da despesa.
  - Passos: Acessar os tres pontos na frente do item que deseja, acessar a opção para editar a data de pagamento da despesa, preencher e salvar.
  - Criterio: Caso de sucesso,irá aparecer uma mensagem de confirmação e o campo na lista será atualizado.

**3.7 - Atualização de data de vencimento da despesa** 

  - Objetivo: Verificar se o usuário consegue editar a data de vencimento da despesa.
  - Passos: Acessar os tres pontos na frente do item que deseja, acessar a opção para editar a data de vencimento da despesa, preencher e salvar.
  - Criterio: Caso de sucesso,irá aparecer uma mensagem de confirmação e o campo na lista será atualizado.

**3.8 - Filtragem por data da tela Financeiro** 

  - Objetivo: Verificar se a lista e os cards de valores atualizam corretamente conforme o filtro selecionado pelo cliente.
  - Passos: Selecionar o dia, mês e ano ou algum deles, e clicar em filtrar.
  - Criterio: Caso de sucesso, os cards superiores e a lista de valores irão atualizar corretamente.


### 4 - Clientes inadiplentes

Na tela de Financeiro, foi desenvolvido três testes para garantir que tudo esteja funcionando conforme o previsto.

**4.1 - Filtro por cliente** 

  - Objetivo: Verificar se o filtro de cliente esta funcionando.
  - Passos: Na parte superior da pagina devera digitar o nome de um cliente.
  - Criterio: Caso de sucesso, ira listar todas as compras pendentes dos cliente.
     
**4.2 - Dar baixa no clinete devedor** 
 
  - Objetivo: Verificar se consegue atualizar o stauts de pendencia do cliente.
  - Passos: Entrar na tela de clientes inadiplentes, escolher um cliente, acessar o menu lateral da tabela e ir na sessão dar baixa.
  - Criterio: Caso de sucesso, após dar a baixa quando voltar a tela principal o cliente não estará mais na lista.
     
**4.3 - Extrato das compras pendetes** 

  - Objetivo: Verificar se está buscandoas compras devidas do clinete.
  - Passos: Entrar na tela de clientes inadiplentes, escolher um cliente, acessar o menu lateral da tabela e ir na sessão extrato.
  - Criterio: Caso de sucesso, ira abri um modal listando todos os produtos devidos do cliente.

### 5 - Historico dos clientes

Na tela de Financeiro, foi desenvolvido três testes para garantir que tudo esteja funcionando conforme o previsto.

**5.1 - Listagem de todos os cliente e sinalização dos devedores** 

  - Objetivo: Verificar a pagina consegue listar todos os clientes e sinalizar quem tem compra pendente.
  - Passos: No menu esquerdo acesse a aba cliente, historico cliente, e clique nela.
  - Criterio: Caso de sucesso, ira listar todos os cliente e caso ele tenha pendencia havera um notificação.
     
**5.2 - Exibir Historico** 

  - Objetivo: Verificar se as informações dos clientes estão aparecendo.
  - Passos: Na tela historico clinte, clique em exibir historico.
  - Criterio: Caso de sucesso, ira aparecer as informações pessoais dos clintes, tempo de cadastro e outras informações.

### 6 - Funcionalidades Vendas

Na tela de Vendas, foi desenvolvido dois testes para garantir que tudo esteja funcionando confome o previsto.

**6.1 - Registro de vendas**

  - Objetivo: Verificar se as vendas que o usuário cadastra está sendo salva corretamente.
  - Passos: Selecionar o menu "Venda", selecionar o sub-menu "Venda", incluir o cliente correspondente, incluir os itens desejados, selecionar a forma de pagamento e clicar em "Gravar".
  - Criterio: Caso de sucesso, iria aparecer uma mensagem confirmando que a venda foi feita com sucesso.

**6.2 - Seleção de Forma de Pagamento**

  - Objetivo: Possibilidade de escolher alguma forma de pagamento.
  - Passos: Selecionar o menu "Venda", selecionar o sub-menu "Venda" e no campo "Forma de Pagamento" ao clicar, ser apresentado as formas de pagamentos.
  - Criterio: Caso de sucesso, a forma de pagamento selecionada será apresentada no campo "Forma de Pagamento".

### 7 - Funcionalidades Clientes

Na tela de Clientes, foi desenvolvido um teste para garantir que tudo esteja funcionando confome o previsto.

**7.1 - Registro de Cliente**

  - Objetivo: Verificar se o cadastro de um novo cliente está sendo salvo corretamente.
  - Passos: Selecionar o menu "Clientes", selecionar o sub-menu "Cliente", incluir os dados do cliente correspondente  e clicar em "Cadastrar".
  - Criterio: Caso de sucesso, iria aparecer uma mensagem confirmando que o cliente foi cadastrado com sucesso.

### 8 - Funcionalidades Relatório Venda

Na tela de Relatório Venda, foi desenvolvido um teste para garantir que tudo esteja funcionando confome o previsto.

**8.1 - Apresentação de Relatório Venda**

  - Objetivo: Verificar se as vendas diárias estão sendo apresentadas corretamente.
  - Passos: Selecionar o menu "Venda", selecionar o sub-menu "Relatório Venda" e selecionar a data desejada.
  - Criterio: Caso de sucesso, irá apresentar na lista as vendas realizadas e o gráfico com os valores.

# Evidências de Testes de Software

### Funcionalidade de Cadastro/Login

#### Plano de teste 1.1 - Cadastro de infomações para acesso a Plataforma: 



#### Plano de teste 1.2 - Verificação de Cadastro sem Problemas e preenchimento obrigatorio de todos os campos:



#### Plano de teste 1.3 - Prevenir duplicidade de informações Cadastrais:



#### Plano de teste 1.4 - Restrição de Acesso a Usuários já cadastrados ao realizar Login:


#### Plano de teste 1.5 - Alteração de senha de acesso ao sistema:



#### Plano de teste 1.6 - Testes de interações com o usuário:



### Funcionalidade de estoque

#### Plano de teste 02.0 - Registro de itens no estoque 

https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e5-proj-empext-t1-d-alessandra/assets/40009988/3336eb2b-9409-4766-a028-d1958821aa48

#### Plano de teste 02.1 - Exclusão de registro 

https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e5-proj-empext-t1-d-alessandra/assets/40009988/1e039393-229d-4700-9c86-cab33b459cd4

#### Plano de teste 02.2 - Atualização de quantidade de produto em estoque 

https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e5-proj-empext-t1-d-alessandra/assets/40009988/554fb268-82c1-47cb-a319-16b19c0c8b22

#### Plano de teste 02.3 - Atualização de valor de venda


https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e5-proj-empext-t1-d-alessandra/assets/40009988/1ddb7c5d-bb83-451c-ab3d-10c79b3c5889

#### Plano de teste 02.4 - Atualização de valor comprado 

https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e5-proj-empext-t1-d-alessandra/assets/40009988/238a5ba7-37b8-4fd8-b898-4c080793f375

#### Plano de teste 02.5 - Verificar se quando e realizada a venda de um produto a quantidade no estoque e atualizada

https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e5-proj-empext-t1-d-alessandra/assets/40009988/43e343ab-797a-4f85-9acf-cb357b7e544f

### Funcionalidade de Despesas

#### Plano de teste 03.0 - Registro de despesas

https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e5-proj-empext-t1-d-alessandra/assets/101369477/27317d02-96fc-4f95-870a-3218399aeb02

#### Plano de teste 03.1 - Exclusão de despesas

https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e5-proj-empext-t1-d-alessandra/assets/101369477/797f2f6c-be4c-47f6-af80-5f4a173bdddc

#### Plano de teste 03.2 - Edição de nome da despesa

https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e5-proj-empext-t1-d-alessandra/assets/101369477/c136aeb5-29f4-4da1-a9f2-a8a340aa12ee

#### Plano de teste 03.3 - Edição de tipo da despesa

https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e5-proj-empext-t1-d-alessandra/assets/101369477/2ad0fc90-2ab3-4668-8b94-9da8efe66f92

#### Plano de teste 03.4 - Edição de valor da despesa

https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e5-proj-empext-t1-d-alessandra/assets/101369477/df0ba789-0c88-4365-bcbe-97dec2687bb9

#### Plano de teste 03.5 - Edição de data de pagamento da despesa

https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e5-proj-empext-t1-d-alessandra/assets/101369477/a03f3172-68ab-443d-b9ce-9bbd92a927d1

#### Plano de teste 03.6 - Edição de data de vencimento da despesa

https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e5-proj-empext-t1-d-alessandra/assets/101369477/95931ea0-a9ea-4763-8c4a-f5e7f6afde44

#### Plano de teste 03.7 - Filtragem por data

https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e5-proj-empext-t1-d-alessandra/assets/101369477/e694847b-3e59-49d1-9ede-16125849b4ce

### 4 - Clientes inadiplentes

#### Plano de teste 4.1 - Filtro por cliente tela ( tela clientes inadiplentes)

https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e5-proj-empext-t1-d-alessandra/assets/40009988/880ec401-4198-4ab1-b91a-684efa793207
     
#### Plano de teste 4.2 - Dar baixa no clinete devedor 
 
https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e5-proj-empext-t1-d-alessandra/assets/40009988/030410ab-0075-40c4-9b93-c49e372c5881

#### Plano de teste 4.3 - Extrato das compras pendetes

https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e5-proj-empext-t1-d-alessandra/assets/40009988/8ef874ed-aae5-4396-bde4-2f40328a2401


### 5 - Historico dos clientes

#### Plano de teste 5.1 - Listagem de todos os cliente e sinalização dos devedores*

https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e5-proj-empext-t1-d-alessandra/assets/40009988/c32cda64-503b-4da1-ae5b-3c1af07fdf3d

#### Plano de teste 5.2 - Exibir Historico 

https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e5-proj-empext-t1-d-alessandra/assets/40009988/c50a0cb3-934e-4e44-8546-d81358ad966f

### Funcionalidade de Vendas

#### Plano de teste 6.1 - Registro de Venda

https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e5-proj-empext-t1-d-alessandra/assets/85502110/294eab05-9dbc-4a45-b97f-ede0500ab625

#### Plano de teste 6.2 - Seleção de Forma de Pagamento

https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e5-proj-empext-t1-d-alessandra/assets/85502110/4e364a99-72ba-424a-8273-442d47809c24

### Funcionalidade de Cliente

#### Plano de teste 7.1 - Registro de Cliente

https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e5-proj-empext-t1-d-alessandra/assets/85502110/b759bca9-76ce-48bb-ae37-015a04f78b1e

### Funcionalidade de Relatório Venda

#### Plano de teste 8.1 - Apresentação de Relatório Venda

https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e5-proj-empext-t1-d-alessandra/assets/85502110/7dec3064-52a0-4339-8b05-473d1cab79b9


# Teste por Pares

## Evidencias de teste da tela Cadastro - Executor do teste: Matheus Sampaio

#### Plano de teste 1.1 - Cadastro de infomações para acesso a Plataforma: 

https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e5-proj-empext-t1-d-alessandra/assets/85502110/2c487376-dccd-4a21-ba3a-e48ab3e99b20

#### Plano de teste 1.2 - Verificação de Cadastro sem Problemas e preenchimento obrigatorio de todos os campos:

https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e5-proj-empext-t1-d-alessandra/assets/85502110/c2cae17c-a5d7-48bf-b9e2-df49bf687c97

#### Plano de teste 1.3 - Prevenir duplicidade de informações Cadastrais:

https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e5-proj-empext-t1-d-alessandra/assets/85502110/66f09550-b23e-4a0b-a9e2-6f88cdad32fb

Obs: Será alterado o erro apresentado em tela para algo parecido com "Já existe um cadastro realizado para este usuário"

#### Plano de teste 1.4 - Alteração de senha de acesso ao sistema:

https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e5-proj-empext-t1-d-alessandra/assets/85502110/1f94f05a-9548-4116-9891-2b192efa9d51

Obs: Será ajustado para apresentar mensagem ao alterar senha.

## Evidencias de teste da tela estoque - Executor do teste: Matheus Ferreira

### 2.1 - Registro de itens no estoque

https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e5-proj-empext-t1-d-alessandra/assets/101369477/058197d9-712e-41c9-bfb4-a350e645d225

### 2.2 - Exclusão de itens no estoque

https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e5-proj-empext-t1-d-alessandra/assets/101369477/0c15c623-1cab-450f-bced-fc93510c5d68

### 2.3 - Atualização do valor de venda, valor de compra e quantidade em estoque

https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e5-proj-empext-t1-d-alessandra/assets/101369477/ac52fe39-94f6-4d2c-b465-cc4de9d3a32b

### 2.4 - Verificar se quando e realizada a venda de um produto a quantidade no estoque e atualizada 

https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e5-proj-empext-t1-d-alessandra/assets/101369477/7a5f62ff-7a9e-4e87-9e4c-b8796018dc65


## Evidencias de teste da tela financeiro - Executor do teste: Vitor Hugo

### 3.1 - Registro de despesas

https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e5-proj-empext-t1-d-alessandra/assets/40009988/dd4793e5-b1b5-4c69-8410-937458fcac3c

### 3.2 - Exclusão de despesas

https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e5-proj-empext-t1-d-alessandra/assets/40009988/7b1bf4fa-9da6-4b70-848b-7fb8182b9153


### 3.3 - Atualização do nome da despesa, tipo de despesa, valor da despesa, data de pagamento da despesa, data de vencimento da despesa

https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e5-proj-empext-t1-d-alessandra/assets/40009988/f800fb0e-4aee-4a3f-8cc2-145ec895b543

### 3.4 - Filtragem por data da tela Financeiro

https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e5-proj-empext-t1-d-alessandra/assets/40009988/05e0168e-6aec-458c-8355-b9a28ec2681f


## Evidencias de teste da tela cliente devedor - Executor do teste: Matheus Ferreira

### 4.1 - Filtro por cliente

https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e5-proj-empext-t1-d-alessandra/assets/101369477/73fe52a1-7099-4440-976c-c8bdefc15817

### 4.2 - Baixa do cliente devedor

https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e5-proj-empext-t1-d-alessandra/assets/101369477/e09cde07-c73f-4373-b090-8163e64c64ed

### 4.3 - Extrato dos clientes devedores

https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e5-proj-empext-t1-d-alessandra/assets/101369477/eb231e18-11f0-4fe0-9179-f68f643d4bd4


## Evidencias de teste da tela histórico do cliente - Executor do teste: Matheus Ferreira

### 5.1 - Listagem de todos os cliente e sinalização dos devedores

https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e5-proj-empext-t1-d-alessandra/assets/101369477/5e696017-c67a-46f4-b769-b6045addb262

**5.2 - Exibir Historico

https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e5-proj-empext-t1-d-alessandra/assets/101369477/17664a12-0ea4-4c23-96c8-75fffc8773db

