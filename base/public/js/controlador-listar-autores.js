'use strict';

const tbody = document.querySelector('#tbl-autores tbody');
let lista_autores = [];
let txt_filtro = document.querySelector('#txt_filtro');


let mostrar_tabla = async () => {

    lista_autores = await obtenerAutores();
    tbody.innerHTML = '';


    for (let i = 0; i < lista_autores.length; i++) {
        let fila = tbody.insertRow();
        fila.insertCell().innerHTML = lista_autores[i]['nombre_autor'];
        fila.insertCell().innerHTML = lista_autores[i]['nombre_artistico_autor'];
        fila.insertCell().innerHTML = lista_autores[i]['nacionalidad_autor'];

        let celda_perfil = fila.insertCell();
        let boton_perfil = document.createElement('button');
        boton_perfil.type = 'button';
        boton_perfil.innerText = 'Ver perfil';
        boton_perfil.dataset._id = lista_autores[i]['_id'];

        celda_perfil.appendChild(boton_perfil);

        boton_perfil.addEventListener('click', function() {
            //console.log(this.dataset._id);
            window.location.href = `ver-perfil-autor.html?_id=${this.dataset._id}`
        });



    }


};

let filtrar_tabla = async () => {

    let filtro = txt_filtro.value.toLowerCase();
    tbody.innerHTML = '';


    for (let i = 0; i < lista_autores.length; i++) {
        if (lista_autores[i]['nombre_autor'].toLowerCase().includes(filtro) || lista_autores[i]['nacionalidad_autor'].toLowerCase().includes(filtro)) {
            let fila = tbody.insertRow();
            fila.insertCell().innerHTML = lista_autores[i]['nombre_autor'];
            fila.insertCell().innerHTML = lista_autores[i]['nombre_artistico_autor'];
            fila.insertCell().innerHTML = lista_autores[i]['nacionalidad_autor'];

            let celda_perfil = fila.insertCell();
            let boton_perfil = document.createElement('button');
            boton_perfil.type = 'button';
            boton_perfil.innerText = 'Ver perfil';
            boton_perfil.dataset._id = lista_autores[i]['_id'];
    
            celda_perfil.appendChild(boton_perfil);
    
            boton_perfil.addEventListener('click', function() {
                //console.log(this.dataset._id);
                window.location.href = `ver-perfil-autor.html?_id=${this.dataset._id}`
            });
        }

    }


};


mostrar_tabla();
txt_filtro.addEventListener('keyup', filtrar_tabla);