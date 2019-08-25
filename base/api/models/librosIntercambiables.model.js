'use strict';
const mongoose = require('mongoose');

// Esquema tarjeta

let librosintercambiables_schema = new mongoose.Schema({
    idLibro:{type:String, required:true, unique:true},
    idOwner:{type:String, required:true, unique:true},
    estado: { type: String, required: true, unique: false }

});



module.exports = mongoose.model('Intercambios',librosintercambiables_schema);