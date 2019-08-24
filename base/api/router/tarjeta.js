'use strict';

const express = require('express'),
    router = express.Router(),
    Tarjeta = require('../models/tarjeta.model');

// Definicion de la ruta para registrar tarjetas

router.post('/registrar_tarjeta', function (req, res) {

    let body = req.body;

    console.log(body);


    let nueva_tarjeta = new Tarjeta({
        id: body.id,
        numerotarjeta: body.numerotarjeta,
        fechavencimiento: body.fechavencimiento,
        codigocvv: body.codigocvv,
        estado: 'Habilitado'

    });

    console.log("guardado de tarjeta");
    nueva_tarjeta.save(

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


router.post('/listar_tarjetas', function (req, res) {
    console.log("t tarjetas");
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

router.get('/buscar_tarjeta-id/_id', function (req, res) {
    
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
router.post('/modificar_tarjeta', function (req, res) {
    let body = req.body;
   
    Tarjeta.findByIdAndUpdate(body._id, {
        $set: req.body
    },
    function(error) {
        if (error) {
            res.json({ success: false, msg: 'No se pudo modificar la tarjeta' });
        } else {
            res.json({ success: true, msg: 'La tarjeta se modificó con éxito' });
        }
    }
)
});

router.post('/deshabilitar_tarjeta', function (req, res) {
    let body = req.body;

    Tarjeta.findByIdAndUpdate(body._id, {
        $set: {
            estado: 'Deshabilitado'
        }
    },
        function (error) {
            if (error) {
                console.log("error")
                console.log(error)
                res.json({ success: false, msg: 'No se pudo deshabilitar la tarjeta' });
            } else {
                console.log("sirve")
                res.json({ success: true, msg: 'La tarjeta se deshabilitó con éxito' });
            }
        }
    )
});

router.post('/habilitar_tarjeta', function (req, res) {
    let body = req.body;

    Tarjeta.findByIdAndUpdate(body._id, {
        $set: {
            estado: 'Habilitado'  
    },
        function (error) {

            if (error) {
                res.json({ success: false, msg: 'No se pudo habilitar la tarjeta' });
            } else {
                res.json({ success: true, msg: 'La tarjeta se habilitó con éxito' });
            }
        }
    
});

router.post('/eliminar_tarjeta', function(req, res) {
    let body = req.body;

    Contacto.findByIdAndRemove(body._id,
        function(error) {
            if (error) {
                res.json({ success: false, msg: 'No se pudo borrar la tarjeta' });
            } else {
                res.json({ success: true, msg: 'El contacto se borró con éxito' });
            }
        }
    )
});

});

module.exports = router;


