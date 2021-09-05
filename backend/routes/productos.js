const express = require('express');
const router = express.Router();
const productosController = require('../controllers/productosController');
//Ruta para buscar con query string
router.get('/search', productosController.search);
//Listado de productos
router.get('/', productosController.list);

//Ruta que muestra el detalle de un producto
router.get('/:id',productosController.show);

//Ruta para crear un producto
router.post('/', productosController.store);

//Ruta para actualizar un producto
router.put('/:id', productosController.update);


//Ruta para eliminar un producto
router.delete('/:id', productosController.delete);

module.exports = router;
