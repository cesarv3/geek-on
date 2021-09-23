const db = require('../database/models');
const OP = db.Sequelize.Op;

const controlador= {
    list: (req,res) => {
        db.Categorias.findAll()
        .then(categorias => {
            return res.status(200).json({
                total: categorias.length,
                data: categorias,
                status: 200
            })
        })
    },
    show: (req,res) => {
        db.Categorias.findByPk(req.params.id)
        .then(categoria => {
            return res.status(200).json({
                data: categoria,
                status: 200
            })
        })
    },
    store: (req,res) => {
        db.Categorias.create(req.body)
        .then(categoria => {
            return res.status(200).json({
                data: categoria,
                status: 200
            })
        })
    },
    delete: (req,res) => {
        db.Categorias.destroy({
            where: {
                id: req.params.id
            }
        })
        .then(response => {
            return res.json(response)
        })
    },
    search: (req,res) => {
        db.Categorias.findAll({
            where: {
                nombre: {[OP.like]: '%' + req.query.keyword + '%'}
            }
        })
        .then(categorias => {
            if(categorias.length > 0){
                return res.status(200).json(categorias)
            } else {
                return res.status(200).json("No encontramos categorias con ese nombre");
            }
        })
    },
    update: (req,res) => {
        db.Categorias.update(
            {nombre: req.body.nombre            
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
    }
};

module.exports = controlador;
