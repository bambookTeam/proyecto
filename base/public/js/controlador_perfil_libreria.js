'use strict';

const urlParams = new URLSearchParams(window.location.search);

let _id = urlParams.get('_id');

const nombre_comercial = document.querySelector('#txt_nombre_comercial');
const direccion = document.querySelector('#txt_direccion');


let llenar_perfil = async () => {
    let libreria = await obtenerLibreriaId(_id);
    if (libreria) {
        nombre_comercial.innerHTML = libreria['nombre_comercial'];
        direccion.innerHTML = libreria['direccion'];
    }
};

const tbody = document.querySelector('#tbl_sucursales tbody');

let lista_sucursales = [];

let mostrar_tabla = async () => {

    lista_sucursales = await obtenerSucursales();

    lista_sucursales = lista_sucursales.reverse();

    tbody.innerHTML = '';
    let idLibreria = localStorage.getItem('idLibreria');

    for (let i = 0; i < lista_sucursales.length; i++) {
        if (lista_sucursales[i]['idLibreria'] == idLibreria) {
            let fila = tbody.insertRow();
            fila.insertCell().innerHTML = lista_sucursales[i]['nombre'];
            fila.insertCell().innerHTML = lista_sucursales[i]['direccion'];

            let celda=fila.insertCell();

            let btnSuscribirseLibreria = document.createElement('button');
            btnSuscribirseLibreria.innerText = "Suscribirme a esta Sucursal";

            localStorage.setItem('idLibreria',lista_sucursales[i].idLibreria);
            localStorage.setItem('idSucursal',lista_sucursales[i]._id);

            btnSuscribirseLibreria.addEventListener('click', function () {
                Swal.fire({
                    title: '¿Está seguro que quiere suscribirse a esta sucursal?',
                    showCancelButton: true,
                    imageUrl: 'https://static.thenounproject.com/png/114730-200.png',
                    imageWidth: 90,
                    imageHeight: 110,
                    imageAlt: 'Custom image',
                    confirmButtonColor: '#f6b93b',
                    cancelButtonColor: '#000',
                    confirmButtonText: 'Sí confirmo',
                    cancelButtonText:'Cancelar'

                }).then((result) => {
                    if (result.value) {
                        Swal.fire({
                            title: 'Te has suscrito a esta sucursal',
                            text:'Se te envió un correo con las ofertas y clubes de esta sucursal',
                            type: 'success',
                        })

                    }
                })
            })

            celda.appendChild(btnSuscribirseLibreria);

            /*
            
            */
        }
    }
};

llenar_perfil();

mostrar_tabla();