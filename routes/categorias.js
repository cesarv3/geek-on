const express = require('express');
const router = express.Router();
const categoriasController = require('../controllers/categoriasController');
//Ruta para buscar con query string
router.get('/search', categoriasController.search);
//Listado de productos
router.get('/', categoriasController.list);

//Ruta que muestra el detalle de un producto
router.get('/:id',categoriasController.show);

//Ruta para crear un producto
router.post('/', categoriasController.store);

//Ruta para actualizar un producto
router.put('/:id', categoriasController.update);


//Ruta para eliminar un producto
router.delete('/:id', categoriasController.delete);

module.exports = router;
