//Configuración del servidor de EXPRESS

const express = require('express');

const bodyParser = require('body-parser');

//instanciar bibliotecas
const app = express();

//settings




//middleware
app.use(bodyParser.urlencoded({extended:false}));

module.export = app;