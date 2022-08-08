//objeto controler
const { Pool } = require('pg');

const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    password: 'postgresql',
    database: 'landingfranz',
    port: '5432'
})

const controller = {};

//Obtener datos de la BD
const getUsers = async (req, res) => {
    const response = await pool.query('SELECT * FROM customers');
    res.status(200).json(response.rows);
};

//Mostrar datos por id del cliente
const getUserById = async (req, res) => {
    const id = req.params.id;
    const response = await pool.query('SELECT * FROM customers WHERE idcliente = $1', [id])
    res.json(response.rows);
}
//Enviar datos a la BD
const createUsers = async (req,res) => {
    const { apellidos, nombres, dni,celular, email } = req.body;

    const response = await pool.query('INSERT INTO customers (apellidos, nombres, dni, celular, email) VALUES ($1, $2, $3, $4, $5)', [
        apellidos, 
        nombres, 
        dni,
        celular, 
        email
    ]);
    console.log(response);
    // res.json({
    //     message: 'User Added Succesfully',
    //     body: {
    //         user: { apellidos, nombres, dni,celular, email }
    //     }
    // });
    res.send('1');
};

const updateUser = async (req, res) =>{
    const id = req.params.id;
    const { apellidos, nombres, dni,celular, email } = req.body;
    const response = await pool.query('UPDATE customers SET apellidos = $1, nombres = $2, dni = $3,celular = $4, email = $5 WHERE idcliente = $6', [
        apellidos, 
        nombres, 
        dni,
        celular, 
        email, 
        id
    ])
    console.log(response);
    res.json('User Updated successfully');
}

const deleteUser = async(req, res) =>{
    const id = req.params.id;
    const response = await pool.query('DELETE FROM customers WHERE idcliente = $1', [id]);
    console.log(response);
    res.send(`User ${id} deleted successfuly`);
};


module.exports = {
    getUsers,
    createUsers,
    getUserById,
    updateUser,
    deleteUser
}