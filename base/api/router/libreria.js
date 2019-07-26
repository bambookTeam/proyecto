'use strict';

const express = require('express'),
    router = express.Router(),
    Libreria = require('../models/libreria.model');

//Definición de la ruta para registrar librerías
router.post('/registrar-libreria', function(req, res) {
    let body = req.body;

    let nueva_libreria = new Libreria({
        nombre_comercial: body.nombre_comercial,
        nombre_fantasia: body.nombre_fantasia,
        direccion: body.direccion
    });

    nueva_libreria.save(
        function(err, libreriaDB) {
            if (err) {
                return res.status(400).json({
                    success: false,
                    msj: 'La librería no se pudo guardar',
                    err
                });
            } else {
                res.json({
                    success: true,
                    msj: 'La librería se guardó con éxito'
                });
            }
        }
    );
});

router.get('/listar-librerias', function(req, res) {
    Libreria.find(function(err, libreriaBD) {
        if (err) {
            return res.status(400).json({
                success: false,
                msj: 'No se pueden listar las librerías',
                err
            });
        } else {
            return res.json({
                success: true,
                lista_librerias: libreriaBD
            });
        }
    })
});

module.exports = router;