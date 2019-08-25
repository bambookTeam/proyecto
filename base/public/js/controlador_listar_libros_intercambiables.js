'use strict'

var lista_inventario = [];
var librosComprados = [];

const  urlParams = new URLSearchParams(window.location.search);
const tbody = document.querySelector('#tbl_libros tbody');

let txt_filtro = document.querySelector('#txt_filtro');

let idLibreria = urlParams.get('_id');


let mostrar_tabla = async () => {

    let librosComprados = await crearTablaLibros();
    tbody.innerHTML = '';

   
    for (let i = 0; i < librosComprados.length; i++) {
        let fila = tbody.insertRow();
        fila.insertCell().innerHTML = librosComprados[i]['idOwner'];
        fila.insertCell().innerHTML = librosComprados[i]['titulo'];
        fila.insertCell().innerHTML = librosComprados[i]['autor'];
        fila.insertCell().innerHTML = librosComprados[i]['edicion'];
        fila.insertCell().innerHTML = librosComprados[i]['genero'];
        fila.insertCell().innerHTML = librosComprados[i]['anno'];



        //Botón ver perfil
 
        let celda_btn_solicitar = fila.insertCell();
        let btn_solicitar = document.createElement('button');
        btn_solicitar.innerText = 'Solicitar';
        btn_solicitar.type = 'button';
       
        celda_btn_solicitar.appendChild(btn_solicitar);

        btn_solicitar.addEventListener('click', function () {
            redireccionar(librosComprados[i]);
        });
    }
}

let filtrar_tabla = async () => {

    let filtro = txt_filtro.value.toLowerCase();
    tbody.innerHTML = '';


    for (let i = 0; i < librosComprados.length; i++) {
            if (librosComprados[i]['titulo'].toLowerCase().includes(filtro)) {
                let fila = tbody.insertRow();
                fila.insertCell().innerHTML = librosComprados[i]['titulo'];
                fila.insertCell().innerHTML = librosComprados[i]['autor'];
                fila.insertCell().innerHTML = librosComprados[i]['edicion'];
                fila.insertCell().innerHTML = librosComprados[i]['genero'];
                fila.insertCell().innerHTML = librosComprados[i]['año'];

                //Botón ver perfil

                 
                let celda_btn_solicitar = fila.insertCell();
                let btn_solicitar = document.createElement('button','a');
                btn_solicitar.innerText = 'Solicitar';
                btn_solicitar.type = 'button';

                btn_solicitar.dataset._id = librosComprados[i]['_id'];

                celda_btn_solicitar.appendChild(btn_solicitar);

                btn_solicitar.addEventListener('click', function () {
                    redireccionar(librosComprados[i]);

                });

            
        
            
        }

    }
        
}

window.addEventListener('load', mostrar_tabla);
txt_filtro.addEventListener('keyup', filtrar_tabla);
