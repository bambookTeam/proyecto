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


let mostrar_tabla = async() => {

    lista_sucursales = await obtenerSucursales();

    lista_sucursales = lista_sucursales.reverse();

    tbody.innerHTML = '';

    for (let i = 0; i < lista_sucursales.length; i++) {
        let fila = tbody.insertRow();
        fila.insertCell().innerHTML = lista_sucursales[i]['nombre'];
        fila.insertCell();

        let celda_perfil = fila.insertCell();
        let boton_perfil = document.createElement('button');
        boton_perfil.type = 'button';
        boton_perfil.innerText = 'Ver perfil';
        boton_perfil.dataset._id = lista_sucursales[i]['_id'];

        celda_perfil.appendChild(boton_perfil);

        boton_perfil.addEventListener('click', function() {
            //console.log(this.dataset._id);
            window.location.href = `visualizar_perfil_libreria.html?_id=${this.dataset._id}`
        });



        let celda_sucursal = fila.insertCell();
        let boton_sucursal = document.createElement('button');
        boton_sucursal.innerHTML = 'Agregar Sucursal';
        boton_sucursal.addEventListener('click', function(){
            localStorage.setItem('idLibreria', lista_sucursales[i]['_id']);
            location.replace('registrar_sucursal.html');
        })

        celda_sucursal.appendChild(boton_sucursal);
    }
};
llenar_perfil();