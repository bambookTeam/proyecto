'use strict';

const express = require('express'),
    router = express.Router(),
    Libros_intercambiables = require('../models/librosIntercambiables.model');

// Definicion de la ruta para registrar tarjetas

router.post('/registrar_libro_intercambiable', function (req, res) {
    let body = req.body;

    let nuevo_libro_intercambiable = new Libros_intercambiables({
        idLibro: body.idLibro,
        idOwner: body.idOwner,
        estado: body.estado
    });
    nuevo_libro_intercambiable.save(
        function (err, librosIntercambiablesDB) {
            if (err) {
                return res.status(400).json({
                    success: false,
                    msj: 'El libro intercambiable no se pudo guardar',
                    err
                })
            } else {
                res.json({
                    success: true,
                    msj: 'El libro intercambiable se guardó con éxito'
                });
            }
        }
    );
});

router.get('/listar_libros_intercambiables', function (req, res) {
    Libros_intercambiables.find(function (err, librosIntercambiablesDB) {
        if (err) {
            return res.status(400).json({
                success: false,
                msj: 'No se pueden listar los libros intercambiables',
                err
            });
        } else {
            return res.json({
                success: true,
                lista_libros_intercambiables: librosIntercambiablesDB
            });
        }
    })
});


module.exports = router;
