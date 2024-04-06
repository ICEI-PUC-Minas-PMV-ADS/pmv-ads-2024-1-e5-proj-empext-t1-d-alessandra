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


### Funcionalidades Estoque

Para a tela de Estoque, desenvolvemos quatro tipos de testes para garantir que tudo esteja funcionando conforme o previsto.

01.0 - Registro de itens no estoque 

  - Objetivo: Verificar se os itens que o usuário tenta cadastra estao sendo salvos de maneira correta.
  - Passos: Aperta o botão novo registro preencher todos os dados e clicar em adicionar.
  - Criterio: Caso de sucesso, iria aparecer uma mensagem confirmando o cadastro e ele ira aparecer na lista.
     
01.1 - Exclusão de registro 
 
  - Objetivo: Verificar se o item que o usuário deseja apagar esta sendo deletado de maneira correta.
  - Passos: Clicar na lixeira do item que deseja deletar e depois confimar.
  - Criterio: Caso de sucesso, iria aparecer uma mensagem dizendo que a operção foi executada com sucesso e o intem não vai mais aparecer na lista.
     
01.2 - Atualização de quantidade de produto em estoque 

  - Objetivo: Verificar se o usuário consegue adicionar mais quantidade de proddutos a um item.
 - Passos: Acessar os tres pontinho na frente do item que deseja, acessar a opção atualizar quantidade, preencher e salvar.
 - Criterio: Caso de sucesso,ira aparecer uma mensagem de confirmação e a quantidade na lista será atualizada.

01.3 - Atualização de valor de venda

   - Objetivo: Verificar se o usuário consegue atlerar o preco de venda do produto em especifico.
   - Passos: Acessar os três pontinhos do lado do intem que deseja e clicar na opção alterar o valor de venda.
   - Criterio: Caso de sucesso, ira aparecer uma mensagem indicando que a opecao foi realizada com sucesso e na lista de estoque seu valor será atualizado.
       
01.4 - Atualização de valor comprado 

   - Objetivo: Verificar se o usuário consegue editar o valor que ele comprou o item
   - Passos: Acessar os três pontinhos, ir na opção atualizar valor de compra, digitar o novo valor e mandar salvar 
   - Criterio: Caso de sucesso se da quando aparece um alerta confirmando a alteração e o valor na lista estiver mudado


### Funcionalidades Financeiro

Na tela de Financeiro, foi desenvolvido três testes para garantir que tudo esteja funcionando conforme o previsto.

01.0 - Registro de despesas 

  - Objetivo: Verificar se as despesas cadastradas pelo usuário estão sendo salvas de maneira correta.
  - Passos: Seleciona o botão "novo registro" preencher todos os dados e clica em "adicionar".
  - Criterio: Caso de sucesso, iria aparecer uma mensagem confirmando o registro e ele irá aparecer na lista.
     
01.1 - Exclusão de despesas 
 
  - Objetivo: Verificar se o item que o usuário deseja apagar esta sendo deletado de maneira correta.
  - Passos: Clicar na lixeira do item que deseja deletar e depois confimar.
  - Criterio: Caso de sucesso, irá aparecer uma mensagem dizendo que a operação foi executada com sucesso e o item não irá mais aparecer na lista.
     
01.2 - Atualização de dados da despesa 

  - Objetivo: Verificar se o usuário consegue editar os dados da despesa.
  - Passos: Acessar os tres pontos na frente do item que deseja, acessar a opção para editar o campo que deseja, preencher e salvar.
  - Criterio: Caso de sucesso,irá aparecer uma mensagem de confirmação e o campo na lista será atualizado.


# Evidências de Testes de Software

### Funcionalidade de Cadastro/Login

#### Plano de teste 1.1 - Autenticação de Cadastro de E-mail na Plataforma: 

https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e5-proj-empext-t1-d-alessandra/assets/101743181/4e69efb7-568e-40d6-900b-852adadcac92


#### Plano de teste 1.2 - Verificação de Cadastro sem Problemas e preenchimento obrigatorio de todos os campos:

https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e5-proj-empext-t1-d-alessandra/assets/101743181/89f9dd74-30b8-49c7-bd6c-48a06b8cea6e


#### Plano de teste 1.3 - Restrição de Acesso a Usuários Cadastrados:

⚠️⚠️⚠️ATENÇÃO: ESSA FUNCIONALIDADE ESTÁ SENDO DESENVOLVIDA PELA EQUIPE, EM POUCOS DIAS ESTARÁ DISPONIVEL. ⚠️⚠️⚠️


#### Plano de teste 1.4 - Testes de interações com o usuário:

https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e5-proj-empext-t1-d-alessandra/assets/101743181/69623a11-7853-4b4a-97a7-536ebe7763df



### Funcionalidade de estoque

#### Plano de teste 01.0 - Registro de itens no estoque 

https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e5-proj-empext-t1-d-alessandra/assets/40009988/3336eb2b-9409-4766-a028-d1958821aa48

#### Plano de teste 01.1 - Exclusão de registro 

https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e5-proj-empext-t1-d-alessandra/assets/40009988/1e039393-229d-4700-9c86-cab33b459cd4

#### Plano de teste 01.2 - Atualização de quantidade de produto em estoque 

https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e5-proj-empext-t1-d-alessandra/assets/40009988/554fb268-82c1-47cb-a319-16b19c0c8b22

#### Plano de teste 01.3 - Atualização de valor de venda


https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e5-proj-empext-t1-d-alessandra/assets/40009988/1ddb7c5d-bb83-451c-ab3d-10c79b3c5889

#### Plano de teste 01.4 - Atualização de valor comprado 

https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e5-proj-empext-t1-d-alessandra/assets/40009988/238a5ba7-37b8-4fd8-b898-4c080793f375



### Funcionalidade de estoque

#### Plano de teste 01.0 - Registro de despesas

https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e5-proj-empext-t1-d-alessandra/assets/101369477/27317d02-96fc-4f95-870a-3218399aeb02

#### Plano de teste 01.0 - Exclusão de despesas

https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2024-1-e5-proj-empext-t1-d-alessandra/assets/101369477/797f2f6c-be4c-47f6-af80-5f4a173bdddc

