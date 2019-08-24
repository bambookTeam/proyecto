'use strict';

const mongoose = require('mongoose');

//Esquema del  club de Lectura

let chat_schema = new mongoose.Schema({
    idClub: {type:String, required:true, unique:true},
    mensajes: [{
        idSender: { type: String, required: true, unique: false },
        descripcion: { type: String, required: true, unique: false },
        hora: { type: String, required: true, unique: false }
    }]
});

module.exports = mongoose.model('Chat', chat_schema);