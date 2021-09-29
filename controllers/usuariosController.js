const db = require('../database/models');
const OP = db.Sequelize.Op;
const {validationResult} = require('express-validator');

const controlador= {
    list: (req,res) => {
        db.Usuarios.findAll()
        .then(usuarios => {
            return res.status(200).json({
                total: usuarios.length,
                data: usuarios,
                status: 200
            })
        })
    },
    show: (req,res) => {
        db.Usuarios.findByPk(req.params.id)
        .then(usuario => {
            return res.status(200).json({
                data: usuario,
                status: 200
            })
        })
    },
    store: (req,res) => {
        db.Usuarios.create(req.body)
        .then(usuario => {
            return res.status(200).json({
                data: usuario,
                status: 200
            })
        })
    },
    delete: (req,res) => {
        db.Usuarios.destroy({
            where: {
                id: req.params.id
            }
        })
        .then(response => {
            return res.json(response)
        })
    },
    search: (req,res) => {
        db.Usuarios.findAll({
            where: {
                nombre: {[OP.like]: '%' + req.query.keyword + '%'}
            }
        })
        .then(usuarios => {
            if(usuarios.length > 0){
                return res.status(200).json(usuarios)
            } else {
                return res.status(200).json("No encontramos usuarios con ese nombre");
            }
        })
    },
    update: (req,res) => {
        db.Usuarios.update(
            {nombre: req.body.nombre,
            aPaterno: req.body.aPaterno,
            aMaterno: req.body.aMaterno,
            email: req.body.email,
            password: req.body.password,
            avatar: req.body.avatar,
            rol_id: req.body.rol_id
            },
            {
                where: {
                    id: req.params.id
                }
            })
            .then(response => {
                return res.status(200).json({
                    "estatus": "OK",
                    response
                });
            })
    },
    login: (req,res) => {
        let resultadoValidacion = validationResult(req);
        
        if(resultadoValidacion.errors.length < 0){
            db.Usuarios.findAll({
                where: {
                    email: req.body.email,
                    password: req.body.password
                }
            })
            .then(response => {
                return res.status(200).json({
                    "estatus": "OK",
                    response
                })     
            })

        } else {
            console.log(resultadoValidacion.errors.length);
            let obj = {
                "estatus": "OK",
                "errores": resultadoValidacion.errors
            }
            return {
                return :res.status(200).json(obj)
            }
        }
        
    },
    registro: (req,res) => {
        console.log("Body en el backend");
        console.log(req.body);
        console.log(req.file);
    }
};

module.exports = controlador;
