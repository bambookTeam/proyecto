'use strict'

const express = require('express'),
    router = express.Router(),
    LibroComprado = require('../models/libroComprado.model');

router.post('/registrar-compra', function(req, res){
    
    let body = req.body;

    let nueva_compra = new LibroComprado ({
        idCliente: body.idCliente,
        isbn: body.isbn,
        idSucursal: body.idSucursal,
        idTarjeta: body.idTarjeta,
        titulo: body.titulo,
        cant: body.cant,
        precio: body.precio

    });


    nueva_compra.save ( 
        function(err, compraDB) {

            if(err){

                return res.status(400).json({
                    success: false, 
                    msj: 'No se pudo realizar la compra',
                    err                  


                })


            }else {


                res.json({
                    success: true, 
                    msj: 'Se ha realizado la compra'

                });


            }

        }
    )

});

router.get('/listar_librosComprados', function(req, res){
    LibroComprado.find(function(err, compraDB){
        
        if(err){

            return res.status(400).json({
                success: false, 
                msj: 'No se encontraron libros comprados'
            });

        }else {

            return res.json({
                success: true,
                lista_librosComprados: compraDB

            });


        }

    })


});



router.post('/agregar-libroComprado', function(req, res){

    LibroComprado.findByIdAndUpdate(req.body._id, {$set: {cant: req.body.cant}},
        function(error){

            if(error){

                return res.status(500).json({
                    success: false, 
                    msj: 'No se redujo la cantidad del inventario de la sucursal',
                    error
                });

            }else {

                return res.status(400).json({
                    success: true, 
                    msj: 'Se redujo el inventario'
                });

            }
        }
        )

});





module.exports = router;