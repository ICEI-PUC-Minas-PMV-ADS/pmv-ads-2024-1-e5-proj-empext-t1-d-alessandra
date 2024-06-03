# Planos de Testes de Software

## Casos de Testes

 ### 1 -  Login e Cadastro
  
Para a tela de Login e Cadastro, desenvolvemos casos de testes de sucesso e insucesso para garantir que tudo esteja funcionando conforme o previsto.

**1.1 - Cadastro de infomações para acesso a Plataforma:**

- Objetivo: Cadastrar o usuário no banco de dados do software e prevenir a duplicidade de cadastros com o mesmo e-mail.
  
- Passos: Acessar a página de cadastro e preencher o formulário.
  
- Critério de Sucesso: Caso seja realizado o cadastro pela primeira vez poderá ser redirecionado para a pagina de Login e acessar a plataforma.
  
- Critério de Insucesso: Caso houver falhas na validação, o cadastro não será efetuado e o usuário deverá ser informado sobre os erros específicos (por exemplo, e-mail inválido, campos vazios e as senha não se coincidem).


**1.2 - Verificação de Cadastro sem Problemas e preenchimento obrigatorio de todos os campos:**

- Objetivo: Assegurar que todos os dados sejam enviados corretamente.
  
- Passos: Acessar a página de cadastro e preencher o formulário.
  
- Critério de Sucesso: Após o preenchimento correto, um alerta de confirmação de cadastro será exibido.
  
- Critério de Insucesso: O sistema deve impedir o cadastro, exibindo mensagens de erro detalhadas para cada campo obrigatório não preenchido ou preenchido incorretamente.


**1.3 - Prevenir duplicidade de informações Cadastrais:**

- Objetivo: Prevenir a duplicidade de cadastros com o mesmo e-mail.

- Passos: Acessar a página de cadastro e preencher o formulário com informações já cadastradas.

- Critério de Sucesso: Se o e-mail já estiver cadastrado, um alerta será emitido ao usuário, caso for cadastrado pela primeira vez será redirecionado para a pagina de Login.

- Critério de Insucesso: O sistema deve impedir o cadastro e exibir uma mensagem clara informando que o e-mail já está em uso.


**1.4 - Restrição de Acesso a Usuários Cadastrados ao realizar Login:**

- Objetivo: Garantir que apenas usuários cadastrados tenham acesso à plataforma ao realizar o Login.

- Passos: Acessar a plataforma com um usuário cadastrado e não cadastrado.

- Critério de Sucesso: Se o usuário estiver cadastrado, o acesso será permitido pelo sistema.

- Critério de Insucesso: O sistema deve negar o acesso e exibir uma mensagem de erro informando que o usuário não está cadastrado.


**1.5 - Alteração de senha de acesso ao sistema:**

- Objetivo: Permitir atualizar senha caso usuário esqueça e verificar falhas no processo de atualização de senha para usuários.

- Passos: Tentar realizar o cadastro de uma nova senha para acessar a pagina de Login.

- Critério de Sucesso: Se o usuário estiver cadastrado, a senha será alterada pelo sistema.

- Critério de Insucesso: O sistema deve negar a alteração de senha e exibir uma mensagem informando que o e-mail não está cadastrado.


**1.6 - Testes de interações com o usuário:**

- Objetivo: Garantir que o usuário tenha a experiência de intração com o software:

- Passos: Acessar a plataforma e navegar entre as telas.

- Critério de Sucesso: O software deverá realizar interações através de animações e alertas.

- Critério de Insucesso: Se o software não realizar as interações esperadas (como animações e alertas), nada será apresentado ao usuário. 


### 2 - Estoque

Para a tela de Estoque, desenvolvemos casos de testes de sucesso e insucesso para garantir que tudo esteja funcionando conforme o previsto.

**2.1 - Registro de itens no estoque**

- Objetivo: Verificar os itens que o usuário cadastrou estão sendo salvos de maneira correta.

- Passos: Aperta o botão "novo registro", preencher o formulário com todos os dados e clicar em "adicionar".
  
- Critério de Sucesso: Aparecerá uma mensagem confirmando o cadastro e será apresentado os dados na lista.

