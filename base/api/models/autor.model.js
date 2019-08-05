'use strict';

const mongoose = require('mongoose');

//Esquema del autor

let autor_schema = new mongoose.Schema({
    nombre_autor: { type: String, required: true, unique: false },
    nombre_artistico_autor: { type: String, required: true, unique: false },
    fecha_nacimiento: { type: Date, required: true, unique: false },
    fecha_muerte: { type: Date, required: true, unique: false },
    nacionalidad_autor: { type: String, required: true, unique: false },
    biografia_autor:{ type: String, required: true, unique: false },
    premios_autor: { type: String, required: true, unique: false },
    foto_autor: {type: String, required: true, unique: false}

});

module.exports = mongoose.model('Autor', autor_schema);
