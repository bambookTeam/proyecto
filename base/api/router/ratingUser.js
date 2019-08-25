'use strict';

const express = require('express'),
    router = express.Router(),
    RatingUsuario = require('../models/ratinguser.model');


router.post('/crear-tablaCalificacion', function (req, res) {
    let body = req.body;

    let nuevo_ratingUsuario = new RatingUsuario({
        idUsuarioRated: body.idUsuarioRated,
        ratings: [{
            idRater: body.idRater,
            descripcion:body.descripcion,
            calificacion: body.calificacion
        }]

    });

    nuevo_ratingUsuario.save(
        function (err, ratingUsuarioDB) {
            if (err) {
                return res.status(400).json({
                    success: false,
                    msj: 'La calificacion no se pudo guardar',
                    err
                })
            } else {
                res.json({
                    success: true,
                    msj: 'La calificacion se guardó con éxito'
                });
            }
        }
    );
});
router.get('/listar-calificaciones-usuarios', function (req, res) {
    RatingUsuario.find(function (err, ratingUsuarioDB) {
        if (err) {
            return res.status(400).json({
                success: false,
                msj: 'No se pueden listar los ratings de los usuarios',
                err
            });
        } else {
            return res.json({
                success: true,
                lista_rating_usuarios: ratingUsuarioDB
            });
        }
    })
});

router.post('/agregar-califacion-usuario', function (req, res) {
    
    RatingUsuario.update({ _id: req.body._id }, {
        $push: {
            'ratings': {
                idRater: req.body.idRater,
                descripcion: req.body.descripcion,
                calificacion: req.body.calificacion
            }
        }
    },
        function (error) {
            if (error) {
                return res.status(400).json({
                    success: false,
                    msj: 'No se pudo agregar la calificacion',
                    err
                });
            } else {
                return res.json({
                    success: true,
                    msj: 'Se agregó correctamente la califacion'
                });
            }
        }
    )
})

module.exports = router;