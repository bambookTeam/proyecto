'use strict'

const mongoose = require('mongoose');

//Esquema de la sucursal
let admin_libreria_schema = new mongoose.Schema({
    identificacion: { type: String, required: true, unique: false },
    primer_nombre: { type: String, required: true, unique: false },
    segundo_nombre: { type: String, required: true, unique: false },
    primer_apellido: { type: String, required: true, unique: false },
    segundo_apellido: { type: String, required: true, unique: false },
    sexo: { type: String, required: true, unique: false },
    correo: { type: String, required: true, unique: false }
});

module.exports = mongoose.model('', admin_libreria_schema);