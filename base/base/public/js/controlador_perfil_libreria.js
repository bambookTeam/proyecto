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

const tbody = document.querySelector('#tbl_sucursales tbody');

let lista_sucursales = [];

let mostrar_tabla = async() => {

    lista_sucursales = await obtenerSucursales();

    tbody.innerHTML = '';

    for (let i = 0; i < lista_sucursales.length; i++) {
        let fila = tbody.insertRow();
        fila.insertCell().innerHTML = lista_sucursales[i]['nombre'];
        fila.insertCell().innerHTML = lista_sucursales[i]['direccion'];
    }
};

llenar_perfil();

mostrar_tabla();