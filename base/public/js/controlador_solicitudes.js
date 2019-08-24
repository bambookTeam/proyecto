'use strict';
const tbody = document.querySelector('#tbl_libros tbody');
let lista_libros = [];


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
 
        let celda_btn_aceptar = fila.insertCell();
        let btn_aceptar = document.createElement('button');
        btn_aceptar.innerText = 'Aceptar';
        btn_aceptar.type = 'button';
       
        celda_btn_aceptar.appendChild(btn_aceptar);

        btn_aceptar.addEventListener('click', function () {
            localStorage.setItem("infoLibro", JSON.stringify(lista_libros[i]));
            window.location.href = 'infolibro_intercambio.html'

        });

        let celda_btn_rechazar = fila.insertCell();
        let btn_rechazar = document.createElement('button');
        btn_rechazar.innerText = 'Rechazar';
        btn_rechazar.type = 'button';
       
        celda_btn_rechazar.appendChild(btn_rechazar);

        btn_rechazar.addEventListener('click', function () {
            localStorage.setItem("infoLibro", JSON.stringify(lista_libros[i]));
            window.location.href = 'infolibro_intercambio.html'

        });
    }
}

window.addEventListener('load', mostrar_tabla);