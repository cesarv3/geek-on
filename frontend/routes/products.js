// Configuracion express
const { response } = require('express');
const express = require('express');
const router = express.Router();

router.get('/:id',(req,res) => {
    res.render('productDetail.ejs');
})




module.exports = router;