const db = require('../database/models');
const OP = db.Sequelize.Op;

const controlador= {
    list: (req,res) => {
        db.Productos.findAll()
        .then((productos) => {
            return res.status(200).json({
                total: productos.length,
                data: productos,
                status: 200
            })
        })        
    },
    show: (req,res) => {
        db.Productos.findByPk(req.params.id)
        .then(producto => {
            return res.status(200).json({
                data: producto,
                status: 200
            })
        })
    },
    store: (req,res) => {                
        //return res.json(req.body);
        db.Productos.create(req.body)
        .then(producto => {
            return res.status(200).json({
                data: producto,
                status: 200
            })
        })
    },
    delete: (req,res) => {
        db.Productos.destroy({
            where: {
                id: req.params.id
            }
        })
        .then(response => {
            return res.json(response)
        })
    },
    search: (req,res) => {
        db.Productos.findAll({
            where: {
                nombre: { [OP.like]: '%' + req.query.keyword + '%'}
            }
        })
        .then(productos => {
            if(productos.length > 0){
                return res.status(200).json(productos)
            } else {
                return res.status(200).json("No encontramos productos.")
            }
            
        })
    },
    update: (req,res) => {
        db.Productos.update(
            {nombre: req.body.nombre,
            categoria_id: req.body.categoria_id,
            price: req.body.price,
            estatus: req.body.estatus,
            descripcion: req.body.descripcion},            
            {
            where: {
                id: req.params.id
            }
        })
        .then(response => {
            return res.status(200).json({
                "estatus": "Ok",
                response
            });
        })
    }
};

module.exports = controlador;