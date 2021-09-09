//Requerimos express, quien se encarga de ejecutar el servidor web
const express = require('express');
const cors = require("cors");
var bodyParser = require('body-parser')
const app = express();
app.use(bodyParser.json())
//Requerimos las rutas
const rutasProductos = require('./routes/productos');
const rutasUsuarios = require('./routes/usuarios');
app.use(cors());
app.use('/productos', rutasProductos);
app.use('/usuarios',rutasUsuarios);
app.listen(3000, () => {
    console.log('Corriendo en el puerto 3000')
});

