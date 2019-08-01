'use strict';
const tbody = document.querySelector('#tbl_libros tbody');
let lista_libros = [];
let txt_filtro = document.querySelector('#txt_filtro');




let mostrar_tabla = async () =>{

    lista_libros = await  listar_Libros();
    // console.log(lista_libros);
    tbody.innerHTML = '';

    for (let i=0; i<lista_libros.length; i++){
        let fila = tbody.insertRow();
        fila.insertCell().innerHTML = lista_libros[i]['titulo'];
        fila.insertCell().innerHTML = lista_libros[i]['edición'];
        fila.insertCell().innerHTML = lista_libros[i]['editorial'];
        fila.insertCell().innerHTML = lista_libros[i]['autor'];
        fila.insertCell().innerHTML = lista_libros[i]['año'];
        fila.insertCell().innerHTML = lista_libros[i]['idioma'];
        fila.insertCell().innerHTML = lista_libros[i]['isbn'];
        fila.insertCell().innerHTML = lista_libros[i]['genero'];
        fila.insertCell().innerHTML = lista_libros[i]['tipo'];
        fila.insertCell().innerHTML = lista_libros[i]['existencia'];
        fila.insertCell().innerHTML = lista_libros[i]['precio'];
        fila.insertCell().innerHTML = lista_libros[i]['portada'];

    }
}

window.addEventListener('load',mostrar_tabla);