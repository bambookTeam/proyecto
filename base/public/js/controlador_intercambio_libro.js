'use strict';
const tbody = document.querySelector('#tbl_libros tbody');
let lista_libros = [];
let txt_filtro = document.querySelector('#txt_filtro');


let redireccionar = async (libro) => {
    localStorage.setItem("infoLibroSolicitud", JSON.stringify(libro));
    window.location.href = 'infolibro_solicitud.html';    
}

let mostrar_tabla = async () => {

    lista_libros = await obtenerLibros();
    tbody.innerHTML = '';

    lista_libros = lista_libros.reverse();
    for (let i = 0; i < lista_libros.length; i++) {
        let fila = tbody.insertRow();
        fila.insertCell().innerHTML = lista_libros[i]['titulo'];
        fila.insertCell().innerHTML = lista_libros[i]['autor'];
        fila.insertCell().innerHTML = lista_libros[i]['edicion'];
        fila.insertCell().innerHTML = lista_libros[i]['genero'];
        fila.insertCell().innerHTML = lista_libros[i]['anno'];



        //Botón ver perfil
 
        let celda_btn_solicitar = fila.insertCell();
        let btn_solicitar = document.createElement('button');
        btn_solicitar.innerText = 'Solicitar';
        btn_solicitar.type = 'button';
       
        celda_btn_solicitar.appendChild(btn_solicitar);

        btn_solicitar.addEventListener('click', function () {
            redireccionar(lista_libros[i]);
        });
    }
}



window.addEventListener('load', mostrar_tabla);
