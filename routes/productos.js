const express = require('express');
const router = express.Router();
const productosController = require('../controllers/productosController');
const upload = require("../utils/multer");
const {body, validationResult} = require('express-validator');
//Ruta para buscar con query string
router.get('/search', productosController.search);
//Listado de productos
router.get('/', productosController.list);

//Ruta que muestra el detalle de un producto
router.get('/:id',productosController.show);

//Ruta para crear un producto
router.post('/crear', upload.single('image'), 
body('nombre',"No puede estar vacio").notEmpty(),
body('nombre',"Nombre debe ser mayor a 5 caracteres").isLength({ min: 5 }),
body('price',"El precio no puede estar vacio").notEmpty(),
body('price',"Debe ser un numero").isNumeric(),
body('discount',"El descuento no puede estar vacio").notEmpty(),
body('discount',"El descuento puede estar entre 5% y 25%").isNumeric({min:5, max:25}),
body('category',"La categoria no puede estar vacia").notEmpty(),
body('estatus',"El estatus no puede estar vacio").notEmpty(),
body('description',"La descripcion no puede estar vacia").notEmpty(),productosController.store);

//Ruta para actualizar un producto
router.put('/actualizar/:id',upload.single('image'),
body('nombre',"No puede estar vacio").notEmpty(),
body('nombre',"Nombre debe ser mayor a 5 caracteres").isLength({ min: 5 }),
body('price',"El precio no puede estar vacio").notEmpty(),
body('price',"Debe ser un numero").isNumeric(),
body('discount',"El descuento no puede estar vacio").notEmpty(),
body('discount',"El descuento puede estar entre 5% y 25%").isNumeric({min:5, max:25}),
body('category',"La categoria no puede estar vacia").notEmpty(),
body('estatus',"El estatus no puede estar vacio").notEmpty(),
body('description',"La descripcion no puede estar vacia").notEmpty(), productosController.update);


//Ruta para eliminar un producto
router.delete('/:id', productosController.delete);

//Ruta para obtener los productos por una categoria
router.get('/categoria/:id',productosController.porCategoria);

module.exports = router;
