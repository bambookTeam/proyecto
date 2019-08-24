'use strict'

const mongoose = require('mongoose');

let bitacora_schema = new mongoose.Schema({
    usuarioRegistrado: {type: String, required: true, unique: true},
    descripcion:{type: String, required: true, unique: false},
    fecha:{type:Date,required:true,unique:false}   
});


module.exports = mongoose.model('Bitacora', bitacora_schema);