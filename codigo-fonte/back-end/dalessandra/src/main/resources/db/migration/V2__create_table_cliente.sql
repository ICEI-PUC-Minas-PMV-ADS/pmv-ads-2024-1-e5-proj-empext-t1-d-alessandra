CREATE TABLE IF NOT EXISTS cliente (
    cod_cliente INT PRIMARY KEY,
    nome_cliente TEXT,
    email TEXT,
    telefone TEXT,
    cpf_cnpj TEXT,
    rua TEXT,
    bairro TEXT,
    cidade TEXT,
    complemento TEXT
);