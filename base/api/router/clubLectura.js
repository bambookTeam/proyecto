'use strict';

const express = require('express'),
    router = express.Router(),
    ClubLectura = require('../models/clubLectura.model');

//Definición de la ruta para registrar contactos

router.post('/registrar-clubLectura', function (req, res) {
    let body = req.body;

    let nuevo_clubLectura = new ClubLectura({
        nombre_Club: body.nombre_Club,
        modalidad: body.modalidad,
        fechaInicio: body.fechaInicio,
        fechaFin: body.fechaFin,
        hora: body.hora,
        frecuencia: body.frecuencia,
        tema: body.tema,
        genero: body.genero,
        categoria: body.categoria,
        libreria: body.libreria,
        sucursal: body.sucursal,
        idAdmin: body.idAdmin,
        estado: body.estado
    });

    nuevo_clubLectura.save(
        function (err, clubLecturaDB) {
            if (err) {
                return res.status(400).json({
                    success: false,
                    msj: 'El club de lectura no se pudo guardar',
                    err
                })
            } else {
                res.json({
                    success: true,
                    msj: 'El club de lectura se guardó con éxito'
                });
            }
        }
    );
});

router.get('/listar-clubesLectura', function (req, res) {
    ClubLectura.find(function (err, clubLecturaDB) {
        if (err) {
            return res.status(400).json({
                success: false,
                msj: 'No se pueden listar los clubes',
                err
            });
        } else {
            return res.json({
                success: true,
                lista_clubes: clubLecturaDB
            });
        }
    })
});

router.get('/buscar-clubLectura-id/:_id', function (req, res) {
    ClubLectura.findById(req.body._id, function (err, clubLecturaDB) {
        if (err) {
            return res.status(400).json({
                success: false,
                msj: 'No se encontró el club de lectura con ese _id',
                err
            });
        } else {
            return res.json({
                success: true,
                club: clubLecturaDB
            });
        }
    })
});

router.post('/modificar-club', function (req, res) {
    let body = req.body;

    ClubLectura.findByIdAndUpdate(body._id, {
        $set: {
            nombre_Club: body.nombre_Club,
            modalidad: body.modalidad,
            fechaInicio: body.fechaInicio,
            fechaFin: body.fechaFin,
            hora: body.hora,
            frecuencia: body.frecuencia,
            tema: body.tema,
            genero: body.genero,
            categoria: body.categoria,
            libreria: body.libreria,
            sucursal: body.sucursal,
            estado: body.estado
        }
    },
        function (error) {

            if (error) {
                console.log("error");
                console.log(error);
                res.json({ success: false, msg: 'No se pudo habilitar el club' });
            } else {
                console.log("conoce");
                res.json({ success: true, msg: 'El club se habilitó con éxito' });
            }
        }
    )

});

router.post('/deshabilitar-club', function (req, res) {
    let body = req.body;

    ClubLectura.findByIdAndUpdate(body._id, {
        $set: {
            estado: 0
        }
    },
        function (error) {
            if (error) {
                console.log("error")
                console.log(error)
                res.json({ success: false, msg: 'No se pudo deshabilitar el Club' });
            } else {
                console.log("sirve")
                res.json({ success: true, msg: 'El Club se deshabilitó con éxito' });
            }
        }
    )
});

router.post('/habilitar-club', function (req, res) {
    let body = req.body;

    ClubLectura.findByIdAndUpdate(body._id, {
        $set: {
            estado: 1
        }
    },
        function (error) {

            if (error) {
                res.json({ success: false, msg: 'No se pudo habilitar el club' });
            } else {
                res.json({ success: true, msg: 'El clubs se habilitó con éxito' });
            }
        }
    )
});
router.post('/elimnar-Club', function(req, res) {
    let body = req.body;

    ClubLectura.findByIdAndRemove(body._id,
        function(error) {
            if (error) {
                res.json({ success: false, msg: 'No se pudo eliminar el Club' });
            } else {
                res.json({ success: true, msg: 'Se eliminó el Club  exitosamente' });
            }
        }
    )
});

router.post('/eliminar-Club', function(req, res) {
    let body = req.body;
    ClubLectura.findByIdAndRemove(body._id,
        function(error) {
            if (error) {
                res.json({ success: false, msg: 'No se pudo eliminar el Club' });
            } else {
                res.json({ success: true, msg: 'Se eliminó el Club exitosamente' });
            }
        }
    )
});

module.exports = router;