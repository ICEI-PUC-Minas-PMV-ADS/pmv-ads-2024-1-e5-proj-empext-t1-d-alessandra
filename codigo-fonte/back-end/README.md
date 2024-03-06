# Instruções de utilização

## Flyway

Nossas alterações de banco de dados, são controladas pelo flyway.

Para ver qual a versão da última migração gerada, basta acessar o seguinte caminho:

dalessandra/src/main/resources/db/migration

Nesta diretório será apresentado os arquivos sql das migrações.

### Gerando versão de migration

Para gerar uma nova migration, temos algums regras para não ocorrer nenhum problema. Segue as premissas abaixo:

 1- Todo arquivo deve possuir um prefixo. Neste caso por padrão é o "V";
 2 - Após o prefixo, deve inserir a numeração da versão em ordem, começando com 1;
 3 - Logo após a versão, é necessário inserir dois underscore "__";
 4 - Finalizando, deve ser inserido a descrição desta migration.

 No final, o nome do arquivo ficará desta maneira:  V1__create_table.mysql

 Após estes passos, basta rodar sua aplicação novamente e assim as migrations serão rodadas.

 OBS: Caso ocorra algum erro ao subir sua migration, será apresentado no console o erro.

 ### Em caso de erro na migration

Caso ocorra algum erro ao subir a migration, será necessário acessar o Banco de Dados e ir até a tabela flyway_schema_history. Esta tabela registra os históricos de migrations e caso a coluna sucess estiver como 0, significa que esta migration não foi gerada.

Neste caso, basta selecionar esta linha no banco e excluí-la, após isto, ajuste o SQL da sua migration o diretório das migration e realizar o ajuste. Após isto, basta rodar sua aplicação novamente e caso esteja tudo certo, a coluna do banco mencionado estará com o valor 1 e sua aplicação irá inicializar normalmente.
