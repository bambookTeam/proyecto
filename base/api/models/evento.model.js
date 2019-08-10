'use strict';

const mongoose = require('mongoose');

//Esquema del  club de Lectura

let evento_schema = new mongoose.Schema({
    nombre_Evento: {type:String, required:true,unique:false},
    idClub: {type:String, required:true, unique:false},
    libro: {type:String, required:true, unique:false}
});

module.exports = mongoose.model('Evento', evento_schema);

