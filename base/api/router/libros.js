'use strict'

const express = require('express'),
router = express.Router(),
Libro = require('../models/libro.model');

router.param('_id', function(req, res, next, _id) {
    req.body._id = _id;
    next();
})

//Definición de la ruta para registrar libros

router.post('/registrar_libro', function (req, res) {
  let body = req.body;
  
  let nuevo_libro = new Libro({
    titulo: body.titulo,
    edicion: body.edicion,
    editorial: body.editorial,
    autor: body.autor,
    anno: body.anno,
    idioma:body.idioma,
    isbn: body.isbn,
    genero: body.genero,
    tipo: body.tipo,
    cantidad: body.cantidad,
    precio: body.precio,
    imagen: body.imagen,

  })

  nuevo_libro.save(
    function(err, libroDB) {
        if (err) {
            return res.status(400).json({
                success: false,
                msj: 'El libro no se pudo guardar',
                err
            });
        } else {
            res.json({
                success: true,
                msj: 'El libro se guardó con éxito'
            });
        }
    }
  );
});

router.get('/listar_libros', function(req, res) {
    Libro.find(function(err, librosBD) {
        if (err) {
            return res.status(400).json({
                success: false,
                msj: 'No se pueden listar los libros',
                err
            });
        } else {
            return res.json({
                success: true,
                lista_libros: librosBD
            });
        }
    })
});

router.get('/buscar_libro-id/_id', function(req, res) {
    Libro.findById(function(err, librosBD) {
        
        if (err) {
            return res.status(400).json({
                success: false,
                msj: 'No se encontró ningún libro con ese _id',
                err
            });
        } else {
            return res.json({
                success: true,
                lista_libros: librosBD
            });
        }
    })
});

module.exports = router;