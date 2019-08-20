'use strict';

const tbody = document.querySelector('#tbl_librerias tbody');
let lista_librerias = [];
let txt_filtro = document.querySelector('#txt_filtro');

let mostrar_tabla = async() => {

    lista_librerias = await obtenerLibrerias();

    lista_librerias = lista_librerias.reverse();
    tbody.innerHTML = '';

    for (let i = 0; i < lista_librerias.length; i++) {
        let fila = tbody.insertRow();
        fila.insertCell().innerHTML = lista_librerias[i]['nombre_comercial'];
        fila.insertCell().innerHTML = lista_librerias[i]['nombre_fantasia'];
        fila.insertCell().innerHTML = lista_librerias[i]['direccion'];
        fila.insertCell();

    /*                      VER PERFIL LIBRERÍA                   */
        let celda_perfil = fila.insertCell();
        let boton_perfil = document.createElement('button');
        boton_perfil.type = 'button';
        boton_perfil.innerText = 'Ver perfil';
        boton_perfil.dataset._id = lista_librerias[i]['_id'];

        celda_perfil.appendChild(boton_perfil);

        boton_perfil.addEventListener('click', function() {
            //console.log(this.dataset._id);
            localStorage.setItem('idLibreria', lista_librerias[i]['_id']);
            window.location.href = `visualizar_perfil_libreria.html?_id=${this.dataset._id}`
        });
    /*                      VER PERFIL LIBRERÍA                   */



    /*                    AGREGAR SUCURSAL                   */
        let celda_sucursal = fila.insertCell();
        let boton_sucursal = document.createElement('button');
        boton_sucursal.innerHTML = 'Agregar Sucursal';
        boton_sucursal.addEventListener('click', function(){
            localStorage.setItem('idLibreria', lista_librerias[i]['_id']);
            location.replace('registrar_sucursal.html');
        });

        celda_sucursal.appendChild(boton_sucursal);
    /*                    AGREGAR SUCURSAL                   */

    /*                    MODIFICAR LIBRERÍA                   */
        let celda_modificar = fila.insertCell();
        let boton_modificar = document.createElement('button');
        boton_modificar.type = 'button';
        boton_modificar.innerText = 'Modificar';
        boton_modificar.dataset._id = lista_librerias[i]['_id'];

        celda_modificar.appendChild(boton_modificar);

        boton_modificar.addEventListener('click', function() {
            //console.log(this.dataset._id);
            localStorage.setItem('idLibreria', lista_librerias[i]['_id']);
            window.location.href = `modificar_libreria.html?_id=${this.dataset._id}`
        });
    /*                    MODIFICAR LIBRERÍA                   */

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