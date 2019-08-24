const express = require('express'),
    router = express.Router(),
    Bitacora = require('../models/bitacora.model');

//Definición de la ruta para registrar contactos

router.post('/registrar-bitacora', function (req, res) {
    let body = req.body;

    let nueva_bitacora = new Bitacora({
        usuarioRegistrado: body.usuarioRegistrado,
        descripcion: body.descripcion,
        fecha: body.fecha
    });

    nueva_bitacora.save(
        function (err, bitacoraDB) {
            if (err) {
                return res.status(400).json({
                    success: false,
                    msj: 'El registro de la bitácora no se pudo guardar',
                    err
                })
            } else {
                res.json({
                    success: true,
                    msj: 'El registro de la bitácora se guardó con éxito'
                });
            }
        }
    );
});
router.get('/listar-bitacora', function (req, res) {
    Bitacora.find(function (err, bitacoraDB) {
        if (err) {
            return res.status(400).json({
                success: false,
                msj: 'No se pueden listar la bitácora',
                err
            });
        } else {
            return res.json({
                success: true,
                lista_bitacora: bitacoraDB
            });
        }
    })
});
module.exports = router;



