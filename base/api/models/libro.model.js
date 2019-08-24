'use strict';

const mongoose = require('mongoose');

//Esquema del libro

let libro_schema = new mongoose.Schema({
   
    titulo: { type: String, required: true, unique: false },
    edicion: { type: String, required: true, unique: false },
    editorial: { type: String, required: true, unique: false },
    autor: { type: String, required: true, unique: false },
    anno: { type: Number, required: true, unique: false },
    idioma: { type: String, required: true, unique: false },
    isbn: { type: String, required: true, unique: false },
    genero: { type: String, required: true, unique: false },
    tipo: { type: String, required: true, unique: false },
    cantidad: { type: Number, required: true, unique: false },
    precio: { type: Number, required: true, unique: false },
    portada: { type: String, required: true, unique: false },
    contraportada: {type: String, required: true, unique: false}


});

module.exports = mongoose.model('Libro', libro_schema);