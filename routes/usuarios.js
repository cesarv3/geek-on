const express = require('express');
const router = express.Router();
const usuariosController = require('../controllers/usuariosController');
const upload = require("../utils/multer");
const {body} = require('express-validator');


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
router.post('/login',
//body('email','Correo no puede estar vacio').notEmpty(),
//body('email',"Correo invalido").isEmail(),
//body('password',"Password no puede estar vacio").notEmpty(),
usuariosController.login);

router.post('/registro', upload.single('avatar'),
//body('first_name', "Nombre no puede estar vacio").notEmpty(),
//body('first_name',"Nombre debe ser minimo 2 caracteres").isLength({ min: 2 }),
//body('last_name',"Apelido no puede estar vacio"),
//body('first_name',"Apellido debe ser minimo 2 caracteres").isLength({ min: 2 }),
//body('email',"Email no puede estar vacio").notEmpty(),
//body('email',"Email invalido").isEmail(),
//body('password','Password no puede estar vacio').notEmpty(),
//body('password','Password debe contener al menos 6 caracteres').isLength({min: 6}),
//body('password',"Password invalido").isStrongPassword(),
usuariosController.registro);

module.exports = router;
