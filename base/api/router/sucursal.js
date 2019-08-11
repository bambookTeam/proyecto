'use strict';

const express = require('express'),
    router = express.Router(),
    Sucursal = require('../models/sucursal.model');

//Definición de la ruta para registrar sucursales
router.post('/registrar-sucursal', function(req, res) {
    let body = req.body;

    console.log(body)

    let nueva_sucursal = new Sucursal({
        idLibreria: body.idLibreria,
        nombre: body.nombre,
        telefono : body.telefono,
        correo: body.correo,
        direccion : body.direccion
    });

   
    nueva_sucursal.save(
        function(err, sucursalDB) {
            if (err) {

                console.log(err);

                return res.status(400).json({
                    success: false,
                    msj: 'La sucursal no se pudo guardar',
                    err
                });
            } else {
                res.json({
                    success: true,
                    msj: 'La sucursal se guardó con éxito'
                });
            }
        }
    );
});

router.get('/listar-sucursales', function(req, res) {

    console.log("listar sucursales");
    console.log(req.body);

    Sucursal.find({ id: req.body.id }, function (err, sucursalBD) {
        if (err) {

            console.log('E R R O R');
            console.log(err);

            return res.status(400).json({
                success: false,
                msj: 'No se pueden listar las sucursales',
                err
            });
        } else {
            return res.json({
                success: true,
                lista_sucursales: sucursalBD
            });
        }
    })
});

module.exports = router;