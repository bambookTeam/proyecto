'use strict';

const mongoose = require('mongoose');

//Esquema del  club de Lectura

let clubLectura_schema = new mongoose.Schema({
    nombre_Club: {type:String, required:true, unique:false},
    modalidad: {type:String, required:true, unique:false},
    fechaInicio: {type:Date, required:true, unique:false},
    fechaFin: {type:Date, required:true, unique:false},
    hora: {type:String, required:true, unique:false},
    frecuencia: {type:String, required:true, unique:false},
    tema: {type:String, required:true, unique:false},
    genero: {type:String, required:false, unique:false},
    categoria: {type: String, required:false, unique:false},
    libreria: {type: String, required:true, unique:false},
    sucursal: {type: String, required:true, unique:false},
    idAdmin: {type: String, required:true, unique:false},
    estado: {type:String, required:true,unique:false}
});

module.exports = mongoose.model('ClubLectura', clubLectura_schema);