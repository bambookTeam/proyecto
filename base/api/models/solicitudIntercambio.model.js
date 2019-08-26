'use strict';
const mongoose = require('mongoose');

// Esquema tarjeta

let solicitudintercambio_schema = new mongoose.Schema({
    idOwner: { type: String, required: false, unique: false },
    idLibroSender: { type: String, required: true, unique: false },
    idSender: { type: String, required: true, unique: false },
    fecha: { type: String, required: true, unique: false },
    sucursal: { type: String, required: true, unique: false },
    estado: { type: Number, required: true, unique: false }

});


module.exports = mongoose.model('Intercambiossolicitados', solicitudintercambio_schema);