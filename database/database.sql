CREATE DATABASE landingFranz;

CREATE TABLE customers(
    idCliente SERIAL PRIMARY KEY,
    apellidos VARCHAR(40),
    nombres VARCHAR(40),
    dni VARCHAR(15),
    celular INT(15),
    email VARCHAR(40)
)

INSERT INTO customers (apellidos, nombres, dni, celular, email) VALUES
    ('Barrientos Flores', 'Sharon', '75698423', 965478213, 'sharon@gmail.com'),
    ('Martinez Mesa', 'Luz', '65698423', 912354786, 'luz@gmail.com');

