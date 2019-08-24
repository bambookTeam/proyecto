'use strict';

const express = require('express'),
    router = express.Router(),
    Intercambio = require('../models/intercambio.model');

// Definicion de la ruta para registrar tarjetas


router.get('/listar_intercambios', function (req, res) {

    console.log("listar generos");

    Genero.find(function (err, generosBD) {
        if (err) {
            return res.status(400).json({
                success: false,
                msj: 'No se pueden listar los géneros',
                err
            });

        } else {
            return res.json({
                success: true,
                listar_generos: generosBD

            })
        }
    })
})
