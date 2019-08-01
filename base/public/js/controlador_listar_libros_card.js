'use strict';
const tbody = document.querySelector('#tbl_libros tbody');
let lista_libros = [];
const sct_libros = document.querySelector('#lista_libros');
//let txt_filtro = document.querySelector('#txt_filtro');




let mostrar_tabla = async () =>{
    lista_libros = await listar_Libros ();
    for (let i=0; i<lista_libros.length; i++) {
        let contedor_card = document.createElement('div');
        contedor_card.classList.add('card');
        let header = document.createElement('header');
        let titulo_libro = document.createElement('h2');
        header.appendChild(titulo_libro);

        let contenedor_portada = document.createElement('div');
        let portada = document.createElement('img');
        contenedor_portada.appendChild(portada);

        portada.src ='#img_preview';
        contenedor_portada.classList.add('contenedor_imagen');

        let edicion = document.createElement('p');
        let editorial = document.createElement('p');
        let autor = document.createElement('p');
        let anno = document.createElement('p');
        let idioma = document.createElement('p');
        let isbn = document.createElement('p');
        let genero = document.createElement('p');
        let tipo = document.createElement('p');
        let existencia = document.createElement('p');
        let precio = document.createElement('p');        

        let btn_perfil = document.createElement('button');

        contedor_card.appendChild(header);
        contedor_card.appendChild(contenedor_portada);
        contedor_card.appendChild(edicion);
        contedor_card.appendChild(editorial);
        contedor_card.appendChild(autor);
        contedor_card.appendChild(anno);
        contedor_card.appendChild(idioma);
        contedor_card.appendChild(isbn);
        contedor_card.appendChild(genero);
        contedor_card.appendChild(tipo);
        contedor_card.appendChild(existencia);
        contedor_card.appendChild(precio);
        contedor_card.appendChild(btn_perfil);

        sct_libros.appendChild(contedor_card);

        // contedor_card.innerHTML = lista_libros[i]['portada'];
        titulo_libro.innerText = lista_libros [i]['titulo'];
        edicion.innerText = lista_libros[i]['edicion'];
        editorial.innerText = lista_libros[i]['editorial'];
        autor.innerText = lista_libros[i]['autor'];
        anno.innerText = lista_libros[i]['anno'];
        idioma.innerText = lista_libros[i]['idioma'];
        isbn.innerHTML = lista_libros[i]['isbn'];
        genero.innerHTML = lista_libros[i]['genero'];
        tipo.innerHTML = lista_libros[i]['tipo'];
        existencia.innerHTML = lista_libros[i]['existencia'];
        precio.innerHTML = lista_libros[i]['precio'];
        btn_perfil.innerText = 'Ver perfil';
        




    }
   
}

window.addEventListener('load',mostrar_tabla);