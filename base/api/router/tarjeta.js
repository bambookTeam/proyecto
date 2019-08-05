'use strict';

const express = require('express'),
    router = express.Router(),
    Tarjeta = require('../models/tarjeta.model');

// Definicion de la ruta para registrar tarjetas

router.post('/registrar_tarjeta', function (req, res) {

    let body = req.body;

    // console.log(body);


    let nueva_tarjeta = new Tarjeta({
        id: body.id,
        numerotarjeta: body.numerotarjeta,
        fechavencimiento: body.fechavencimiento,
        codigocvv: body.codigocvv
    });

    // console.log("guardado de tarjeta");
    nueva_tarjeta.save(

        function (err, tarjetaDB) {
            if (err) {
                // console.log("error  de tarjeta");
                // console.log(err);
                return res.status(400).json({
                    success: false,
                    msj: 'La tarjeta no se pudo guardar',
                    err
                });


            } else {
                res.json({
                    success: true,
                    msj: 'La tarjeta se guardó con éxito'

                })

                // console.log(res);
                // console.log("se guardó  de tarjeta");
            }
        }
    );
})
router.post('/listar_tarjetas', function (req, res) {

    console.log("listar tajetas ejecutado 2 ");
    console.log(req.body);

    Tarjeta.find({ id: req.body.id }, function (err, tarjetasBD) {
        if (err) {
            console.log("error");
            console.log(err);
            return res.status(400).json({
                success: false,
                msj: 'No se pueden listar las tarjetas',
                err
            });

        } else {
            res.json({
                success: true,
                listar_tarjetas: tarjetasBD

            })
            console.log("sirve");
            //console.log(res);
        }
    })
})

module.exports = router;