- Critério de Insucesso: O sistema deve exibir mensagens de erro para cada campo obrigatório não preenchido ou preenchido incorretamente e impedir o registro.

     
**2.2 - Exclusão de registro** 
- Objetivo: Verificar se os itens que o usuário deseja apagar está sendo deletados.
  
- Passos: Clicar na "lixeira" do item que deseja deletar e depois "confimar".
  
- Critério de Sucesso: Aparecerá uma mensagem dizendo que a operação foi executada com sucesso, e que o item selecionado não aparecerá na lista.

- Critério de Insucesso: O sistema deve exibir uma mensagem de erro se a exclusão não for possível e o item deve permanecer na lista.


**2.3 - Atualização de quantidade de produto em estoque** 
- Objetivo: Verificar se o usuário consegue adicionar mais quantidade de proddutos a um item.

- Passos: Acessar os tres pontinho na frente do item que deseja, selecione "atualizar quantidade", preencher e salvar.

- Critério de Sucesso: Deverá aparecer uma mensagem de confirmação, e a quantidade na lista será atualizada.

- Critério de Insucesso: O sistema exibirá mensagens de erro e a quantidade não deve ser atualizada.


**2.4 - Atualização de valor de venda**

- Objetivo: Verificar se o usuário consegue atlerar o preco de venda do produto em específico.

- Passos: Acessar os três pontinhos do lado do intem que deseja e clicar na opção alterar o valor de venda.

- Critério de Sucesso: Caso de sucesso, ira aparecer uma mensagem indicando que a opecao foi realizada com sucesso e na lista de estoque seu valor será atualizado.

- Critério de Insucesso: O sistema deve exibir mensagens de erro e o valor de venda não deve ser atualizado.


**2.5 - Atualização de valor comprado** 

- Objetivo: Verificar edição do valor de compra de um item.

- Passos: Acessar os três pontos, selecione "atualizar valor de compra", preencha com um valor  e salvar.

- Critério de Sucesso: Aparecerá um alerta confirmando a alteração do valor e o mesmo será atualizado.

- Critério de Insucesso: O sistema deve exibir um alerta de erro e o valor de compra não deve ser atualizado.


**2.6 - Verificar se quando e realizada a venda de um produto a quantidade no estoque e atualizada** 

- Objetivo: Verificar se ocorre a baixa do item no estoque quando e realizado uma cenda do mesmo

- Passos: Acesse a tela de vendas, registrar uma venda com um produto do estoque, voltar na tela de estoque e verificar se a quantidade foi atualizada.

- Critério de Sucesso: A quantidade de poduto selecionado será atualizado e uma alerta de sucesso deve ser exibida.

- Critério de Insucesso: A quantidade do produto no estoque não deve ser alterada e uma mensagem de erro deve ser exibida.


### 3 - Financeiro

Na tela de Financeiro, desenvolvemos casos de testes de sucesso e insucesso para garantir que tudo esteja funcionando conforme o previsto.

**3.1 - Registro de despesas** 

- Objetivo: Verificar se as despesas cadastradas estão sendo salvas de maneira correta.

- Passos: Seleciona o botão "novo registro" preencher todos os dados e clica em "adicionar".

- Critério de Sucesso: Deverá aparecer uma mensagem confirmando o registro e ele aparecerá na lista.

- Critério de Insucesso: O sistema deve exibir mensagens de erro e a despesa não deve ser registrada.


**3.2 - Exclusão de despesas** 
 
- Objetivo: Verificar se o item que o usuário deseja apagar será excluido.

- Passos: Clicar na lixeira do item que deseja deletar e depois confirmar a exclusão.

- Critério de Sucesso: Deverá aparecer um alerta apresentado que a operação foi executada com sucesso e o item não irá mais aparecer na lista.

- Critério de Insucesso: O sistema deve exibir uma mensagem de erro e a despesa deverá permanecer na lista.


**3.3 - Atualização de nome da despesa** 

- Objetivo: Verificar se o usuário consegue editar o nome/descrição da despesa.

- Passos: Acessar os tres pontos na frente do item que deseja, acessar a opção para editar o nome da despesa, preencher e salvar.

- Critério de Sucesso: Caso de sucesso,irá aparecer uma mensagem de confirmação e o campo na lista será atualizado.

