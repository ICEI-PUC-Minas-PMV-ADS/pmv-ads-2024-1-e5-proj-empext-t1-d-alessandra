# Planos de Testes de Software

 ### 1 - Funcionalidades Login/Cadastro
  
Para a tela de Login e Cadastro, desenvolvemos quatro tipos de testes para garantir que tudo esteja funcionando conforme o previsto.

**1.1 - Autenticação de Cadastro de E-mail na Plataforma:**

- Objetivo: Cadastrar o usuário no banco de dados do software e prevenir a duplicidade de cadastros com o mesmo e-mail.
- Passos: Acessar a página de cadastro e preencher o formulário.
- Critério de Sucesso: Se o e-mail já estiver cadastrado, um alerta será emitido, caso for cadastrado pela primeira vez poderá ser redirecionado para a pagina de Login.

**1.2 - Verificação de Cadastro sem Problemas:**

- Objetivo: Assegurar que todos os dados sejam enviados corretamente.
- Passos: Acessar a página de cadastro e preencher o formulário.
- Critério de Sucesso: Após o preenchimento correto, um alerta de confirmação de cadastro será exibido.

**1.3 - Restrição de Acesso a Usuários Cadastrados:**

- Objetivo: Garantir que apenas usuários cadastrados tenham acesso à plataforma.
- Passos: Tentar acessar a plataforma com um usuário não cadastrado.
- Critério de Sucesso: Se o usuário não estiver cadastrado, o acesso será negado pelo sistema.

**1.3 - Testes de interações com o usuário:**

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

Na tela de Financeiro, foi desenvolvido três testes para garantir que tudo esteja funcionando conforme o previsto.

**3.1 - Registro de despesas** 

  - Objetivo: Verificar se as despesas cadastradas pelo usuário estão sendo salvas de maneira correta.
  - Passos: Seleciona o botão "novo registro" preencher todos os dados e clica em "adicionar".
  - Criterio: Caso de sucesso, iria aparecer uma mensagem confirmando o registro e ele irá aparecer na lista.
     
**3.2 - Exclusão de despesas** 
 
  - Objetivo: Verificar se o item que o usuário deseja apagar esta sendo deletado de maneira correta.
  - Passos: Clicar na lixeira do item que deseja deletar e depois confimar.
  - Criterio: Caso de sucesso, irá aparecer uma mensagem dizendo que a operação foi executada com sucesso e o item não irá mais aparecer na lista.
     
**3.3 - Atualização de dados da despesa** 

  - Objetivo: Verificar se o usuário consegue editar os dados da despesa.
  - Passos: Acessar os tres pontos na frente do item que deseja, acessar a opção para editar o campo que deseja, preencher e salvar.
  - Criterio: Caso de sucesso,irá aparecer uma mensagem de confirmação e o campo na lista será atualizado.

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

### 6 - Funcionalidades Clientes

Na tela de Clientes, foi desenvolvido um teste para garantir que tudo esteja funcionando confome o previsto.

**6.1 - Registro de Cliente**

  - Objetivo: Verificar se o cadastro de um novo cliente está sendo salvo corretamente.
  - Passos: Selecionar o menu "Clientes", selecionar o sub-menu "Cliente", incluir os dados do cliente correspondente  e clicar em "Cadastrar".
  - Criterio: Caso de sucesso, iria aparecer uma mensagem confirmando que o cliente foi cadastrado com sucesso.

# Evidências de Testes de Software

### Funcionalidade de Cadastro/Login

#### Plano de teste 1.1 - Autenticação de Cadastro de E-mail na Plataforma: 

https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e5-proj-empext-t1-d-alessandra/assets/101743181/4e69efb7-568e-40d6-900b-852adadcac92


#### Plano de teste 1.2 - Verificação de Cadastro sem Problemas e preenchimento obrigatorio de todos os campos:

https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e5-proj-empext-t1-d-alessandra/assets/101743181/89f9dd74-30b8-49c7-bd6c-48a06b8cea6e


#### Plano de teste 1.3 - Restrição de Acesso a Usuários Cadastrados:




#### Plano de teste 1.4 - Testes de interações com o usuário:

https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e5-proj-empext-t1-d-alessandra/assets/101743181/69623a11-7853-4b4a-97a7-536ebe7763df



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
