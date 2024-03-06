CREATE TABLE IF NOT EXISTS vendas (
    cod_venda INT PRIMARY KEY,
    dt_venda DATE,
    cod_cliente INT,
    forma_pagto TEXT,
    vl_total DOUBLE
);