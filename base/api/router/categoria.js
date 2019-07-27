'use strict';

const express = require('express'),
   router = express.Router(),
   Categoria = require('../models/categoria.model');


router.param('_id', function(req, res, next, _id){
    req.body._id = _id;
    next();

});



router.post('/registrar_categoria', function(req,res) {

    let body = req.body;

    let nueva_categoria = new Categoria({
        nombre: body.nombre
    });


    nueva_categoria.save(
        function(err, categoriaDB){
            if(err){
                return res.status(400).json({
                    success: false, 
                    msj: 'La categoría no se pudo guardar',
                    err
                });

            }else {
                res.json({
                    success: true,
                    msj: 'La categoría guardó con éxito'
                });

            }
        }

    );

});


router.get('/listar_categorias', function(req,res) {
    Categoria.find(function(err, categoriaDB)
    {

        if(err){
            return res.status(400).json({
                success: false,
                msj: 'No se pueden listar los contactos',
                err
            });

        }else {
            return res.json({
                success: true,
                lista_categorias: categoriaDB
            });

        }

    })
});

/*
router.get('/buscar_cateoria_id/:_id', function(req,res){
    Categoria.findById(req.body/_id, function(err, categoriaDB) {

        if(err){
            return res.status(400).json({
                success: false ,             
                msj: 'No se encontró ningún contacto con ese _id',
                err
            });
        }else{
            return res.json({
                success: true,
                categoria: categoriaDB

            });


        }


    })


}); */

module.exports = router;