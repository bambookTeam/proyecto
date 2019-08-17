'use strict';

const tbody = document.querySelector('#tbl_sucursales tbody');
let lista_sucursales = [];
let txt_filtro = document.querySelector('#txt_filtro');

let mostrar_tabla = async () => {

    lista_sucursales = await obtenerSucursales();
    tbody.innerHTML = " ";

    for (let i = 0; i < lista_sucursales.length; i++) {
        let fila = tbody.insertRow();
        fila.insertCell().innerHTML = lista_sucursales[i]['nombre'];
        fila.insertCell().innerHTML = lista_sucursales[i]['telefono'];
        fila.insertCell().innerHTML = lista_sucursales[i]['correo'];
        fila.insertCell().innerHTML = lista_sucursales[i]['direccion'];

        /*                    MODIFICAR SUCURSAL                   */
        let celda_modificar = fila.insertCell();
        let boton_modificar = document.createElement('button');
        boton_modificar.type = 'button';
        boton_modificar.innerText = 'Modificar';
        boton_modificar.dataset._id = lista_sucursales[i]['_id'];

        celda_modificar.appendChild(boton_modificar);

        boton_modificar.addEventListener('click', function () {
            //console.log(this.dataset._id);
            localStorage.setItem('idSucursal', lista_sucursales[i]['_id']);
            window.location.href = `modificar_sucursal.html?_id=${this.dataset._id}`
        });
        /*                    MODIFICAR SUCURSAL                   */


        let celda_agregar = fila.insertCell();
        let boton_agregar = document.createElement('button');

        boton_agregar.type = 'button';
        boton_agregar.innerText = 'Inventario';
        boton_agregar.dataset._id =lista_sucursales[i]['_id'];

        celda_agregar.appendChild(boton_agregar);

        boton_agregar.addEventListener('click', function(){

            window.location.href = 'inventario_sucursal.html';

        });
    }

};

let filtrar_tabla = async () => {

    let filtro = txt_filtro.value.toLowerCase();
    tbody.innerHTML = '';

    for (let i = 0; i < lista_sucursales.length; i++) {
        if (lista_sucursales[i]['nombre'].toLowerCase().includes(filtro) || lista_sucursales[i]['correo'].toLowerCase().includes(filtro)) {
            let fila = tbody.insertRow();
            fila.insertCell().innerHTML = lista_sucursales[i]['nombre'];
            fila.insertCell().innerHTML = lista_sucursales[i]['telefono'];
            fila.insertCell().innerHTML = lista_sucursales[i]['correo'];
            fila.insertCell().innerHTML = lista_sucursales[i]['direccion'];
        }
    }
};

mostrar_tabla();
txt_filtro.addEventListener('keyup', filtrar_tabla);
