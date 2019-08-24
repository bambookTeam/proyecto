'use strict';

const tbody = document.querySelector('#tbl_librerias tbody');
let lista_librerias = [];
let txt_filtro = document.querySelector('#txt_filtro');

let redireccionar = (id) => {
    localStorage.setItem('libreriaModificar', JSON.stringify(id));
    window.location.href = 'modificar_libreria.html'
}


let mostrar_tabla = async () => {

    lista_librerias = await obtenerLibrerias();

    lista_librerias = lista_librerias.reverse();
    tbody.innerHTML = '';

    for (let i = 0; i < lista_librerias.length; i++) {
        let fila = tbody.insertRow();
        fila.insertCell().innerHTML = lista_librerias[i]['nombre_comercial'];
        fila.insertCell().innerHTML = lista_librerias[i]['nombre_fantasia'];
        fila.insertCell().innerHTML = lista_librerias[i]['direccion'];
        fila.insertCell();

        /*                      VER PERFIL LIBRERÍA                   */
        let celda_perfil = fila.insertCell();
        let boton_perfil = document.createElement('button');
        boton_perfil.type = 'button';
        boton_perfil.innerText = 'Ver perfil';
        boton_perfil.dataset._id = lista_librerias[i]['_id'];

        celda_perfil.appendChild(boton_perfil);

        boton_perfil.addEventListener('click', function () {
            //console.log(this.dataset._id);
            localStorage.setItem('idLibreria', lista_librerias[i]['_id']);
            window.location.href = `visualizar_perfil_libreria.html?_id=${this.dataset._id}`
        });
        /*                      VER PERFIL LIBRERÍA                   */



        /*                    AGREGAR SUCURSAL                   */
        let celda_sucursal = fila.insertCell();
        let boton_sucursal = document.createElement('button');
        boton_sucursal.innerHTML = 'Agregar Sucursal';
        boton_sucursal.addEventListener('click', function () {
            localStorage.setItem('idLibreria', lista_librerias[i]['_id']);
            location.replace('registrar_sucursal.html');
        });

        celda_sucursal.appendChild(boton_sucursal);
        /*                    AGREGAR SUCURSAL                   */

        /*                    MODIFICAR LIBRERÍA                   */
        let celda_modificar = fila.insertCell();
        let boton_modificar = document.createElement('button');
        boton_modificar.type = 'button';
        boton_modificar.innerText = 'Modificar';
        boton_modificar.dataset._id = lista_librerias[i]['_id'];

        celda_modificar.appendChild(boton_modificar);

        boton_modificar.addEventListener('click', function () {
            //console.log(this.dataset._id);
            redireccionar(lista_librerias[i]);
        });
        /*                    MODIFICAR LIBRERÍA                   */

        //Botón eliminar
        let estilos_btn_eliminar = document.createElement('img');
        estilos_btn_eliminar.setAttribute('src', './imgs/delete-icon.png')

        let celda_btn_eliminar = fila.insertCell();
        let btn_eliminar = document.createElement('button', 'a');
        btn_eliminar.href = '#';
        btn_eliminar.type = 'button';

        btn_eliminar.addEventListener('click', function () {
            Swal.fire({
                title: '¿Está seguro que desea eliminar la librería?',
                text: "Ésta acción no se puede revertir",
                type: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Sí, estoy seguro'
            }).then((result) => {
                if (result.value) {
                    eliminarLibreria(lista_librerias[i]._id);

                    Swal.fire(
                        'Librería eliminada exitosamente',
                        //'success'
                    ).then((result) => {
                        if (result.value) {
                            window.location.href = 'listar_librerias.html';
                        }
                    });
                }
            });
            localStorage.setItem("eliminarLibrería", JSON.stringify(lista_librerias[i]));
        });

        celda_btn_eliminar.appendChild(btn_eliminar);
        btn_eliminar.appendChild(estilos_btn_eliminar);
        //Botón eliminar

    }
}


let filtrar_tabla = async () => {

    let filtro = txt_filtro.value.toLowerCase();
    tbody.innerHTML = '';

    for (let i = 0; i < lista_librerias.length; i++) {
        if (lista_librerias[i]['nombre_comercial'].toLowerCase().includes(filtro)) {
            let fila = tbody.insertRow();
            fila.insertCell().innerHTML = lista_librerias[i]['nombre_comercial'];
            fila.insertCell().innerHTML = lista_librerias[i]['nombre_fantasia'];
            fila.insertCell().innerHTML = lista_librerias[i]['direccion'];
        }
    }
};


mostrar_tabla();
txt_filtro.addEventListener('keyup', filtrar_tabla);