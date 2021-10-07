const db = require('../database/models');
const OP = db.Sequelize.Op;
const cloudinary = require('../utils/cloudinary');
const {validationResult} = require('express-validator')
let validaciones = [];


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
    store: (req,res,next) => {                
        //return res.json(req.body);
          //const uploadedResponse = await cloudinary.uploader.upload
          const errors = validationResult(req);
          if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
          }
        const imagen  = req.file;
        const item = JSON.parse(req.body.data);
        //console.log(req.body);        
        //console.log(req.file);
        cloudinary.uploader
        .upload(req.file.path,{
            resource_type: "image",
        })
        .then(resp_cloudinary => {            
            item.imagen = resp_cloudinary.secure_url;                     
            db.Productos.create(item)
            .then(producto => {                
             return res.status(200).json({
                 data: producto,
                 status: 200
             })
         })            
        })        
        .catch( error => {
            return error;
        })
        
        
         
    },
    delete: (req,res) => {
        console.log(req.params.id);
        console.log(req.body[0]);
        cloudinary.uploader.destroy(req.body[0])
        .then(resp_cloudinary => {
            db.Productos.destroy({
            where: {
                id: req.params.id
            }
        })
        .then(response => {
            return res.json(response)
        })
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
        const item = JSON.parse(req.body.data);
        const img = req.file.path;
        console.log(item.image_old);
        const nombreImg = item.image_old.substring(item.image_old.lastIndexOf('/') + 1);
        let publicId = nombreImg.split('.');
        cloudinary.uploader.destroy(publicId[0],function(result) { console.log(result) });
        cloudinary.uploader.upload(img,{
            resource_type: "image",
        })
        .then(resp_cloudinary => {
            item.imagen = resp_cloudinary.secure_url;
            db.Productos.update(
                item,            
                {
                where: {
                    id: req.params.id
                }
            })
            .then(response => {
                return res.status(200).json({
                    "data": response,
                    "estatus": 200,                    
                });
            })
        })
       
    },
    porCategoria: (req,res) => {
        db.Productos.findAll({
            where: {
                categoria_id: req.params.id
            },
            include: [{association: "categorias"}]
        })
        .then(productos => res.status(200).json({
            total: productos.length,
            data: productos,
            status: 200
        }))
    }
};

module.exports = controlador;