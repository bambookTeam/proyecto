'use strict';

const mongoose = require('mongoose');

let cliente_shema = new mongoose.Schema({

   identificacion: { type: String, requiered: true, unique: true },
   primerNombre: { type: String, required: true, unique: false },
   segundoNombre: { type: String, requiered: false, unique: false },
   primerApellido: { type: String, required: true, unique: false },
   segundoApellido: { type: String, requiered: false, unique: false },
   sexo: { type: String, requiered: true, unique: false },
   correo: { type: String, required: true, unique: true },

   nombreUsuario: { type: String, required: false, unique: false },
   direccion: { type: String, required: false, unique: false },

   //provincia: {type: String, required: false, unique: false},
   //canton: {type: String, required: false, unique: false},
   //distrito: {type: String, required: false, unique: false},

   // avatar:{type: Image, required: false, unique: false}

});

module.exports = mongoose.model('Cliente', cliente_shema);