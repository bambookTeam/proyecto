'use strict'

const mongoose = require('mongoose');

//Esquema de la sucursal
let sucursal_schema = new mongoose.Schema({
    nombre: { type: String, required: true, unique: false },
    telefono: { type: Number, required: true, unique: false },
    correo: { type: String, required: true, unique: false },
    direccion: { type: String, required: true, unique: false }
});

module.exports = mongoose.model('Sucursal', sucursal_schema);