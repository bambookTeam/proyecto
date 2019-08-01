'use strict';
const tbody = document.querySelector('#tbl_libros tbody');
let lista_libros = [];
//let txt_filtro = document.querySelector('#txt_filtro');




let mostrar_tabla = async () =>{
    lista_libros 0 await listar_Libros ();
    for (let i=0; i<lista_libros.length; i++) {
        let contedor_card = document.createElement('div');
        let header = document.createElement('header');
        let titulo_libro = document.createElement('h2');
        header.appendChild(titulo_libro);

        let contenedor_portada = document.createElement('div');
        let portada = document.createElement('img');
        contenedor_portada.appendChild(portada);

        let isbn = document.createElement('p');

        let isbn = document.createElement('p');

        let isbn = document.createElement('p');

        let isbn = document.createElement('p');

        let isbn = document.createElement('p');

        let isbn = document.createElement('p');

        let btn_perfil = document.createElement('button');



    }
   
}

window.addEventListener('load',mostrar_tabla);