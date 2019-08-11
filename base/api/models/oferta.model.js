'use strict';

const mongoose = require('mongoose');

//Esquema del libro

let oferta_schema = new mongoose.Schema({
    
    id: { type: String, required: true, unique: false },
    imagen: { type: String, required: true, unique: false }


});

module.exports = mongoose.model('Oferta', oferta_schema);