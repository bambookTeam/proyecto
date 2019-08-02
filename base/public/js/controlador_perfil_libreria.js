'use strict';

const urlParams = new URLSearchParams(window.location.search);

let _id = urlParams.get('_id');

const nombre_comercial = document.querySelector('#txt_nombre_comercial');
const direccion = document.querySelector('#txt_direccion');


let llenar_perfil = async() => {
    let libreria = await obtenerLibreriaId(_id);
    if (libreria) {
        nombre_comercial.innerHTML = libreria['nombre_comercial'];
        direccion.innerHTML = libreria['direccion'];
    }
};

llenar_perfil();