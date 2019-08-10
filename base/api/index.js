'use strict';

const express = require("express");
const body_parser = require("body-parser");
const cors = require('cors');
const mongoose = require('mongoose');

//Se declaran todos los accesos de los archivos routes.
const autor_route = require('./router/autor');

const libreria_route = require('./router/libreria');
const genero_route = require('./router/genero');
const categoria_route = require('./router/categoria');
const clubLectura_route = require('./router/clubLectura');
const evento_route = require('./router/evento');
const usuario_route = require('./router/usuario');
const libro_route = require('./router/libros');
const oferta_route = require('./router/oferta');
const tarjeta_route = require('./router/tarjeta');
const inventarioGeneral_route = require('./router/inventarioGeneral');

const sucursal_route = require('./router/sucursal');



const app = express();
app.use(cors());
app.use(express.static(__dirname + "/public"));
app.use(body_parser.json());
app.use(body_parser.urlencoded({ extended: false }));

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, X-Response-Time, X-PINGOTHER, X-CSRF-Token,Authorization');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

// Se crea variable db para ser reutilizada en el "callback".
let db;
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', false);

// { useFindAndModify: true }, { useCreateIndex: true }, 

//Se conecta la base de datos antes de levantar el servidor, mediante los datos del archivo .env en la raiz del proyecto.
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useFindAndModify: false, useCreateIndex: true }, function (err, database) {
    if (err) {
        console.log(err);
        process.exit(1);
    }

    //Guarda el objeto db para que el callback la pueda reutilizar.
    db = database;
    console.log("Se estableció la conexión con la base datos.");

    // Se inicia la aplicacion.
    const server = app.listen(process.env.PORT || 8000, function () {
        let port = server.address().port;
        console.log("El backend está levantado en el puerto: ", port);
    });
});


//Error general en caso de que falle un "endpoint".
function handleError(res, reason, message, code) {
    console.log("ERROR: " + reason);
    res.status(code || 500).json({ "error": message });
}

// Conexion a todas la rutas.z
app.use('/api', autor_route);

app.use('/api', libreria_route);
app.use('/api', genero_route);
app.use('/api', tarjeta_route);
//ARI


//SEBAS
app.use('/api', clubLectura_route);
app.use('/api', evento_route);
app.use('/api', usuario_route);
app.use('/api', categoria_route);
app.use('/api', clubLectura_route);
app.use('/api', evento_route);
app.use('/api', libro_route);
app.use('/api', oferta_route);
app.use('/api', inventarioGeneral_route);

app.use('/api', sucursal_route);


//localhost:3000/api/registrar-sucursal

