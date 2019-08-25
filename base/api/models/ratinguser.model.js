'use strict';

const mongoose = require('mongoose');

let rating_schema = new mongoose.Schema({
    idUserRated: { type: String, required: true, unique: false },
    idRater: { type: String, required: true, unique: false },
    idIntercambio: { type: String, required: true, unique: true },
    rating: { type: Number, required: true, unique: false }
});

module.exports = mongoose.model('UserRating', rating_schema);