'use strict';

const express= require('express'),
       router= express.Router(),
       Tarjeta= require('../models/tarjeta.model');

// Definicion de la ruta para registrar tarjetas

router.post('/registrar_tarjeta', function(req,res){

let body = req.body;

let nueva_tarjeta=new Tarjeta({
    numerotarjeta: body.numerotarjeta,
    fechavencimiento:body.fechavencimiento,
    codigocvv:body.codigocvv

});

nueva_tarjeta.save(
    function(err, tarjetaDB){
        if(err){
            return res.status(400).json({
            success:false,
            msj:'La tarjeta no se pudo guardar',
            err
            });
        }else{
            res.json({
                success:true,
                msj:'La tarjeta se guardó con éxito'

            })
        }
    }
);
})
router.get('/listar_tarjetas', function(req,res){

    Tarjeta.find(function(err,tarjetasBD){
        if(err){
            return res.status(400).json({
                success:false,
                msj:'No se pueden listar las tarjetas',
                err
            });
    
        }else{
            res.json({
                success:true,
                listar_tarjetas:tarjetasBD
        
            })
        }
    })
    })

module.exports = router;

