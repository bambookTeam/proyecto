'use strict'

const express = require('express'),
router = express.Router(),
InventarioLibreria = require('../models/inventarioLibreria.model'); 

router.post('/registrar_inventarioLibreria', function(req, res){

  
    let body = req.body;

    let inventario_libreria = new InventarioLibreria({
        isbn: body.isbn,
        idAdminLibreria: body.idAdminLibreria,
        cant: body.cant

        
    })

    inventario_libreria.save(

        function(err, inventarioLibreriaDB){
            if(err){

                return res.status(400).json({
                    success: false, 
                    msj: 'No se logró agregar el inventario',
                    err

                });
                
            }else {


                res.json({
                    success: true,
                    msj: 'Se agregró el inventario'

                });
            }

        }
        

    )


}); 

router.get('/listar_inventarioLibreria', function(req,res){
    InventarioLibreria.find(function(err, inventarioLibreriaDB){

        if(err){
            
            return res.status(400).json({
                success: false, 
                msj: 'No se pudo listar el inventario de la libreria',
                err

            });

        }else {

            return res.json({
                success: true,
                lista_inventario: inventarioLibreriaDB

            });


        }
    })

});




router.post('/agregar-inventarioLibreria', function(req, res){
    
    InventarioLibreria.findByIdAndUpdate( req.body._id, {$set: { cant: req.body.cant}},
        function(error)
        {

            if(error){

                return res.status(500).json({
                    success: false, 
                    msj: 'No se actualizo el inventario',
                    err
                });


            }else {

                return res.status(400).json({
                    success: true,
                    msj: 'Se agregó al inventario'

                });


            }
        }
        
        )

});


module.exports = router;