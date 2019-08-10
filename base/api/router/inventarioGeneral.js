'use strict';

const express = require('express'),
router = express.Router(),
InventarioGeneral = require('../models/inventarioGeneral.model');

router.post('/registrar_inventario', function(req, res){

    let body = req.body; 

    let inventario = new InventarioGeneral({
        isbn: body.isbn,
        cant: body.cant        
    })


    inventario.save(
        function(err, inventarioDB){
            if(err){
                return res.status(400).json({
                    success: false, 
                    msj: 'El libro no se pudo registrar en el inventario',
                    err                  

                });
            }else {
                res.json({
                    success: true,
                    msj:  'El libro se ha registrado en el inventario con éxito'

                });



            }



        }
    );


});