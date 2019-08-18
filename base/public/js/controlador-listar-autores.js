'use strict';

const tbody = document.querySelector('#tbl-autores tbody');
let lista_autores = [];
let txt_filtro = document.querySelector('#txt_filtro');


let mostrar_tabla = async () => {

    lista_autores = await obtenerAutores();
    tbody.innerHTML = '';


    for (let i = 0; i < lista_autores.length; i++) {
        let fila = tbody.insertRow();
        fila.insertCell().innerHTML = lista_autores[i]['nombre_autor'];
        fila.insertCell().innerHTML = lista_autores[i]['nombre_artistico_autor'];
        fila.insertCell().innerHTML = lista_autores[i]['nacionalidad_autor'];

        // let celda_perfil = fila.insertCell();
        // let boton_perfil = document.createElement('button');
        // boton_perfil.type = 'button';
        // boton_perfil.innerText = 'Ver perfil';
        // boton_perfil.dataset._id = lista_autores[i]['_id'];

        // celda_perfil.appendChild(boton_perfil);

        // boton_perfil.addEventListener('click', function() {
        //     //console.log(this.dataset._id);
        //     window.location.href = `ver-perfil-autor.html?_id=${this.dataset._id}`
        // });


        //Botón ver perifl

        let estilos_btn_perfil = document.createElement('img');
            estilos_btn_perfil.setAttribute('src', './imgs/user-perfil-icon.png');

            let celda_btn_perfil = fila.insertCell();
            let btn_perfil = document.createElement('button');
            btn_perfil.type = 'button';

            btn_perfil.dataset._id = lista_autores[i]['_id'];

            celda_btn_perfil.appendChild(btn_perfil);
            btn_perfil.appendChild(estilos_btn_perfil);

            btn_perfil.addEventListener('click', function () {
                localStorage.setItem("infoAutor", JSON.stringify(lista_autores[i]));
                window.location.href = 'ver-perfil-autor.html'

            });


        //Botón editar

        let estilos_btn_modificar = document.createElement('img');
        estilos_btn_modificar.setAttribute('src', './imgs/edit-icon.png')

        let celda_btn_modificar = fila.insertCell();
        let btn_modificar = document.createElement('button');
        btn_modificar.type = 'button';

        btn_modificar.dataset._id = lista_autores[i]['_id'];

        celda_btn_modificar.appendChild(btn_modificar);
        btn_modificar.appendChild(estilos_btn_modificar);

        btn_modificar.addEventListener('click', function () {
            localStorage.setItem("_idAutor", lista_autores[i]._id);
            window.location.href = 'modificar_autor.html'
        })


        //Botón modificar

        let estilos_btn_eliminar = document.createElement('img');
        estilos_btn_eliminar.setAttribute('src', './imgs/delete-icon.png')

        let celda_btn_eliminar = fila.insertCell();
        let btn_eliminar = document.createElement('button');
        btn_eliminar.type = 'button';

        btn_eliminar.dataset._id = lista_autores[i]['_id'];

        celda_btn_eliminar.appendChild(btn_eliminar);
        btn_eliminar.appendChild(estilos_btn_eliminar);

        btn_eliminar.addEventListener('click', function () {
            localStorage.setItem("eliminarAutor", JSON.stringify(lista_autores[i]));
            window.location.href = 'eliminar_autor.html'
        })    



    }


};

let filtrar_tabla = async () => {

    let filtro = txt_filtro.value.toLowerCase();
    tbody.innerHTML = '';


    for (let i = 0; i < lista_autores.length; i++) {
        if (lista_autores[i]['nombre_autor'].toLowerCase().includes(filtro) || lista_autores[i]['nacionalidad_autor'].toLowerCase().includes(filtro)) {
            let fila = tbody.insertRow();
            fila.insertCell().innerHTML = lista_autores[i]['nombre_autor'];
            fila.insertCell().innerHTML = lista_autores[i]['nombre_artistico_autor'];
            fila.insertCell().innerHTML = lista_autores[i]['nacionalidad_autor'];

            let estilos_btn_perfil = document.createElement('img');
            estilos_btn_perfil.setAttribute('src', './imgs/user-perfil-icon.png');

            let celda_btn_perfil = fila.insertCell();
            let btn_perfil = document.createElement('button');
            btn_perfil.type = 'button';

            btn_perfil.dataset._id = lista_autores[i]['_id'];

            celda_btn_perfil.appendChild(btn_perfil);
            btn_perfil.appendChild(estilos_btn_perfil);

            btn_perfil.addEventListener('click', function () {
                localStorage.setItem("infoAutor", JSON.stringify(lista_autores[i]));
                window.location.href = 'ver-perfil-autor.html'

            });


        //Botón editar

        let estilos_btn_modificar = document.createElement('img');
        estilos_btn_modificar.setAttribute('src', './imgs/edit-icon.png')

        let celda_btn_modificar = fila.insertCell();
        let btn_modificar = document.createElement('button');
        btn_modificar.type = 'button';

        btn_modificar.dataset._id = lista_autores[i]['_id'];

        celda_btn_modificar.appendChild(btn_modificar);
        btn_modificar.appendChild(estilos_btn_modificar);

        btn_modificar.addEventListener('click', function () {
            localStorage.setItem("modificarAutor", JSON.stringify(lista_autores[i]));
            window.location.href = 'modificar_autor.html'
        })


        //Botón modificar

        let estilos_btn_eliminar = document.createElement('img');
        estilos_btn_eliminar.setAttribute('src', './imgs/delete-icon.png')

        let celda_btn_eliminar = fila.insertCell();
        let btn_eliminar = document.createElement('button');
        btn_eliminar.type = 'button';

        btn_eliminar.dataset._id = lista_autores[i]['_id'];

        celda_btn_eliminar.appendChild(btn_eliminar);
        btn_eliminar.appendChild(estilos_btn_eliminar);

        btn_eliminar.addEventListener('click', function () {
            localStorage.setItem("eliminarAutor", JSON.stringify(lista_autores[i]));
            window.location.href = 'eliminar_autor+.html'
        })  
        
    }

    }


};


mostrar_tabla();
txt_filtro.addEventListener('keyup', filtrar_tabla);