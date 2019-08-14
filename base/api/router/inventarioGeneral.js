'use strict'

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


router.get('/listar_inventario', function(req, res){
    InventarioGeneral.find(function(err, inventarioDB){
        
        if(err){
            return res.status(400).json({
                success: false,
                msj: 'No se pudo listar el inventario',
                err
            });
        }else {
            return res.json({
                success: true,
                lista_inventario:inventarioDB


            });


        }

    })

});



router.post('/agregar_inventario', function(req, res){       
        

        InventarioGeneral.findByIdAndUpdate( req.body._id , {$set:{ cant: req.body.cant}},
        
            function(error) 
            {
                if(error){
                    
                    return res.status(500).json({
                        success: false,
                        msj: 'No se pudo crear agregar inventario',
                        err

                    });


                } else {

                    console.log(req.body._id);
                    
                    return res.status(400).json({
                        success: true,
                        msj: 'Se agregó el inventario'
                    });

                }
            
            } 
            
        )
            
            
});


module.exports = router;