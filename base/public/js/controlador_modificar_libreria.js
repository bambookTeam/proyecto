'use strict';

let usuario = JSON.parse(localStorage.getItem("usuario"));

let lista_libreria;
let libreria = JSON.parse(localStorage.getItem("libreriaModificar"));;

let modificarLibreria = async () => {
    const input_nombre_comercial = document.querySelector('#txt_nombre_comercial').value;
    const input_nombre_fantasia = document.querySelector('#txt_nombre_fantasia').value;
    const input_direccion = document.querySelector('#txt_direccion').value;

    modificar_libreria(libreria._id, document.querySelector('#txt_nombre_comercial').value, document.querySelector('#txt_nombre_fantasia').value, document.querySelector('#txt_direccion').value);
}

document.querySelector("#btn_registrar").addEventListener("click", function () {
    modificarLibreria();
    window.location = 'listar_librerias.html'
});

let llenarFormulario = () => {


    document.querySelector('#txt_nombre_comercial').value = libreria.nombre_comercial;
    document.querySelector('#txt_nombre_fantasia').value = libreria.nombre_fantasia;
    document.querySelector('#txt_direccion').value = libreria.direccion;
    limpiar();
};

let limpiar = () => {
    localStorage.removeItem("libreriaModificar");
}

llenarFormulario();