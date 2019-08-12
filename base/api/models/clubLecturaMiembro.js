'use strict';

const mongoose = require('mongoose');

//Esquema del  club de Lectura

let clubMiembro_schema = new mongoose.Schema({
    idClub: {type:String, required:true, unique:false},
    idUsuario: {type:String, required:true, unique:false},
});

module.exports = mongoose.model('ClubMiembro', clubMiembro_schema);