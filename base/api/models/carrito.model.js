'use strict'

const mongoose = require('mongoose');

let carrito_schema = new mongoose.Schema({
    idCliente: { type: String, required: true, unique: false },
    isbn: {type: String, required:true, unique: false},
    titulo: {type: String, required: true, unique: false},
    precio: { type: Number, required: true, unique: false},
    idLibreria: {type: String, required: true, unique: false}
    

});

module.exports = mongoose.model('Carrito', carrito_schema);