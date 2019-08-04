'use strict';

const express= require('express'),
       router= express.Router(),
       Genero= require('../models/genero.model');

// Definicion de la ruta para registrar tarjetas

router.post('/registrar_genero', function(req,res){

let body = req.body;

let  nuevo_genero=new Genero({
genero:body.genero

});

nuevo_genero.save(
    function(err, generoBD){
if(err){
    return res.status(400).json({
    success:false,
    msj:'El genero no se pudo guardar',
    err
    });
}else{
    res.json({
        success:true,
        msj:'El genero se guardó con éxito'

    })
    }
}
);
})
router.get('/listar-generos', function(req,res){

Genero.find(function(err,generosBD){
    if(err){
        return res.status(400).json({
            success:false,
            msj:'No se pueden listar los géneros',
            err
        });

    }else{
        return res.json({
            success:true,
            listar_generos:generosBD
    
        })
    }
})
})
module.exports = router;

