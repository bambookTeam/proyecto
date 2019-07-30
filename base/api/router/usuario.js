'use strict';

//const nodeMailer = require('./nodemailer');
const express = require('express'),
  router = express.Router(),
  Usuario = require('../models/usuario.model');


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
        nombreUsuario: body.nombreUsuario
       // avatar: body.avatar

    });

    nuevo_usuario.save (function (err, usuarioDB) {

        if(err){
            return res.status(400).json(
                {
                    success: false,
                    msj: 'El usuario no se pudo guardar',
                    err
                }
            );
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
module.exports = router;

