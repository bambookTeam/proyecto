'use strict';

const express = require('express'),
    router = express.Router(),
    Cliente = require('../models/cliente.model');

router.post('/registrar_cliente', function (req, res) {

    let body = req.body;

    let nuevo_contacto = new Cliente({
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
        // avatar: body.avatar

    });



    nuevo_contacto.save(
        function (err, clienteDB) {

            if (err) {

                return res.status(400).json({
                    success: false,
                    msj: 'El cliente no se pudo guardad',
                    err

                });


            } else {
                res.json({
                    success: true,
                    msj: 'El cliente se guardó con éxito'
                });

            }


        }

    )



});

//iniciar-sesion
router.post('/validar_credenciales', function (req, res) {
    Cliente.findOne({ identificacion: req.body.identificacion }).then(
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