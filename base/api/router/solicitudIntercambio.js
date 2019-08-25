'use strict';

const express = require('express'),
    router = express.Router(),
    Solicitud = require('../models/solicitudIntercambio.model');

// Definicion de la ruta para registrar tarjetas

router.post('/registrar_solicitud_intercambio', function (req, res) {
    let body = req.body;

    let nueva_solicitud = new Solicitud({
    idOwner :body.idOwner,
    idLibroOwner: body.idLibroOwner,
    idLibroSender:body.idLibroSender,
    idSender: body.idSender,
    fecha: body.fecha,
    sucursal: body.sucursal,
    libreria:body.librerias,
    estado:body.estado
    });

    nueva_solicitud.save(
        function (err, solicitudesDB) {
            if (err) {
                return res.status(400).json({
                    success: false,
                    msj: 'El intercambio no se pudo guardar',
                    err
                })
            } else {
                res.json({
                    success: true,
                    msj: 'El intercambio se guardó con éxito'
                });
            }
        }
    );
});

router.get('/listar_solicitudes_intercambios', function (req, res) {
    Solicitud.find(function (err, solicitudesDB) {
        if (err) {
            return res.status(400).json({
                success: false,
                msj: 'No se pueden listar las solicitudes',
                err
            });
        } else {
            return res.json({
                success: true,
                lista_solicitudes: solicitudesDB
            });
        }
    })
});


module.exports = router;
