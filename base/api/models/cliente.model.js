'use strict';

const mongoose = require('mongoose');



let cliente_shema = new mongoose.Schema({
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

});

module.exports = mongoose.model('Cliente', cliente_shema);


