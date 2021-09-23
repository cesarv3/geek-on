// Configuracion express
const { response } = require('express');
const express = require('express');
const router = express.Router();

router.get('/login',(req,res) => {
    res.render('login.ejs');
})

router.post('/login',(req,res) => {
    res.render('login.ejs');
})

router.get('/registro',(req,res) => {
    res.render('register.ejs');
})

router.post('/registro',(req,res) => {
    res.render('register.ejs');
})






module.exports = router;