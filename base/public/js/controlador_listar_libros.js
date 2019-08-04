'use strict';
let txt_filtro = document.querySelector('#txt_filtro');
const tbody = document.querySelector('#tbl_libros tbody');
let lista_libros = [];




let mostrar_tabla = async () => {

    lista_libros = await listar_Libros();
    tbody.innerHTML = '';

    for (let i = 0; i < lista_libros.length; i++) {
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
};


let filtrar_tabla = async () => {

    let filtro = txt_filtro.value.toLowerCase();
    tbody.innerHTML = '';


    for (let i = 0; i < lista_libros.length; i++) {
        if (lista_libros[i]['titulo'].toLowerCase().includes(filtro)){
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

};

txt_filtro.addEventListener('keyup', filtrar_tabla);


window.addEventListener('load', mostrar_tabla);