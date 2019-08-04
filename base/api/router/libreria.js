'use strict';

const express = require('express'),
    router = express.Router(),
    Libreria = require('../models/libreria.model');

    router.param("_id", function (req, res, next, _id) {
        req.body._id = _id;
        next();
    });

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

router.get('/buscar-libreria-id/:_id', function(req, res) {
    Libreria.findById(req.body._id, function(err, libreriaBD) {
        if (err) {
            return res.status(400).json({
                success: false,
                msj: 'No se encontró ninguna librería con ese id',
                err
            });
        } else {
            return res.json({
                success: true,
                libreria: libreriaBD
            });
        }
    })
});

router.post('/agregar-sucursal', function(req, res) {

    Libreria.update(
        {_id: req.body._id},
        {
            $push: {
                'sucursales': {
                    nombre: req.body.nombre,
                    telefono: req.body.telefono,
                    correo: req.body.correo,
                    direccion: req.body.direccion
                }
            }
        },

        function(error){
            if (error) {
                return res.status(400).json({
                    success: false,
                    msj: 'No se pudo agregar la sucural',
                    err
                });
            } else {
                return res.json({
                    success: 'true',
                    msj: 'La sucursal se agrego correctamente'
                });
            }
        }
    )

});

module.exports = router;