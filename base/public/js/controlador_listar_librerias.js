'use strict';

const tbody = document.querySelector('#tbl_librerias tbody');
let lista_librerias = [];
let txt_filtro = document.querySelector('#txt_filtro');

let mostrar_tabla = async() => {

    lista_librerias = await obtenerLibrerias();
    tbody.innerHTML = '';

    for (let i = 0; i < lista_librerias.length; i++) {
        let fila = tbody.insertRow();
        fila.insertCell().innerHTML = lista_librerias[i]['nombre_comercial'];
        fila.insertCell().innerHTML = lista_librerias[i]['nombre_fantasia'];
        fila.insertCell().innerHTML = lista_librerias[i]['direccion'];
    }
};

let filtrar_tabla = async() => {

    let filtro = txt_filtro.value.toLowerCase();
    tbody.innerHTML = '';

    for (let i = 0; i < lista_librerias.length; i++) {
        if (lista_librerias[i]['nombre_comercial'].toLowerCase().includes(filtro)) {
            let fila = tbody.insertRow();
            fila.insertCell().innerHTML = lista_librerias[i]['nombre_comercial'];
            fila.insertCell().innerHTML = lista_librerias[i]['nombre_fantasia'];
            fila.insertCell().innerHTML = lista_librerias[i]['direccion'];
        }
    }
};

mostrar_tabla();
txt_filtro.addEventListener('keyup', filtrar_tabla);