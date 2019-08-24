'use strict';
const mongoose = require('mongoose');

// Esquema tarjeta

let tarjeta_schema = new mongoose.Schema({
    id: { type: String, required: true, unique: false },
    numerotarjeta: { type: String, required: true, unique: false },
    fechavencimiento: { type: String, required: true, unique: false },
    codigocvv: { type: String, required: true, unique: true },
    estado: { type: String, required: true, unique: false }

});

module.exports = mongoose.model('Tarjeta', tarjeta_schema);