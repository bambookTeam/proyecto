'use strict'

const mongoose = require('mongoose');

let compra_schema = new mongoose.Schema({
    idCliente: { type: String, required: true, unique: false },
    isbn: {type: String, required:true, unique: false},
    idSucursal: {type: String, required: true, unique: false},
    idTarjeta: { type: String, required: true, unique: false},
    titulo: {type: String, required: true, unique: false},
    cant: { type: Number, required: true, unique: false},
    precio: { type: Number, required: true, unique: false}

});

module.exports = mongoose.model('LibroComprado', compra_schema);