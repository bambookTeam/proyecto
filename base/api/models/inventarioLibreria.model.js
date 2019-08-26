'use strict'

const mongoose = require('mongoose');

let inventarioLibreria_schema = new mongoose.Schema({
    isbn: {type: String, required: true, unique: false}, 
    idAdminLibreria: {type: String, required: true, unique: false},
    cant: {type: Number, required: true, unique: false},
    precio: {type: Number, required: true, unique: false}


});

module.exports = mongoose.model('InventarioLibreria', inventarioLibreria_schema);