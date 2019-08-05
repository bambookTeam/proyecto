'use strict'

const mongoose = require('mongoose');

//Esquema de la sucursal
let libreria_schema = new mongoose.Schema({
    nombre_comercial: { type: String, required: true, unique: false },
    nombre_fantasia: { type: String, required: true, unique: false },
    direccion: { type: String, required: true, unique: false }
});

module.exports = mongoose.model('Libreria', libreria_schema);