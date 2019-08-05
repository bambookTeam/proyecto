'use strict';

const tbody = document.querySelector('#tbl_eventos tbody');
let lista_eventos = [];

let mostrar_tabla = async() => {
    
    lista_eventos = await obtenerEventos();
    tbody.innerHTML = " ";
    let getClubId=localStorage.getItem('idClub');
    for(let i = 0; i < lista_eventos.length; i++){
       if (lista_eventos[i]['idClub']==getClubId) {
        let fila = tbody.insertRow();
        fila.insertCell().innerHTML = lista_eventos[i]['nombre_Evento'];
        fila.insertCell().innerHTML = lista_eventos[i]['libro']
       }

    }

};

$(document).ready(mostrar_tabla);