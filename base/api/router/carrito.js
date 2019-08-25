'use strict'

const express = require('express'),
    router = express.Router(),
    Carrito = require('../models/carrito.model');


router.post('/registrar-carrito', function(req, res){
    
    let body = req.body; 

    console.log(body);

    let nuevo_carrito = new Carrito ({
        idCliente: body.idCliente,
        isbn: body.isbn,
        titulo: body.titulo,
        precio: body.precio,
        idLibreria: body.idLibreria

    });


    nuevo_carrito.save( 
        function(err, carritoDB){

            if(err){

                return res.status(400).json({
                    success: false,
                    msj:'No se registro el libro al carrito',
                    err
                })

            }else {

                res.json({
                    success: true,
                    msj: 'Se ha registrado el libro al carrito'
                });

            }
        }
    );

});

router.get('/listar-carrito', function(req, res){   
    


    Carrito.find(function(err, carritoDB){
        if(err){
            return res.status(400).json({
                success: false, 
                msj: 'No se encontro nada en el carrito',
                err

            });

        }else {

            return res.json({
                success: true, 
                lista_carrito: carritoDB

            });

        }

    })

});

router.post('/eliminar-carrito', function(req, res){

    let body = req.body;

   
    Carrito.findByIdAndRemove(body._id,
    function(error) {
        if(error){

            console.log("elimino carrito");
            res.json({
                 success: false,
                 msg: 'No se pudo eliminar el carrito'
            });


        }else {

            res.json({ 
                success: true, 
                msg: 'El carrito fue elilminado'
            });
        }
    }
    )

});


module.exports = router;