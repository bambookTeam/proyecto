'use strict';

const express = require('express'),
    router = express.Router(),
    UserRating = require('../models/ratinguser.model');


router.post('/registrar_rating', function (req, res) {
    let body = req.body;

    let nuevo_rating = new UserRating({
        idUserRated:body.idUserRated,
        idRater:body.idRater,
        idIntercambio:body.idIntercambio,
        rating:body.rating
    });

    nuevo_rating.save(
        function (err, ratingUsersDB) {
            if (err) {
                return res.status(400).json({
                    success: false,
                    msj: 'El rating no se pudo guardar',
                    err
                })
            } else {
                res.json({
                    success: true,
                    msj: 'El rating se guardó con éxito'
                });
            }
        }
    );
});

router.get('/listar_ratings', function (req, res) {
    UserRating.find(function (err, ratingUsersDB) {
        if (err) {
            return res.status(400).json({
                success: false,
                msj: 'No se pueden listar los ratings',
                err
            });
        } else {
            return res.json({
                success: true,
                lista_rating: ratingUsersDB
            });
        }
    })
});


module.exports = router;