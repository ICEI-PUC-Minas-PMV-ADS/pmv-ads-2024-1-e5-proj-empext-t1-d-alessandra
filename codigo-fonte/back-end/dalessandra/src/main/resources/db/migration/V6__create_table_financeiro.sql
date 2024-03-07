CREATE TABLE IF NOT EXISTS financeiro(
    id_despesa int PRIMARY KEY,
    tipo_despesa varchar(50) NOT NULL,
    nome_despesa varchar(50) NOT NULL,
    valor_despesa float NOT NULL,
    data_despesa DATE NOT NULL
);