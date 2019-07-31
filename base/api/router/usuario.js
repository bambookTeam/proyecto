'use strict';

//const nodeMailer = require('./nodemailer');
const express = require('express'),
  router = express.Router(),
  Usuario = require('../models/usuario.model');

  router.param("_id", function (req, res, next, _id) {
    req.body._id = _id;
    next();
});
/*const transporter = nodeMailer.createTransport({
    service : 'gmail',
    auth : {
        user : 'bambooks.team@gmail.com',
        pass : '#bambook123'
    }


}); */

router.post('/registrar_usuario', function(req,res){

    let body = req.body;

    let nuevo_usuario = new Usuario ({
        primerNombre: body.primerNombre,
        segundoNombre: body.segundoNombre,
        primerApellido: body.primerApellido,
        segundoApellido: body.segundoApellido,
        sexo: body.sexo,
        identificacion: body.identificacion,
        correo: body.correo,
        //distrito: body.distrito,
        direccion: body.direccion,
        nombreUsuario: body.nombreUsuario,
        contrasena: body.contrasena
       // avatar: body.avatar

    });

    nuevo_usuario.save (function (err, usuarioDB) {

        if(err){
            return res.status(400).json(
                {
                    success: false,
                    msj: 'El usuario no se pudo guardar',
                    err
                }  );
        } else {
            res.json(
                {
                    success: true,
                    msj: 'El usuario se guardó con éxito'
                }
            );
        }
    });

});

//iniciar-sesion
router.post('/validar_credenciales', function (req, res) {
    Usuario.findOne({ identificacion: req.body.identificacion }).then(
        function (usuario) {
            if (usuario) {
                res.json({
                    success:true,
                    usuario:usuario
                })
            } else {
                res.json({
                    success:false,
                    usuario:usuario
                })
            }
        }
    )
})

router.get('/listar-usuarios', function (req, res) {
    Usuario.find(function (err, usuariosBD) {
        if (err) {
            return res.status(400).json({
                success: false,
                msj: 'No se pueden listar los usuarios',
                err
            });
        } else {
            return res.json({
                success: true,
                lista_usuarios: usuariosBD
            });
        }
    })
});

router.get('/buscar-usuario-id/:_id', function(req, res) {
    Usuario.findById(req.body._id, function(err, usuarioBD) {
        if (err) {
            return res.status(400).json({
                success: false,
                msj: 'No se encontró ningún usuario con ese _id',
                err
            });
        } else {
            return res.json({
                success: true,
                usuario: usuarioBD
            });
        }
    })
});

module.exports = router;
