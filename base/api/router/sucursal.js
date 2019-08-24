'use strict';

const express = require('express'),
    router = express.Router(),
    Sucursal = require('../models/sucursal.model');

//Definición de la ruta para registrar sucursales
router.post('/registrar-sucursal', function (req, res) {
    let body = req.body;

    console.log('Body registro sucursal');
    console.log(body);

    let nueva_sucursal = new Sucursal({
        idLibreria: body.idLibreria,
        nombre: body.nombre,
        telefono: body.telefono,
        correo: body.correo,
        direccion: body.direccion
    });


    nueva_sucursal.save(
        function (err, sucursalDB) {
            if (err) {

                console.log('Error');
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

router.get('/listar-sucursales', function (req, res) {

    console.log("Body listar sucursales");
    console.log(req.body);

    Sucursal.find({ id: req.body.id }, function (err, sucursalBD) {
        if (err) {

            console.log('Error');
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

router.get('/buscar-sucursal-id/_id', function (req, res) {
    Sucursal.findById(function (err, sucursalBD) {

        if (err) {

            console.log('Error');
            console.log(err);

            return res.status(400).json({
                success: false,
                msj: 'No se encontró ninguna librería con ese id',
                err
            });
        } else {
            return res.json({
                success: true,
                lista_libros: sucursalBD
            });
        }
    })
});

router.post('/modificar-sucursal', function (req, res) {
    let body = req.body;

    Sucursal.findByIdAndUpdate(body._id, {
        $set: req.body
    },
        function (error) {

            if (error) {

                console.log("error");
                console.log(error);

                res.json({ success: false, msg: 'No se pudo habilitar el club' });
            } else {
                console.log("sirve modificar la sucursal");
                res.json({ success: true, msg: 'El club se habilitó con éxito' });
            }
        }
    )

});

router.post('/habilitar-sucursal', function (req, res) {
    let body = req.body;

    Sucursal.findByIdAndUpdate(body._id, {
        $set: {
            estado: 1
        }
    },
        function (error) {

            if (error) {

                console.log('Error');
                console.log(err);

                res.json({ success: false, msg: 'No se pudo habilitar la sucursal' });
            } else {
                console.log("sirve habilitar la sucursal");
                res.json({ success: true, msg: 'La sucursal se habilitó con éxito' });
            }
        }
    )
});

router.post('/deshabilitar-sucursal', function (req, res) {
    let body = req.body;

    Sucursal.findByIdAndUpdate(body._id, {
        $set: {
            estado: 0
        }
    },
        function (error) {
            if (error) {

                console.log('Error');
                console.log(err);

                res.json({ success: false, msg: 'No se pudo deshabilitar la sucursal' });
            } else {
                console.log("sirve deshabilitar la sucursal");
                res.json({ success: true, msg: 'La sucursal se deshabilitó con éxito' });
            }
        }
    )
});

router.post('/eliminar_sucursal', function (req, res) {
    let body = req.body;

    Sucursal.findByIdAndRemove(body._id,
        function (error) {
            if (error) {

                console.log('Error');
                console.log(err);

                res.json({ success: false, msg: 'No se pudo eliminar la sucursal' });
            } else {
                console.log("sirve eliminar la sucursal");
                res.json({ success: true, msg: 'La sucursal se eliminó con éxito' });
            }
        }
    )
});

module.exports = router;