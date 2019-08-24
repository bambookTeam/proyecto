'use strict';

const mongoose = require('mongoose');

let userRating_schema = new mongoose.Schema({
    idUsuarioRated: {type:String, required:true, unique:true},
    ratings: [{
        idRater: { type: String, required: true, unique: false },
        descripcion: { type: String, required: true, unique: false },
        calificacion: { type:String, required:true,unique:false}
    }]
});

module.exports = mongoose.model('RatingUsuario', userRating_schema);