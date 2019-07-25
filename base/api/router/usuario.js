'use strict';

const express = require('express'),
    router = express.Router(),
    Usuario = require('../models/usuario.model');

router.post('/registrar_usuario', function(req,res){
    
    let body = req.body;

    let nuevo_usuario = new Usuario ({
        //avatar: body.avatar
        identificacion: body.identificacion,
        primerNombre: body.primerNombre,
        segundoNombre: body.segundoNombre,
        primerApellido: body.primerApellido,
        segundoApellido: body.segundoApellido,
        nombreUsuario: body.nombreUsuario,
        sexo: body.sexo, 
        correo: body.correo,
        provincia: body.provincia,
        canton: body.canton,
        //distrito: body.distrito,
        direccion: body.direccion
    });

    nuevo_usuario.save(
        function(err, usuarioDB) {

            if(err){
                
                return res.status(400).json({
                    success: false,
                    msj: 'El usuario no se pudo guardad',
                    err

                });


            }else {
                res.json({
                    success: true,
                    msj: 'El usuario se guardó con éxito'                    
                });
            }
        }
    )
});

module.exports = router;