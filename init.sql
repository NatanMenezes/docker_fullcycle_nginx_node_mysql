CREATE DATABASE IF NOT EXISTS people;
USE people;
CREATE TABLE people (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(255) NOT NULL
);