CREATE TABLE IF NOT EXISTS financeiro(
    id_despesa int PRIMARY KEY,
    tipo_despesa varchar NOT NULL,
    nome_despesa varchar NOT NULL,
    valor_despesa float NOT NULL,
    data_despesa DATE NOT NULL



    );