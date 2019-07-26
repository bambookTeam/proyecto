'use strict';

const express = require('express'),
router = express.Router(),
Categoria = require('../models/categoria.model');

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


module.exports = router;