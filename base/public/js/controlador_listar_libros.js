'use strict';
const tbody = document.querySelector('#tbl_libros tbody');
let lista_libros = [];
let txt_filtro = document.querySelector('#txt_filtro');


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

        let estilos_btn_perfil = document.createElement('img');
        estilos_btn_perfil.setAttribute('src', './imgs/perfil-libro-icon.png');

        let celda_btn_perfil = fila.insertCell();
        let btn_perfil = document.createElement('button');
        btn_perfil.type = 'button';

        btn_perfil.dataset._id = lista_libros[i]['_id'];

        celda_btn_perfil.appendChild(btn_perfil);
        btn_perfil.appendChild(estilos_btn_perfil);

        btn_perfil.addEventListener('click', function () {
            localStorage.setItem("infoLibro", JSON.stringify(lista_libros[i]));
            window.location.href = 'ver_perfil_libro.html'

        });

        //Botón editar

        let estilos_btn_modificar = document.createElement('img');
        estilos_btn_modificar.setAttribute('src', './imgs/edit-icon.png')

        let celda_btn_modificar = fila.insertCell();
        let btn_modificar = document.createElement('button');
        btn_modificar.type = 'button';

        btn_modificar.dataset._id = lista_libros[i]['_id'];

        celda_btn_modificar.appendChild(btn_modificar);
        btn_modificar.appendChild(estilos_btn_modificar);

        btn_modificar.addEventListener('click', function () {
            localStorage.setItem("modificarLibro", JSON.stringify(lista_libros[i]));
            window.location.href = 'modificar_libro.html'
        })


        //Botón eliminar

        let estilos_btn_eliminar = document.createElement('img');
        estilos_btn_eliminar.setAttribute('src', './imgs/delete-icon.png')

        let celda_btn_eliminar = fila.insertCell();
        let btn_eliminar = document.createElement('button');
        btn_eliminar.type = 'button';

        btn_eliminar.dataset._id = lista_libros[i]['_id'];

        celda_btn_eliminar.appendChild(btn_eliminar);
        btn_eliminar.appendChild(estilos_btn_eliminar);

        btn_eliminar.addEventListener('click', function () {
            localStorage.setItem("eliminarLibro", JSON.stringify(lista_libros[i]));
            window.location.href = 'eliminar_libro.html'
        })


    }
};


let filtrar_tabla = async () => {

    let filtro = txt_filtro.value.toLowerCase();
    tbody.innerHTML = '';


    for (let i = 0; i < lista_libros.length; i++) {
        if (lista_libros[i]['titulo'].toLowerCase().includes(filtro)) {
            let fila = tbody.insertRow();
            fila.insertCell().innerHTML = lista_libros[i]['titulo'];
            fila.insertCell().innerHTML = lista_libros[i]['autor'];
            fila.insertCell().innerHTML = lista_libros[i]['edicion'];
            fila.insertCell().innerHTML = lista_libros[i]['genero'];
            fila.insertCell().innerHTML = lista_libros[i]['año'];

            //Botón ver perfil

            let estilos_btn_perfil = document.createElement('img');
            // estilos_btn_perfil.setAttribute('src', './imgs/perfil-libro-icon.png');

            let celda_btn_perfil = fila.insertCell();
            let btn_perfil = document.createElement('button');
            btn_perfil.type = 'button';

            btn_perfil.dataset._id = lista_libros[i]['_id'];

            celda_btn_perfil.appendChild(btn_perfil);
            btn_perfil.appendChild(estilos_btn_perfil);

            

            btn_perfil.addEventListener('click', function () {
                localStorage.setItem("infoLibro", JSON.stringify(lista_libros[i]));
                window.location.href = 'ver_perfil_libro.html'

            });

            //Botón modificar

            let estilos_btn_modificar = document.createElement('img');
        estilos_btn_modificar.setAttribute('src', './imgs/edit-icon.png')

        let celda_btn_modificar = fila.insertCell();
        let btn_modificar = document.createElement('button');
        btn_modificar.type = 'button';

        btn_modificar.dataset._id = lista_libros[i]['_id'];

        celda_btn_modificar.appendChild(btn_modificar);
        btn_modificar.appendChild(estilos_btn_modificar);

        btn_modificar.addEventListener('click', function () {
            localStorage.setItem("modificarLibro", JSON.stringify(lista_libros[i]));
            window.location.href = 'modificar_libro.html'
        })


            //Botón eliminar

            let estilos_btn_eliminar = document.createElement('img');
            estilos_btn_eliminar.setAttribute('src', './imgs/delete-icon.png')

            let celda_btn_eliminar = fila.insertCell();
            let btn_eliminar = document.createElement('button');
            btn_eliminar.type = 'button';

            btn_eliminar.dataset._id = lista_libros[i]['_id'];

            celda_btn_eliminar.appendChild(btn_eliminar);
            btn_eliminar.appendChild(estilos_btn_eliminar);

            btn_eliminar.addEventListener('click', function () {
                localStorage.setItem("eliminarLibro", JSON.stringify(lista_libros[i]));
                window.location.href = 'eliminar_libro.html'
            })
        }

    }

};


window.addEventListener('load', mostrar_tabla);
txt_filtro.addEventListener('keyup', filtrar_tabla);
