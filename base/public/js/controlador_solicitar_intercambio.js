'use strict';

let usuario = JSON.parse(localStorage.getItem("usuario"));
let lista_libros = [];

let intercambio;

let  = async (id) => {
    let response = await modificarIntercambio(intercambio._id, document.getElementById("txt-genero").value);
    console.log(response);
    if(response) {
      window.location.href = 'intercambios.html'
    }

}


let mostrar_tabla =  () => {

    lista_libros = JSON.parse(localStorage.getItem("usuario"));
    tbody.innerHTML = '';

        let fila = tbody.insertRow();
        fila.insertCell().innerHTML = lista_libros.titulo;
        fila.insertCell().innerHTML = lista_libros.autor;
        fila.insertCell().innerHTML = lista_libros.edicion;
        fila.insertCell().innerHTML = lista_libros.genero;
        fila.insertCell().innerHTML = lista_libros.anno;
        
}

// document.getElementById("btn-agregar").addEventListener("click", llamarModicarGenero);


let limpiar = () => {
    localStorage.removeItem("_idGenero");
}

m