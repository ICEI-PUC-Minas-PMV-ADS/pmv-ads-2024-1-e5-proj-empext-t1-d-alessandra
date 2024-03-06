CREATE TABLE IF NOT EXISTS estoque(
  cod_produto int NOT NULL AUTO_INCREMENT,
  cor varchar(20) DEFAULT NULL,
  data_cadastro datetime(6) NOT NULL,
  marca varchar(10) DEFAULT NULL,
  nome_porduto varchar(30) NOT NULL,
  quantidade_item int NOT NULL,
  tamanho varchar(5) NOT NULL,
  tipo varchar(20) DEFAULT NULL,
  valor_comprado float NOT NULL,
  valor_venda float NOT NULL,
  PRIMARY KEY (cod_produto)



)