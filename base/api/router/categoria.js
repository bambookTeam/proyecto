'use strict';

const express = require('express'),
    router = express.Router(),
    Categoria = require('../models/categoria.model');


router.param('_id', function (req, res, next, _id) {
    req.body._id = _id;
    next();

});

router.post('/registrar_categoria', function (req, res) {

    let body = req.body;

    let nueva_categoria = new Categoria({
        nombre: body.nombre
    });


    nueva_categoria.save(
        function (err, categoriaDB) {
            if (err) {
                return res.status(400).json({
                    success: false,
                    msj: 'La categoría no se pudo guardar',
                    err
                });

            } else {
                res.json({
                    success: true,
                    msj: 'La categoría guardó con éxito'
                });

            }
        }

    );

});

router.get('/listar_categorias', function (req, res) {
    Categoria.find(function (err, categoriaDB) {

        if (err) {
            return res.status(400).json({
                success: false,
                msj: 'No se pueden listar los contactos',
                err
            });

        } else {
            return res.json({
                success: true,
                lista_categorias: categoriaDB
            });

        }

    })
});

router.get('/buscar_categoria_id/_id', function (req, res) {
    Categoria.findById(function (err, categoriaDB) {

        if (err) {
            return res.status(400).json({
                success: false,
                msj: 'No se encontró ninguna categoría con ese _id',
                err
            });
        } else {
            return res.json({
                success: true,
                categoria: categoriaDB
            });
        }
    })
});

router.post('/modificar-categoria', function (req, res) {
    let body = req.body;

    Categoria.findByIdAndUpdate(body._id, {
        $set: req.body
    },
        function (error) {

            if (error) {
                console.log("error");
                console.log(error);
                res.json({ success: false, msg: 'No se pudo habilitar el club' });
            } else {
                console.log("Modificar sucursal BIEN");
                res.json({ success: true, msg: 'El club se habilitó con éxito' });
            }
        }
    )

});


module.exports = router;