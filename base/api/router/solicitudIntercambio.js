'use strict';

const express = require('express'),
    router = express.Router(),
    Solicitud = require('../models/solicitudIntercambio.model');

// Definicion de la ruta para registrar tarjetas



router.post('/solicitud_intercambio', function (req, res) {

    var body = req.body;

    console.log("de nuevo");
    console.log(body);


    let nueva_solicitud = new Solicitud({
        idOwner: body.idOwner,
        idLibroSender: body.idLibroSender,
        idSender: body.idSender,
        fecha: body.fecha,
        sucursal: body.sucursal,
        estado: body.estado
    });

    console.log("guardado de solicitud");
    nueva_solicitud.save(

        function (err, tarjetaDB) {
            if (err) {
                console.log("error  de tarjeta");
                console.log(err);
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

                console.log(res);
                console.log("se guardó  de tarjeta");
            }
        }
    );
})

router.get('/listar_solicitudes_intercambios', function (req, res) {
    Solicitud.find(function (err, solicitudesDB) {
        if (err) {
            return res.status(400).json({
                success: false,
                msj: 'No se pueden listar las solicitudes',
                err
            });
        } else {
            return res.json({
                success: true,
                lista_solicitudes: solicitudesDB
            });
        }
    })
});

router.post('/cambiarEstado', function (req, res) {
    let body = req.body;

    Solicitud.findByIdAndUpdate(body._id, {
        $set: {
            estado: body.estado
        }
    },
        function (error) {

            if (error) {
                res.json({ success: false, msg: 'No se pudo actualizar el estado' });
            } else {
                res.json({ success: true, msg: 'El estado se actualizó correctamente' });
            }
        }
    )
});


module.exports = router;
