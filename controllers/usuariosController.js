const db = require("../database/models");
const OP = db.Sequelize.Op;
const cloudinary = require("../utils/cloudinary");
const { validationResult } = require("express-validator");
const bcrypt = require("bcrypt");
const saltRounds = 10;

const controlador = {
  list: (req, res) => {
    db.Usuarios.findAll().then((usuarios) => {
        usuarios.forEach(element => {
            element.dataValues.detail = "https://geek-on.herokuapp.com/usuarios/"+element.id
            element.dataValues.password = "";
            element.dataValues.rol_id = "";
            console.log(element.dataValues);
        });
      return res.status(200).json({
        total: usuarios.length,
        data: usuarios,
        status: 200,
      });
    });
  },
  show: (req, res) => {
    db.Usuarios.findByPk(req.params.id).then((usuario) => {
        usuario.password = "";
        usuario.rol_id = "";
      return res.status(200).json({
        data: usuario,
        status: 200,
      });
    });
  },
  store: (req, res) => {
    db.Usuarios.create(req.body).then((usuario) => {
      return res.status(200).json({
        data: usuario,
        status: 200,
      });
    });
  },
  delete: (req, res) => {
    db.Usuarios.destroy({
      where: {
        id: req.params.id,
      },
    }).then((response) => {
      return res.json(response);
    });
  },
  search: (req, res) => {
    db.Usuarios.findAll({
      where: {
        nombre: { [OP.like]: "%" + req.query.keyword + "%" },
      },
    }).then((usuarios) => {
      if (usuarios.length > 0) {
        return res.status(200).json(usuarios);
      } else {
        return res.status(200).json("No encontramos usuarios con ese nombre");
      }
    });
  },
  update: (req, res) => {
    db.Usuarios.update(
      {
        nombre: req.body.nombre,
        aPaterno: req.body.aPaterno,
        aMaterno: req.body.aMaterno,
        email: req.body.email,
        password: req.body.password,
        avatar: req.body.avatar,
        rol_id: req.body.rol_id,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    ).then((response) => {
      return res.status(200).json({
        estatus: "OK",
        response,
      });
    });
  },
  login: (req, res) => {
    console.log(req.body);
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    } else {      
      db.Usuarios.findOne({
          where: {
              email: req.body.email              
          }
      })
      .then(response => {        
          let status ="";
          console.log(req.body.password);
          console.log(response);
          if(bcrypt.compareSync(req.body.password,response.password)){
            status = "validas"
          } else {
              status = "invalidas"
          }
          console.log();
          return res.status(200).json({
              "status": status,
              response
          })
      })
    }

    // let resultadoValidacion = validationResult(req);

    // if(resultadoValidacion.errors.length < 0){
    //     db.Usuarios.findAll({
    //         where: {
    //             email: req.body.email,
    //             password: req.body.password
    //         }
    //     })
    //     .then(response => {
    //         return res.status(200).json({
    //             "estatus": "OK",
    //             response
    //         })
    //     })

    // } else {
    //     console.log(resultadoValidacion.errors.length);
    //     let obj = {
    //         "estatus": "OK",
    //         "errores": resultadoValidacion.errors
    //     }
    //     return {
    //         return :res.status(200).json(obj)
    //     }
    // }
  },
  registro: (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const usuario = JSON.parse(req.body.data);    
    //const salt = bcrypt.genSaltSync(saltRounds);     
    //const hash = bcrypt.hashSync(usuario.password, salt);
    //usuario.password = hash;     
      cloudinary.uploader
        .upload(req.file.path, {
          resource_type: "image",
        })
        .then((resp_cloudinary) => {
          //usuario.nombre = "Cesar";
          usuario.avatar = resp_cloudinary.secure_url;
          db.Usuarios.create(usuario)
          .then((user) => {
            return res.status(200).json({
              data: user,
              status: 200,
            });
          })
        })
        
        .catch((error) => {
          return error;
        });
    
  },
};

module.exports = controlador;