- Critério de Insucesso: O sistema deve exibir mensagens de erro e o nome da despesa não deve ser atualizado.


**3.4 - Atualização de tipo de despesa** 

- Objetivo: Verificar se o usuário consegue editar o tipo da despesa.

- Passos: Acessar os tres pontos na frente do item, selecionar "editar o tipo de despesa", selecionar e salvar.

- Critério de Sucesso: Caso de sucesso,irá aparecer uma mensagem de confirmação e o campo na lista será atualizado.    

- Critério de Insucesso: O sistema deve exibir mensagens de erro e o tipo de despesa não deve ser atualizado.


**3.5 - Atualização de valor da despesa** 

- Objetivo: Verificar se o usuário consegue editar o valor da despesa.

- Passos: Acessar os três pontos na frente do item, selecionar "editar o valor da despesa", preencher e salvar.

- Critério de Sucesso: Caso de sucesso,irá aparecer uma mensagem de confirmação e o campo na lista será atualizado.

- Critério de Insucesso: O sistema deve exibir mensagens de erro e o valor da despesa não deve ser atualizado.


**3.6 - Atualização da data de pagamento da despesa** 

- Objetivo: Verificar se o usuário consegue editar a data de pagamento da despesa.

- Passos: Acessar os três pontos na frente do item, selecionar a opção para editar a data de pagamento da despesa, preencher e salvar.

- Critério de Sucesso: Caso de sucesso, irá aparecer uma mensagem de confirmação e o campo na lista será atualizado.

- Critério de Insucesso: O sistema deve exibir mensagens de erro e a data de pagamento não deve ser atualizada.


**3.7 - Atualização de data de vencimento da despesa** 

- Objetivo: Verificar se o usuário consegue editar a data de vencimento da despesa.

- Passos: Acessar os três pontos na frente do item, selecionar a opção para editar a data de vencimento da despesa, preencher e salvar.

- Critério de Sucesso:  Deverá aparecer uma mensagem de confirmação e o campo na lista será atualizado.

- Critério de Insucesso: O sistema deve exibir mensagens de erro e a data de vencimento não deve ser atualizada.


**3.8 - Filtragem por data da tela Financeiro** 

- Objetivo: Verificar se a lista e os cards de valores atualizam corretamente conforme o filtro selecionado pelo cliente.

- Passos: Selecionar dia, mês e ano ou algum deles, e clicar em "filtrar".

- Critério de Sucesso: Os cards superiores e a lista de valores irão atualizar corretamente.

- Critério de Insucesso: O sistema deve exibir mensagens de erro e não deve atualizar a lista ou os cards de valores.


### 4 - Clientes inadiplentes

Na tela de Financeiro, desenvolvemos casos de testes de sucesso e insucesso para garantir que tudo esteja funcionando conforme o previsto.

**4.1 - Filtro por cliente** 

- Objetivo: Verificar se o filtro de cliente esta funcionando ou se há falhas.

- Passos: Digitar o nome de um cliente da parte superior da página.
  
- Critério de Sucesso: Deverá listar todas as compras pendentes dos cliente.

- Critério de Insucesso: O sistema deve exibir uma mensagem de erro e não deve listar compras pendentes.


**4.2 - Dar baixa no clinete devedor** 
 
- Objetivo: Verificar atualização do status de pendencia do cliente.

- Passos: Entrar na tela de clientes inadiplentes, escolher um cliente, acessar o menu lateral da tabela e ir na sessão dar baixa.

- Critério de Sucesso: Caso de sucesso, após dar a baixa quando voltar a tela principal o cliente não estará mais na lista.

- Critério de Insucesso: O sistema deve exibir uma mensagem de erro e não deve listar compras pendentes.
  

**4.3 - Extrato das compras pendetes** 

- Objetivo: Verificar busca de compras devidas do clinete.

- Passos: Entrar na tela de clientes inadiplentes, escolher um cliente, acessar o menu lateral da tabela e ir na sessão extrato.

- Critério de Sucesso: Abrirá um modal listando todos os produtos devidos do cliente.

- Critério de Insucesso: O sistema deve exibir uma mensagem de erro e não deve abrir o modal com a lista de produtos devidos.


### 5 - Historico dos clientes

