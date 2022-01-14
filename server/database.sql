CREATE DATABASE cadastro_email;

CREATE TABLE cadastro(
    id SERIAL,
    email VARCHAR(255) PRIMARY KEY,
    nome VARCHAR(255),
    sobrenome VARCHAR(255),
    cpf BIGINT
);

