const { check } = require('express-validator');

module.exports = [
    check('email')
    .not()
    .isEmpty()
    .withMessage('Ingresar un email válido'),
    check('email')
    .isEmail()
    .withMessage('Ingresar un email válido')
]