Na tela de Financeiro, desenvolvemos casos de testes de sucesso e insucesso para garantir que tudo esteja funcionando conforme o previsto.

**5.1 - Listagem de todos os cliente e sinalização dos devedores** 

- Objetivo: Verificar a página consegue listar todos os clientes e sinalizar quem tem compra pendente.
    
- Passos: Acessar a aba "clientes", "histórico clientes" no menu esquerdo.
    
- Critério de Sucesso: Deverá listar todos os cliente com um alerta.

- Critério de Insucesso: O sistema deve exibir mensagens de erro, não listar todos os clientes ou não sinalizar corretamente os devedores.


**5.2 - Exibir Historico** 

- Objetivo: Verificar se as informações dos clientes estão aparecendo.

- Passos: Na tela "histórico cliente", clique em "exibir histórico".

- Critério de Sucesso: Caso de sucesso, ira aparecer as informações pessoais dos clintes, tempo de cadastro e outras informações.

- Critério de Insucesso: O sistema deve exibir mensagens de erro e não deve exibir as informações pessoais dos clientes, tempo de cadastro, entre outras.


### 6 - Funcionalidades Vendas

Na tela de Vendas, desenvolvemos casos de testes de sucesso e insucesso para garantir que tudo esteja funcionando conforme o previsto.

**6.1 - Registro de vendas**

- Objetivo: Verificar se as vendas que o usuário cadastrou está sendo salvas.

- Passos: Selecionar o menu "Venda", selecionar o sub-menu "Venda", incluir o cliente correspondente, incluir os itens desejados, selecionar a forma de pagamento e clicar em "Gravar".

- Critério de Sucesso: Caso de sucesso, iria aparecer uma mensagem confirmando que a venda foi feita com sucesso.

- Critério de Insucesso: O sistema deve exibir mensagens de erro e não deve registrar a venda.


**6.2 - Seleção de Forma de Pagamento**

- Objetivo: Possibilidade de escolher alguma forma de pagamento.

- Passos: Selecionar o menu "Venda", selecionar o sub-menu "Venda" e no campo "Forma de Pagamento" ao clicar, ser apresentado as formas de pagamentos.

- Critério de Sucesso: A forma de pagamento selecionada será apresentada no campo "Forma de Pagamento".

- Critério de Insucesso: O sistema deve exibir mensagens de erro e não deve permitir a seleção da forma de pagamento.


### 7 - Funcionalidades Clientes

Na tela de Clientes, desenvolvemos casos de testes de sucesso e insucesso para garantir que tudo esteja funcionando conforme o previsto.

**7.1 - Registro de Cliente**

- Objetivo: Verificar se o cadastro de um novo cliente está sendo salvo corretamente.

- Passos: Selecionar o menu "Clientes", selecionar o sub-menu "Cliente", incluir os dados do cliente correspondente  e clicar em "Cadastrar".

- Critério de Sucesso: Aparecerá uma mensagem confirmando que o cliente foi cadastrado com sucesso.

- Critério de Insucesso: O sistema deve exibir mensagens de erro e não deve registrar o cliente.

  
### 8 - Funcionalidades Relatório Venda

Na tela de Relatório Venda, desenvolvemos casos de testes de sucesso e insucesso para garantir que tudo esteja funcionando conforme o previsto.

**8.1 - Apresentação de Relatório Venda**

- Objetivo: Verificar se as vendas diárias estão sendo apresentadas.

- Passos: Selecionar o menu "Venda", selecionar o sub-menu "Relatório Venda" e selecionar a data desejada.

- Critério de Sucesso: Deverá aparecer uma mensagem confirmando que o cliente foi cadastrado com sucesso.

- Critério de Insucesso: O sistema deve exibir mensagens de erro e não deve apresentar a lista de vendas realizadas nem o gráfico com os valores.


# Evidências de Testes de Software

### Funcionalidade de Cadastro/Login

#### Plano de teste 1.1 - Cadastro de infomações para acesso a Plataforma: 

https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e5-proj-empext-t1-d-alessandra/assets/101743181/d191e4b1-efe8-4baa-ab2f-8d047347a90c


#### Plano de teste 1.2 - Verificação de Cadastro sem Problemas e preenchimento obrigatorio de todos os campos:

