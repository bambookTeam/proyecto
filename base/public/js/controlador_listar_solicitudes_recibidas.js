'use strict';
const tbody = document.querySelector('#tbl_libros tbody');
let lista_libros = [];
let txt_filtro = document.querySelector('#txt_filtro');


let redireccionar = async (libro) => {
    localStorage.setItem("infoLibroSolicitud", JSON.stringify(libro));
    window.location.href = 'infolibro_solicitud.html';
}


let cambiarEstadoSolicitud = async (solicitud, estado) => {
    cambiarEstado(solicitud, estado);
    location.reload();
}

let mostrar_tabla = async () => {

    lista_libros = await obtenerSolicitudes();
    tbody.innerHTML = '';

    let usuarios = await obtenerUsuarios();

    lista_libros = lista_libros.reverse();
    for (let i = 0; i < lista_libros.length; i++) {

        // filtro para mostrar únicamente las solicitudes pendientes
        if (lista_libros[i].idOwner == sessionStorage.getItem("id") && lista_libros[i].estado == 0) {

            let usuario = usuarios.find(usuarios => usuarios._id === lista_libros[i].idSender);

            let fila = tbody.insertRow();
            fila.insertCell().innerHTML = lista_libros[i].idLibroSender;
            fila.insertCell().innerHTML = usuario.primerNombre + " " + usuario.primerApellido;
            fila.insertCell().innerHTML = lista_libros[i].fecha;
            fila.insertCell().innerHTML = lista_libros[i].sucursal;
            if (lista_libros[i].estado == 0) {
                let celda_btn_solicitar = fila.insertCell();
                let btn_solicitar = document.createElement('button', 'a');
                btn_solicitar.innerText = 'Aceptar';
                btn_solicitar.type = 'button';

                let btn_rechazar = document.createElement('button', 'a');
                btn_rechazar.innerText = 'Rechazar';
                btn_rechazar.type = 'button';

                btn_rechazar.addEventListener('click', function () {
                    cambiarEstadoSolicitud(lista_libros[i], 2);
                });

                btn_solicitar.dataset._id = lista_libros[i]['_id'];

                celda_btn_solicitar.appendChild(btn_rechazar);

                celda_btn_solicitar.appendChild(btn_solicitar);

                btn_solicitar.addEventListener('click', function () {
                    cambiarEstadoSolicitud(lista_libros[i], 3);
                });
            }
        }
    }
}

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


            let celda_btn_solicitar = fila.insertCell();
            let btn_solicitar = document.createElement('button', 'a');
            btn_solicitar.innerText = 'Solicitar';
            btn_solicitar.type = 'button';

            btn_solicitar.dataset._id = lista_libros[i]['_id'];

            celda_btn_solicitar.appendChild(btn_solicitar);

            btn_solicitar.addEventListener('click', function () {
                redireccionar(lista_libros[i]);

            });

            let celda_btn_solicitar = fila.insertCell();
            let btn_solicitar = document.createElement('button', 'a');
            btn_solicitar.innerText = 'Solicitar';
            btn_solicitar.type = 'button';

            btn_solicitar.dataset._id = lista_libros[i]['_id'];

            celda_btn_solicitar.appendChild(btn_solicitar);

            btn_solicitar.addEventListener('click', function () {
                redireccionar(lista_libros[i]);

            });




        }

    }

}

window.addEventListener('load', mostrar_tabla);
txt_filtro.addEventListener('keyup', filtrar_tabla);
