'use strict'


const express = require('express'),
router = express.Router(),
inventarioSucursal = require('../models/inventarioSucursal.model'); 

router.post('/regsitrar_inventarioSucursal', function(req, res){

    let body = req.body;

    let inventario_sucursal = new inventarioSucursal({
        isbn: body.isbn,
        idLibreria: body.idLibreria,
        idSucursal: body.idSucursal,
        cant: body.cant
    })


    inventario_sucursal.save(

        function(err, inventarioSucursalDB){

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


router.get('/listar_inventarioSucursal', function(req, res){
    inventarioSucursal.find(function(err, inventarioSucursalDB){

        if(err){

            return res.status(400).json({
                success: false,
                msj: 'No se pudo listar el inventario de la sucursal',
                err

            });

        }else {

            return res.json({
                success: true, 
                lista_inventario: inventarioSucursalDB

            });

        }

    })

});

router.post('/agregar-inventarioSucursal', function(req, res){

    inventarioSucursal.findByIdAndUpdate( req.body._id, {$set: {cant: req.body.cant}},
        function(error){

            if(error){

                return res.status(500).json ({
                    success: false, 
                    msj: 'No se pudo actualizar el inventario',
                    error
                });

            }else {

                return res.status(400).json ({
                    success: true,
                    msj: 'Se actualizo el inventario'
                });
            }
        }
        )

});

module.exports = router;