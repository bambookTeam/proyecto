'use strict';

const tbody = document.querySelector('#tbl_sucursales tbody');
let lista_sucursales = [];
let txt_filtro = document.querySelector('#txt_filtro');

// Como este listar Sucursales es para el admin de libreria, solo se le deben de mostrar las sucursales que le pertenecen


let mostrar_tabla = async() => {

    localStorage.removeItem("_idSucursal");
    
    lista_sucursales = [];
    lista_sucursales = await obtenerSucursalesLibreria();

    // Un servicio no deberia de llamar a un servicio, se deberia de hacer desde 

    tbody.innerHTML = " ";

    for (let i = 0; i <  lista_sucursales.length; i++) {
        let fila = tbody.insertRow();
        fila.insertCell().innerHTML = lista_sucursales[i]['nombre'];
        fila.insertCell().innerHTML = lista_sucursales[i]['telefono'];
        fila.insertCell().innerHTML = lista_sucursales[i]['correo'];
        fila.insertCell().innerHTML = lista_sucursales[i]['direccion'];


        
        let celda_agregar = fila.insertCell();
        let boton_agregar = document.createElement('button');

        boton_agregar.type = 'button';
        boton_agregar.innerText = 'Inventario';
        boton_agregar.dataset._id = lista_sucursales[i]['_id'];

        celda_agregar.appendChild(boton_agregar);

        boton_agregar.addEventListener('click', function () {

            localStorage.setItem('_idSucursal', lista_sucursales[i]['_id'] );

            window.location.href = 'inventario_sucursal.html';

        });

    }

};

let filtrar_tabla = async() => {

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