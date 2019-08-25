'use strict';

const express= require('express'),
       router= express.Router(),
       Oferta= require('../models/oferta.model');

// Definicion de la ruta para registrar tarjetas

router.post('/registrar_oferta', function(req,res){

let body = req.body;

let nueva_oferta=new Oferta({
    id: body.id,
    imagen: body.imagen
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

router.post('/listar_ofertas', function (req, res) {
    Oferta.find({ id: req.body.id }, function (err, ofertasBD) {
        if (err) {
            console.log("error");
            console.log(err);
            return res.status(400).json({
                success: false,
                msj: 'No se pueden listar las ofertas',
                err
            });

        } else {
            res.json({
                success: true,
                listar_ofertas: ofertasBD

            })
            console.log("sirve");
            //console.log(res);
        }
    })
})

module.exports = router;

