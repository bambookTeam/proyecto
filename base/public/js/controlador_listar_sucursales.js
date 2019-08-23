'use strict';

const tbody = document.querySelector('#tbl_sucursales tbody');
let lista_sucursales = [];
let txt_filtro = document.querySelector('#txt_filtro');

let mostrar_tabla = async () => {

    lista_sucursales = await obtenerSucursales();
    tbody.innerHTML = " ";

    for (let i = 0; i < lista_sucursales.length; i++) {
        let fila = tbody.insertRow();
        fila.insertCell().innerHTML = lista_sucursales[i]['nombre'];
        fila.insertCell().innerHTML = lista_sucursales[i]['telefono'];
        fila.insertCell().innerHTML = lista_sucursales[i]['correo'];
        fila.insertCell().innerHTML = lista_sucursales[i]['direccion'];

        /*                    MODIFICAR SUCURSAL                   */
        let estilos_modificar = document.createElement('img');
        estilos_modificar.setAttribute('src', './imgs/edit-icon.png')

        let celda_modificar = fila.insertCell();
        let modificar = document.createElement('button');
        modificar.type = 'button';

        modificar.dataset._id = lista_sucursales[i]['_id'];

        celda_modificar.appendChild(modificar);
        modificar.appendChild(estilos_modificar);

        modificar.addEventListener('click', function () {
            localStorage.setItem("_idSucursal", lista_sucursales[i]._id);

            //   localStorage.setItem("modificarTarjeta", JSON.stringify(listar_sucursales[index]));
            window.location.href = 'modificar_sucursal.html'
        })
        /*                    MODIFICAR SUCURSAL                   */


        let celda_agregar = fila.insertCell();
        let boton_agregar = document.createElement('button');

        boton_agregar.type = 'button';
        boton_agregar.innerText = 'Inventario';
        boton_agregar.dataset._id = lista_sucursales[i]['_id'];

        celda_agregar.appendChild(boton_agregar);

        boton_agregar.addEventListener('click', function () {

            window.location.href = 'inventario_sucursal.html';

        });













        //Botón eliminar
        let estilos_btn_eliminar = document.createElement('img');
        estilos_btn_eliminar.setAttribute('src', './imgs/delete-icon.png')

        let celda_btn_eliminar = fila.insertCell();
        let btn_eliminar = document.createElement('button', 'a');
        btn_eliminar.innerText = 'Eliminar';
        btn_eliminar.href = '#';
        btn_eliminar.type = 'button';

        btn_eliminar.addEventListener('click', function () {
            Swal.fire({
                title: '¿Está seguro que desea eliminar el libro?',
                text: "Ésta acción no se puede revertir",
                type: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Sí, estoy seguro'
            }).then((result) => {
                if (result.value) {
                    eliminar(lista_sucursales[i]._id);

                    Swal.fire(
                        'Sucursal eliminada exitosamente',
                        //'success'
                    ).then((result) => {
                        if (result.value) {
                            window.location.href = 'listar_sucursales.html';
                        }
                    });
                }
            })
            localStorage.setItem("eliminarSucursal", JSON.stringify(lista_sucursales[i]));
        })
        celda_btn_eliminar.appendChild(btn_eliminar);
        btn_eliminar.appendChild(estilos_btn_eliminar);

    }

};

let filtrar_tabla = async () => {

    let filtro = txt_filtro.value.toLowerCase();
    tbody.innerHTML = '';

    for (let i = 0; i < lista_sucursales.length; i++) {
        if (lista_sucursales[i]['nombre'].toLowerCase().includes(filtro) || lista_sucursales[i]['correo'].toLowerCase().includes(filtro)) {
            let fila = tbody.insertRow();
            fila.insertCell().innerHTML = lista_sucursales[i]['nombre'];
            fila.insertCell().innerHTML = lista_sucursales[i]['telefono'];
            fila.insertCell().innerHTML = lista_sucursales[i]['correo'];
            fila.insertCell().innerHTML = lista_sucursales[i]['direccion'];
        }
    }
};

mostrar_tabla();
txt_filtro.addEventListener('keyup', filtrar_tabla);
