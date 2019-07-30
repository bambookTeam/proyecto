'use strict';

const urlParams = new URLSearchParams(window.location.search);

let _id = urlParams.get('_id');

const nombre_comercial = document.querySelector('#txt_nombre_comercial');
const nombre_fantasia = document.querySelector('#txt_nombre_fantasia');
const direccion = document.querySelector('#txt_direccion');


let llenar_perfil = async() => {
    let libreria = await obtenerLibreriaId(_id);
    if (libreria) {
        nombre_comercial.innerHTML = libreria['nombre_comercial'];
        nombre_fantasia.innerHTML = libreria['nombre_fantasia'];
        direccion.innerHTML = libreria['direccion'];
    }
};

llenar_perfil();