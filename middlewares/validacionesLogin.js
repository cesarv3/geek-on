const {check} = require('express-validator');

// const { validationResult } = require('express-validator');

module.exports = [

  // check('name')      

    //   .notEmpty()

      // .withMessage('Ingresar un nombre'),
       //check('name')

       //.isLength({max: 2})

       //.withMessage('El nombre debe tener mas de dos caracteres'),

   check('email')

       .notEmpty()

       .isEmail()

       .withMessage('Ingresar un email válido'),

   check('password')
    .notEmpty()
    

       .isLength({min: 5})

       .withMessage('La contrasenia deberia tener un minimo de 5 caracteres')

]