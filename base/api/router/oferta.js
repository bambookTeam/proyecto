'use strict';

const express= require('express'),
       router= express.Router(),
       Oferta= require('../models/oferta.model');

// Definicion de la ruta para registrar tarjetas

router.post('/registrar_oferta', function(req,res){

let body = req.body;

let nueva_oferta=new Oferta({
    imagen: body.imagen,


});

nueva_oferta.save(
    function(err, ofertaDB){
if(err){
    return res.status(400).json({
    success:false,
    msj:'La oferta no se pudo guardar',
    err
    });
}else{
    res.json({
        success:true,
        msj:'La oferta se guardó con éxito'

    })
    }
}
);
})

module.exports = router;

