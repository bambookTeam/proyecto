'use strict';

const best_sellers_table = document.querySelector('#tbl_reporte_best_sellers');
const best_rated_table = document.querySelector('#tbl_reporte_best_rated');
const califs_users_table = document.querySelector('#tbl_reporte_califs');

let btnShowBestSellers = document.querySelector('#btn_best_sellers');
let btnShowBestRated = document.querySelector('#btn_best_rated');
let btnShowCalifs = document.querySelector('#btn_mostrar_califs');

const tbody = document.querySelector('#tbl_reporte_best_sellers tbody');
const tbody_best_rated = document.querySelector('#tbl_reporte_best_rated tbody');
const tbody_califs_usuarios = document.querySelector('#tbl_reporte_califs tbody');


let best_sellers = async () => {
    best_rated_table.style.display = "none";
    califs_users_table.style.display = "none";
    best_sellers_table.style.display = "block";
    let listaLibrosComprados = [];
    listaLibrosComprados = await obtenerLibrosComprados();

    let best_sellers = [{
        isbn: { type: String, required: true, unique: true },
        contador: { type: String, required: true, unique: false },
        titulo: { type: String, required: true, unique: false }
    }]
    for (let index = 0; index < listaLibrosComprados.length; index++) {
        if (index == 0) {
            best_sellers[index].isbn = listaLibrosComprados[index].isbn;
            best_sellers[index].contador = 1;
            best_sellers[index].titulo = await getNombrebyIsbn(listaLibrosComprados[index].isbn);
        } else {
            for (let x = 0; x < best_sellers.length; x++) {
                if (best_sellers[x].isbn == listaLibrosComprados[index].isbn) {
                    best_sellers[x].contador = best_sellers[x].contador + 1;
                } else {
                    best_sellers[index].titulo = getNombrebyIsbn(listaLibrosComprados[index].isbn);
                    best_sellers[index].isbn = listaLibrosComprados[index].isbn;
                    best_sellers[index].contador = 1;
                }
            }
        }
    }
    tbody.innerHTML = '';


    for (let index = 0; index < best_sellers.length; index++) {
        let fila = tbody.insertRow();

        fila.insertCell().innerHTML = best_sellers[index].isbn;
        fila.insertCell().innerHTML = best_sellers[index].titulo;
        fila.insertCell().innerHTML = best_sellers[index].contador;
    }
}

let getNombrebyIsbn = async (pisbn) => {
    let listaLibros = [];
    let nombre = "";

    listaLibros = await obtenerLibros();

    for (let index = 0; index < listaLibros.length; index++) {
        if (listaLibros[index].isbn == pisbn) {
            nombre = listaLibros[index].titulo;
        }

    }

    return nombre;

}

let best_rated = async () => {
    best_rated_table.style.display = "block";
    califs_users_table.style.display = "none";
    best_sellers_table.style.display = "none";

    let listaLibrosComprados = [];
    listaLibrosComprados = await obtenerLibrosComprados();

    let best_sellers = [{
        isbn: { type: String, required: true, unique: true },
        contador: { type: String, required: true, unique: false },
        titulo: { type: String, required: true, unique: false }
    }]
    for (let index = 0; index < listaLibrosComprados.length; index++) {
        if (index == 0) {
            best_sellers[index].isbn = listaLibrosComprados[index].isbn;
            best_sellers[index].contador = 1;
            best_sellers[index].titulo = await getNombrebyIsbn(listaLibrosComprados[index].isbn);
        } else {
            for (let x = 0; x < best_sellers.length; x++) {
                if (best_sellers[x].isbn == listaLibrosComprados[index].isbn) {
                    best_sellers[x].contador = best_sellers[x].contador + 1;
                } else {
                    best_sellers[index].titulo = getNombrebyIsbn(listaLibrosComprados[index].isbn);
                    best_sellers[index].isbn = listaLibrosComprados[index].isbn;
                    best_sellers[index].contador = 1;
                }
            }
        }
    }
    tbody_best_rated.innerHTML = '';


    for (let index = 0; index < best_sellers.length; index++) {
        let fila = tbody_best_rated.insertRow();

        fila.insertCell().innerHTML = best_sellers[index].isbn;
        fila.insertCell().innerHTML = best_sellers[index].titulo;
        fila.insertCell().innerHTML = best_sellers[index].contador;
    }
}

let calificaciones = async () => {
    best_rated_table.style.display = "none";
    califs_users_table.style.display = "block";
    best_sellers_table.style.display = "none";

    let lista_califs = [];
    lista_califs = await obtener_ratings();


    let rating_califs = [];
    for (let index = 0; index < lista_califs.length; index++) {
        rating_califs.push(lista_califs[index].idUserRated)
    }

    tbody_califs_usuarios.innerHTML = '';

    let x=[];

    for (let index = 0; index < lista_califs.length; index++) {
        let fila = tbody_califs_usuarios.insertRow();
        if (index==0) {
            fila.insertCell().innerHTML = lista_califs[index].idUserRated;
            fila.insertCell().innerHTML = getOccurrence(rating_califs, lista_califs[index].idUserRated);
            fila.insertCell().innerHTML = await getRatingUsuario(lista_califs[index].idUserRated);   
            x.push(lista_califs[index].idUserRated)
        } else {
            for (let y = 0; y < x.length; y++) {
                if (lista_califs[index].idUserRated==x[y]) {
                    
                } else {
                    fila.insertCell().innerHTML = lista_califs[index].idUserRated;
                    fila.insertCell().innerHTML = getOccurrence(rating_califs, lista_califs[index].idUserRated);
                    fila.insertCell().innerHTML = await getRatingUsuario(lista_califs[index].idUserRated);   
                    x.push(lista_califs[index].idUserRated)
                }
                
            }
        }

        function getOccurrence(array, value) {
            
            var count = 0;
            array.forEach((v) => (v === value && count++));
            return count;
        }

        //fila.insertCell().innerHTML=best_sellers[index].isbn;
    }

}

btnShowBestRated.addEventListener('click', best_rated);
btnShowBestSellers.addEventListener('click', best_sellers);
btnShowCalifs.addEventListener('click', calificaciones)

window.addEventListener('load', best_sellers);


