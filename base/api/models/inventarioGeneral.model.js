'use strict'


const mongoose = require('mongoose');

let inventarioGeneral_schema = new mongoose.Schema({
    isbn: {type: String, required: true, unique: true},
    cant: {type: Number, required: true, unique: false},

});

module.exports = mongoose.model('InventarioGeneral', inventarioGeneral_schema );