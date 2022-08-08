const express = require('express');
const morgan = require('morgan');
const path = require('path'); //une directorios

const app = express();

//importando rutas
const customerRoutes = require('./routes/customer');

//SETTINGS
app.set('port', process.env.PORT || 3000);

//MIDDLEWARES funciones que se ejecutan antes de llegar a las rutas
app.use(express.json()); //datos json
app.use(express.urlencoded({extended: false})); //datos a través de formularios

//ROUTES
app.use(require('./routes/customer'));

//STATIC FILES
app.use(express.static(path.join(__dirname, 'public')));

app.listen(app.get('port'), ()=>{
    console.log('server on port 3000');
});