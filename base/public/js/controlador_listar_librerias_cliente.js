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

        //botón ver perfil libreria
        let celda_perfil = fila.insertCell();
        let boton_perfil = document.createElement('button');
        boton_perfil.type = 'button';
        boton_perfil.innerText = 'Ver perfil';
        boton_perfil.dataset._id = lista_librerias[i]['_id'];

        celda_perfil.appendChild(boton_perfil);

        boton_perfil.addEventListener('click', function() {
            window.location.href = `visualizar_perfil_libreria.html?_id=${this.dataset._id}`
        });

        let celda_libros = fila.insertCell();
        let boton_libros = document.createElement('button');
        boton_libros.type = 'button'; 
        boton_libros.innerText = 'Libros';
        boton_libros.dataset._id = lista_librerias[i]['_id'];
        
        celda_libros.appendChild(boton_libros);

        boton_libros.addEventListener('click', function(){


            window.location.href = `listar_librosComprables.html?_id=${this.dataset._id}`

            localStorage.setItem("idLibreria", lista_librerias[i]['_id']);
        } );

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