'use strict'

const mongoose = require('mongoose');

let categoria_schema = new mongoose.Schema({
    nombre: {type: String, required: true, unique: false}    

});


module.exports = mongoose.model('Categoria', categoria_schema);