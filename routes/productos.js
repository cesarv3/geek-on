const express = require('express');
const router = express.Router();
const productosController = require('../controllers/productosController');
const upload = require("../utils/multer");
//Ruta para buscar con query string
router.get('/search', productosController.search);
//Listado de productos
router.get('/', productosController.list);

//Ruta que muestra el detalle de un producto
router.get('/:id',productosController.show);

//Ruta para crear un producto
router.post('/crear', upload.single('image'),productosController.store);

//Ruta para actualizar un producto
router.put('/actualizar/:id',upload.single('image'), productosController.update);


//Ruta para eliminar un producto
router.delete('/:id', productosController.delete);

//Ruta para obtener los productos por una categoria
router.get('/categoria/:id',productosController.porCategoria);

module.exports = router;