https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e5-proj-empext-t1-d-alessandra/assets/101743181/8c0f3a4d-b1bf-4725-83f5-e89c9f057b03


#### Plano de teste 1.3 - Prevenir duplicidade de informações Cadastrais:

https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e5-proj-empext-t1-d-alessandra/assets/101743181/93fc0e57-7ed1-4336-ac5c-376bebab00ee


#### Plano de teste 1.4 - Restrição de Acesso a Usuários não cadastrados:

https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e5-proj-empext-t1-d-alessandra/assets/101743181/ea22ce2a-5c08-4073-8ed4-b23b9009ddff


#### Plano de teste 1.5 - Alteração de senha de acesso ao sistema:

https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e5-proj-empext-t1-d-alessandra/assets/101743181/84c42eca-7215-4358-a841-08d05294246f


#### Plano de teste 1.6 - Testes de interações com o usuário:


https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e5-proj-empext-t1-d-alessandra/assets/101743181/20d61a47-90f0-4890-8c1b-79074d1bd4dd




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


# Plano de Testes de Software (Em pares)

## Objetivo
Garantir a funcionalidade, confiabilidade e segurança das telas de:

- CRUD do Cadastro;
- CRUD do Login;
- CRUD de Reset de senha;
- CRUD do estoque;
- CRUD do Financeiro;
- CRUD de Vendas;
- CRUD de Clientes Inadiplentes.

## Ferramentas utilizadas para os testes
- Visual Studio Code (version 1.89)
- Google Chrome (version 125.0.6422.141)

## Responsáveis pelos testes:
- Matheus Ferreira Pires;
- Matheus Lemos Sampaio;
- Pedro Assis Silva de Almeida;
- Vitor Hugo Silva Ribeiro.


## Evidências de teste da tela Cadastro - Executor do teste: Matheus Sampaio

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


## Evidências de teste da tela financeiro - Executor do teste: Vitor Hugo

### 3.1 - Registro de despesas

https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e5-proj-empext-t1-d-alessandra/assets/40009988/dd4793e5-b1b5-4c69-8410-937458fcac3c

### 3.2 - Exclusão de despesas

https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e5-proj-empext-t1-d-alessandra/assets/40009988/7b1bf4fa-9da6-4b70-848b-7fb8182b9153


### 3.3 - Atualização do nome da despesa, tipo de despesa, valor da despesa, data de pagamento da despesa, data de vencimento da despesa

https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e5-proj-empext-t1-d-alessandra/assets/40009988/f800fb0e-4aee-4a3f-8cc2-145ec895b543

### 3.4 - Filtragem por data da tela Financeiro

https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e5-proj-empext-t1-d-alessandra/assets/40009988/05e0168e-6aec-458c-8355-b9a28ec2681f


## Evidências de teste da tela cliente devedor - Executor do teste: Matheus Ferreira

### 4.1 - Filtro por cliente

https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e5-proj-empext-t1-d-alessandra/assets/101369477/73fe52a1-7099-4440-976c-c8bdefc15817

### 4.2 - Baixa do cliente devedor

https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e5-proj-empext-t1-d-alessandra/assets/101369477/e09cde07-c73f-4373-b090-8163e64c64ed

### 4.3 - Extrato dos clientes devedores

https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e5-proj-empext-t1-d-alessandra/assets/101369477/eb231e18-11f0-4fe0-9179-f68f643d4bd4


## Evidências de teste da tela histórico do cliente - Executor do teste: Matheus Ferreira

### 5.1 - Listagem de todos os cliente e sinalização dos devedores

https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e5-proj-empext-t1-d-alessandra/assets/101369477/5e696017-c67a-46f4-b769-b6045addb262

**5.2 - Exibir Historico

https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e5-proj-empext-t1-d-alessandra/assets/101369477/17664a12-0ea4-4c23-96c8-75fffc8773db

## Evidências de teste da tela vendas - Executor do teste: Pedro Assis

### 6.1 - Teste de funcionalidades e inclusão de vendas

https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e5-proj-empext-t1-d-alessandra/assets/101743181/156ffe34-bbde-416c-9dd8-429f3551b50f

obs.: Campo de nome cliente será ajustado 
