'use strict';

const express = require('express'),
    router = express.Router(),
    ClubMiembro = require('../models/clubLecturaMiembro.model');

//Definición de la ruta para registrar contactos

router.post('/unirse-Club', function (req, res) {
    let body = req.body;
    let nuevo_clubMiembro = new ClubMiembro({
        idClub: body.idClub,
        idUsuario: body.idUsuario
    });

    nuevo_clubMiembro.save(
        function (err, ClubMiembroDB) {
            if (err) {
                return res.status(400).json({
                    success: false,
                    msj: 'No se ha podido unir al club',
                    err
                })
            } else {
                res.json({
                    success: true,
                    msj: 'Se ha podido unir al club'
                });
            }
        }
    );
});
/*router.get('/listar-clubesLectura', function (req, res) {
    ClubLectura.find(function (err, clubLecturaDB) {
        if (err) {
            return res.status(400).json({
                success: false,
                msj: 'No se pueden listar los clubes',
                err
            });
        } else {
            return res.json({
                success: true,
                lista_clubes: clubLecturaDB
            });
        }
    })
});*/

module.exports = router;