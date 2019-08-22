'use strict'

const mongoose = require('mongoose');

let inventarioSucursal_schema = new mongoose.Schema({
    isbn: {type: String, required: true, unique: false}, 
    idLibreria: {type: String, required: true, unique: false},
    idSucursal: {type: String, required: true, unique: false},
    cant: {type: Number, required: true, unique: false}


});

module.exports = mongoose.model('InventarioSucursal', inventarioSucursal_schema);