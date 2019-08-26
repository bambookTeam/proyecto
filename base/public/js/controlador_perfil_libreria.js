'use strict';

const urlParams = new URLSearchParams(window.location.search);
let map;

let _id = urlParams.get('_id');

const nombre_comercial = document.querySelector('#txt_nombre_comercial');
const direccion = document.querySelector('#txt_direccion');

function initMap() {

    let latLong = { lat: 9.934739, lng: -84.087502 };

    map = new google.maps.Map(document.getElementById('map'), {

        center: latLong,
        zoom: 7,
        styles: [
            { elementType: 'geometry', stylers: [{ color: '#242f3e' }] },
            { elementType: 'labels.text.stroke', stylers: [{ color: '#242f3e' }] },
            { elementType: 'labels.text.fill', stylers: [{ color: '#746855' }] },
            {
                featureType: 'administrative.locality',
                elementType: 'labels.text.fill',
                stylers: [{ color: '#d59563' }]
            },
            {
                featureType: 'poi',
                elementType: 'labels.text.fill',
                stylers: [{ color: '#d59563' }]
            },
            {
                featureType: 'poi.park',
                elementType: 'geometry',
                stylers: [{ color: '#263c3f' }]
            },
            {
                featureType: 'poi.park',
                elementType: 'labels.text.fill',
                stylers: [{ color: '#6b9a76' }]
            },
            {
                featureType: 'road',
                elementType: 'geometry',
                stylers: [{ color: '#38414e' }]
            },
            {
                featureType: 'road',
                elementType: 'geometry.stroke',
                stylers: [{ color: '#212a37' }]
            },
            {
                featureType: 'road',
                elementType: 'labels.text.fill',
                stylers: [{ color: '#9ca5b3' }]
            },
            {
                featureType: 'road.highway',
                elementType: 'geometry',
                stylers: [{ color: '#746855' }]
            },
            {
                featureType: 'road.highway',
                elementType: 'geometry.stroke',
                stylers: [{ color: '#1f2835' }]
            },
            {
                featureType: 'road.highway',
                elementType: 'labels.text.fill',
                stylers: [{ color: '#f3d19c' }]
            },
            {
                featureType: 'transit',
                elementType: 'geometry',
                stylers: [{ color: '#2f3948' }]
            },
            {
                featureType: 'transit.station',
                elementType: 'labels.text.fill',
                stylers: [{ color: '#d59563' }]
            },
            {
                featureType: 'water',
                elementType: 'geometry',
                stylers: [{ color: '#17263c' }]
            },
            {
                featureType: 'water',
                elementType: 'labels.text.fill',
                stylers: [{ color: '#515c6d' }]
            },
            {
                featureType: 'water',
                elementType: 'labels.text.stroke',
                stylers: [{ color: '#17263c' }]
            }
        ]
    });

}




let llenar_perfil = async () => {
    let libreria = await obtenerLibreriaId(_id);
    if (libreria) {
        nombre_comercial.innerHTML = libreria['nombre_comercial'];
        direccion.innerHTML = libreria['direccion'];
    }
};

let agregarMarcadoresMapa = (lista_sucursales) => {

    initMap();
    for (let i = 0; i < lista_sucursales.length; i++) {
        if (localStorage.getItem('idLibreria') == lista_sucursales[i].idLibreria) {
            if (lista_sucursales[i].ubicacion) {
                let pos = JSON.parse(lista_sucursales[i].ubicacion)
                let marker = new google.maps.Marker({
                    position: pos,
                    map: map,
                    title: 'Ubicación',
                    draggable: true,
                });
            }
        }
    }
};

const tbody = document.querySelector('#tbl_sucursales tbody');

let lista_sucursales = [];

let mostrar_tabla = async () => {

    lista_sucursales = await obtenerSucursales();

    agregarMarcadoresMapa(lista_sucursales);

    lista_sucursales = lista_sucursales.reverse();

    tbody.innerHTML = '';
    let idLibreria = localStorage.getItem('idLibreria');

    for (let i = 0; i < lista_sucursales.length; i++) {
        if (lista_sucursales[i].idLibreria == idLibreria) {
            let fila = tbody.insertRow();
            fila.insertCell().innerHTML = lista_sucursales[i]['nombre'];
            fila.insertCell().innerHTML = lista_sucursales[i]['direccion'];

            let celda = fila.insertCell();

            let btnSuscribirseLibreria = document.createElement('button');
            btnSuscribirseLibreria.innerText = "Suscribirme a esta Sucursal";

            localStorage.setItem('idLibreria', lista_sucursales[i].idLibreria);
            localStorage.setItem('idSucursal', lista_sucursales[i]._id);

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
                    cancelButtonText: 'Cancelar'

                }).then((result) => {
                    if (result.value) {
                        sub_sucursal();
                        Swal.fire({
                            title: 'Te has suscrito a esta sucursal',
                            text: 'Se te envió un correo con las ofertas y clubes de esta sucursal',
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