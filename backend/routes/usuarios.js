const express = require('express');
const router = express.Router();
const usuariosController = require('../controllers/usuariosController');

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

module.exports = router;
