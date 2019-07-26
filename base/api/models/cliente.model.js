'use strict';

const mongoose = require('mongoose');

let cliente_schema = new mongoose.Schema({
    primerNombre: {type: String, required: true,unique: false},
    segundoNombre: {type: String, requiered: false, unique: false},
    primerApellido: {type: String, required: true,unique: false},
    segundoApellido: {type: String, requiered: false, unique: false},
    sexo: {type: String, requiered: true, unique:false},
    identificacion: {type: String, requiered: true, unique: true},
    correo: {type: String, required: true, unique: true},
    //distrito: {type: String, required: true, unique: false},
    direccion: {type: String, required: true, unique: false},
    nombreUsuario: {type: String, required: true, unique: false},
   // avatar:{type: Image, required: false, unique: false}        

   nombreUsuario: { type: String, required: false, unique: false },
   direccion: { type: String, required: false, unique: false }

   //provincia: {type: String, required: false, unique: false},
   //canton: {type: String, required: false, unique: false},
   //distrito: {type: String, required: false, unique: false},
});
module.exports = mongoose.model('Cliente', cliente_schema);

