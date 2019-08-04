'use strict';

const express = require('express'),
    router = express.Router(),
    Evento = require('../models/evento.model');


router.post('/registrar-evento', function (req, res) {
    let body = req.body;

    let nuevo_evento = new Evento({
        nombre_Evento: body.nombre_Evento,
        idClub: body.idClub,
        libro: body.libro
    });

    nuevo_evento.save(
        function (err, eventoDB) {
            if (err) {
                return res.status(400).json({
                    success: false,
                    msj: 'El evento no se pudo guardar',
                    err
                })
            } else {
                res.json({
                    success: true,
                    msj: 'El evento se guardó con éxito'
                });
            }
        }
    );
});
router.get('/listar-eventos', function (req, res) {
    Evento.find(function (err, eventoDB) {
        if (err) {
            return res.status(400).json({
                success: false,
                msj: 'No se pueden listar los eventos',
                err
            });
        } else {
            return res.json({
                success: true,
                lista_eventos: eventoDB
            });
        }
    })
});

module.exports = router;