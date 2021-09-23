const express = require('express');
const cloudinary = require("../utils/cloudinary");
const upload = require("../utils/multer");

const router = express.Router();
const usuariosController = require('../controllers/usuariosController');
const validaciones = require('../middlewares/validacionesLogin');
//Ruta para buscar con query string
router.get('search', usuariosController.search);

//Listado de usuarios
router.get('/', usuariosController.list);

//Ruta que muestra el detalle de un usuario
router.get('/:id', usuariosController.show);

//Ruta para crear un usuario
router.post('/', usuariosController.store);

//Ruta para actualizar un usuario
router.put('/:id', usuariosController.update);

//Ruta para eliminar un usuario
router.delete('/:id', usuariosController.delete);

//Ruta para el Login
router.get('/login');

//console.log(validaciones);
router.post('/login', validaciones,usuariosController.login);

router.post('/registro', upload.single('avatar'),usuariosController.registro);

module.exports = router;
