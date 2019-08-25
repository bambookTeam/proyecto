'use strict';
const mongoose = require('mongoose');

// Esquema tarjeta

let solicitudintercambio_schema = new mongoose.Schema({
   idOwner :{type:String, required:true, unique:true},
   idLibroOwner :{type:String, required:true, unique:true},
   idLibroSender :{type:String, required:true, unique:true},
   idSender :{type:String, required:true, unique:true},
   fecha :{type:Date, required:true, unique:true},
   sucursal :{type:String, required:true, unique:true},
   libreria :{type:String, required:true, unique:true},
     estado: { type: String, required: true, unique: false }

});



module.exports = mongoose.model('Solicitud',solicitudintercambio_schema);