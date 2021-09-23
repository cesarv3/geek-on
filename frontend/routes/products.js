// Configuracion express
const { response } = require('express');
const express = require('express');
const router = express.Router();

router.get('/:id',(req,res) => {
    res.render('productDetail.ejs');
})

router.get('/categoria/:id',(req,res) => {
    res.render('productsCategoria.ejs');
})





module.exports = router;