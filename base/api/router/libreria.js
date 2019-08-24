'use strict';

const express = require('express'),
    router = express.Router(),
    Libreria = require('../models/libreria.model');

router.param("_id", function (req, res, next, _id) {
    req.body._id = _id;
    next();
});

//Definición de la ruta para registrar librerías
router.post('/registrar-libreria', function (req, res) {
    let body = req.body;


    let nueva_libreria = new Libreria({
        id: body.id,
        nombre_comercial: body.nombre_comercial,
        nombre_fantasia: body.nombre_fantasia,
        direccion: body.direccion
    });

    nueva_libreria.save(
        function (err, libreriaDB) {
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

router.get('/listar-librerias', function (req, res) {
    Libreria.find(function (err, libreriaBD) {
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

router.get('/buscar-libreria-id/:_id', function (req, res) {
    Libreria.findById(req.body._id, function (err, libreriaBD) {
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

router.post('/agregar-sucursal', function (req, res) {

    Libreria.update(
        { _id: req.body._id },
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

        function (error) {
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

router.post('/eliminar_libreria', function (req, res) {
    let body = req.body;

    Libreria.findByIdAndRemove(body._id,
        function (error) {
            if (error) {

                console.log('Error');
                console.log(err);

                res.json({ success: false, msg: 'No se pudo eliminar la librería' });
            } else {
                console.log("sirve eliminar la librería");
                res.json({ success: true, msg: 'La librería se eliminó con éxito' });
            }
        }
    )
});

router.post('/modificar-libreria', function (req, res) {
    let body = req.body;

    console.log('Body');
    console.log(body);
    Libreria.findByIdAndUpdate(body._id, {
        $set: req.body
    },
        function (error) {

            if (error) {

                console.log("error");
                console.log(error);

                res.json({ success: false, msg: 'No se pudo habilitar el club' });
            } else {
                console.log("sirve modificar la Librería");
                res.json({ success: true, msg: 'El club se habilitó con éxito' });
            }
        }
    )

});



module.exports = router;