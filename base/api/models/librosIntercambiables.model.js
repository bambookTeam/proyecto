'use strict';
const mongoose = require('mongoose');
let librosintercambiables_schema = new mongoose.Schema({
    idLibro:{type:String, required:true, unique:false},
    idOwner:{type:String, required:true, unique:false},
    estado: { type: Number, required: true, unique: false }
});



module.exports = mongoose.model('Libros_intercambiables',librosintercambiables_schema);