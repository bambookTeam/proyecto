'use strict';

const express = require('express'),
    router = express.Router(),
    ClubLectura = require('../models/clubLectura.model');

//Definición de la ruta para registrar contactos

router.post('/registrar-clubLectura', function (req, res) {
    let body = req.body;

    let nuevo_clubLectura = new ClubLectura({
        nombre_Club:body.nombre_Club,
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
        idAdmin: body.idAdmin
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

router.get('/buscar-clubLectura-id/:_id',function(req,res){
    ClubLectura.findById(req.body._id,function(err,clubLecturaDB){
        if(err){
            return res.status(400).json({
                success:false,
                msj: 'No se encontró el club de lectura con ese _id',
                err
            });
        }else{
            return res.json({
                success:true,
                club:clubLecturaDB
            });
        }
    })
});

/*

module.exports


*/
module.exports = router;