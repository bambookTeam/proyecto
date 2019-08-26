'use strict'

var lista_inventario = [];
var librosComprados = [];
var usuarios = [];
// var libros = [];

const urlParams = new URLSearchParams(window.location.search);
const tbody = document.querySelector('#tbl_libros tbody');

let txt_filtro = document.querySelector('#txt_filtro');

let idLibreria = urlParams.get('_id');

let traerUsuarios = async () => {
    usuarios = await obtenerUsuarios();
}


traerUsuarios();

// let traerLibros = async () => {
//     libros = await obtenerLibros();
// }

// traerLibros();


let redireccionar = (libroIntercambio) => {
    localStorage.setItem("libroIntercambio", JSON.stringify(libroIntercambio));
    window.location = "infolibro_solicitud.html";
}


let mostrar_tabla = async () => {

    librosComprados = await obtenerLibrosComprados();
    tbody.innerHTML = '';




    for (let i = 0; i < librosComprados.length; i++) {

        // filtro para no mostrar los libros comprados por el mismo usuario
        if (librosComprados[i].idCliente != sessionStorage.getItem("id")) {

            let usuario = usuarios.find(usuarios => usuarios._id === librosComprados[i].idCliente);

            let fila = tbody.insertRow();
            fila.insertCell().innerHTML = librosComprados[i].titulo;
            fila.insertCell().innerHTML = librosComprados[i].isbn;
            fila.insertCell().innerHTML = usuario.primerNombre + " " + usuario.primerApellido;

            //Botón ver perfil

            let celda_btn_solicitar = fila.insertCell();
            let btn_solicitar = document.createElement('button');
            btn_solicitar.innerText = 'Solicitar intercambio';
            btn_solicitar.type = 'button';

            celda_btn_solicitar.appendChild(btn_solicitar);

            btn_solicitar.addEventListener('click', function () {
                redireccionar(librosComprados[i]);
            });
        }
    }
}

let filtrar_tabla = async () => {

    let filtro = txt_filtro.value.toLowerCase();
    tbody.innerHTML = '';


    for (let i = 0; i < librosComprados.length; i++) {
        if (librosComprados[i]['titulo'].toLowerCase().includes(filtro)) {



            // filtro para no mostrar los libros comprados por el mismo usuario
            if (librosComprados[i].idCliente != sessionStorage.getItem("id")) {

                let usuario = usuarios.find(usuarios => usuarios._id === librosComprados[i].idCliente);

                let fila = tbody.insertRow();
                fila.insertCell().innerHTML = librosComprados[i].titulo;
                fila.insertCell().innerHTML = librosComprados[i].isbn;
                fila.insertCell().innerHTML = usuario.primerNombre + " " + usuario.primerApellido;

                //Botón ver perfil

                let celda_btn_solicitar = fila.insertCell();
                let btn_solicitar = document.createElement('button');
                btn_solicitar.innerText = 'Solicitar intercambio';
                btn_solicitar.type = 'button';

                celda_btn_solicitar.appendChild(btn_solicitar);

                btn_solicitar.addEventListener('click', function () {
                    redireccionar(librosComprados[i]);
                });
            }




        }

    }

}

window.addEventListener('load', mostrar_tabla);
txt_filtro.addEventListener('keyup', filtrar_tabla);
