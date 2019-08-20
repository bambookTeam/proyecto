'use strict';

const express = require('express'),
    router = express.Router(),
    Genero = require('../models/genero.model');

// Definicion de la ruta para registrar tarjetas

router.post('/registrar_genero', function (req, res) {

    let body = req.body;
    console.log("activado");
    console.log(body);
    let nuevo_genero = new Genero({
        genero: body.genero

    });

    nuevo_genero.save(
        function (err, generoBD) {
            if (err) {
                console.log("error");
                console.log(err);
                return res.status(400).json({
                    success: false,
                    msj: 'El genero no se pudo guardar',
                    err
                });
            } else {
                res.json({
                    success: true,
                    msj: 'El genero se guardó con éxito'

                })
                console.log("funciona");
                console.log(res);
            }
        }
    );
})


router.get('/listar_generos', function (req, res) {

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


router.get('/buscar_genero_id/_id', function (req, res) {
    Genero.findById(function (err, generoDB) {

        if (err) {
            return res.status(400).json({
                success: false,
                msj: 'No se encontró ningún género con ese _id',
                err
            });
        } else {
            return res.json({
                success: true,
                genero: generoDB
            });
        }
    })
});


router.post('/modificar-genero', function (req, res) {
    let body = req.body;

    Genero.findByIdAndUpdate(body._id, {
        $set: req.body
    },
        function (error) {

            if (error) {
                console.log("error");
                console.log(error);
                res.json({ success: false, msg: 'No se pudo habilitar la tarjeta' });
            } else {
                console.log("conoce");
                res.json({ success: true, msg: 'La tarjeta se habilitó con éxito' });
            }
        }
    )

});

router.post('/deshabilitar-genero', function (req, res) {
    let body = req.body;

    Genero.findByIdAndUpdate(body._id, {
        $set: {
            estado: 'Deshabilitado'
        }
    },
        function (error) {
            if (error) {
                console.log("error")
                console.log(error)
                res.json({ success: false, msg: 'No se pudo deshabilitar el genero' });
            } else {
                console.log("sirve")
                res.json({ success: true, msg: 'El género se deshabilitó con éxito' });
            }
        }
    )
});

router.post('/habilitar-genero', function (req, res) {
    let body = req.body;

    Genero.findByIdAndUpdate(body._id, {
        $set: {
            estado: req.body.estado
        }
    },
        function (error) {

            if (error) {
                res.json({ success: false, msg: 'No se pudo habilitar el género' });
            } else {
                res.json({ success: true, msg: 'El género se habilitó con éxito' });
            }
        }
    )
});

router.post('/eliminar-tarjeta', function (req, res) {
    let body = req.body;

    Genero.findByIdAndDelete(body._id, {

        function(error) {

            if (error) {
                res.json({ success: false, msg: 'No se pudo eliminar el género' });
            } else {
                res.json({ success: true, msg: 'El género se eliminó con éxito' });
            }
        }

    });

})
module.exports = router;


