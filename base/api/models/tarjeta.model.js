'use strict';
const mongoose = require('mongoose');

// Esquema tarjeta

let tarjeta_schema = new mongoose.Schema({
    numerotarjeta:{type:Number, required:true, unique:true},
    fechavencimiento:{type:Date, required:true, unique:false},
    codigocvv:{type:Number, required:true, unique:true}

});

module.exports = mongoose.model('Tarjeta',tarjeta_schema);