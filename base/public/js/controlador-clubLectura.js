'use strict';



let parentSucursal = document.getElementById('lista_sucursal_club');
let selectSucursal = document.createElement('select');
selectSucursal.setAttribute('id','sucursales_club');
parentSucursal.appendChild(selectSucursal);

let btnCancelClub = document.getElementById("btnCancelClub");
let btnCrearClub = document.getElementById("btnCrearClub");


let nombreClub_input = document.querySelector("#txt-clubLectura");
let modalidad_input = document.querySelector("#modalidad_Club");
let fechaInicioClub_input = document.querySelector("#fechaInicioClub");
let fechaFinClub_input = document.querySelector("#fechaFinClub");
let hora_input = document.querySelector('#horaClub');
let frecuencia_input = document.querySelector('#frecuencia_club');

let today = new Date();
let dd = String(today.getDate()).padStart(2, '0');
let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
let yyyy = today.getFullYear();

today = yyyy + '-' + mm + '-' + dd;

let showSelects = async () => {

    let arrayGenero = [];
    let arrayTema = [];
    let arrayCategorias = [];
    let arrayLibrerias = [];


    arrayGenero=await obtenerGeneros();
    arrayTema=await obtenerLibros();
    arrayCategorias=await obtenerCategorias();
    arrayLibrerias=await obtenerLibrerias();


    let parentTema = document.getElementById('lista_tema_clubes');
    let parentGenero = document.getElementById('lista_genero_clubes');
    let parentCategoria = document.getElementById('lista_categoria_club');
    let parentLibreria = document.getElementById('lista_libreria_club');


    let selectGenero = document.createElement('select');
    selectGenero.setAttribute('id', 'generos_club');
    parentGenero.appendChild(selectGenero);

    let selectTema = document.createElement('select');
    selectTema.setAttribute('id', 'temas_club');
    parentTema.appendChild(selectTema);

    let selectCategoria = document.createElement('select');
    selectCategoria.setAttribute('id', 'categorias_club');
    parentCategoria.appendChild(selectCategoria);

    let selectLibreria = document.createElement('select');
    selectLibreria.setAttribute('id', 'librerias_club');
    parentLibreria.appendChild(selectLibreria);




    for (let i = 0; i < arrayGenero.length; i++) {
        let optionGenero = document.createElement('option');
        optionGenero.setAttribute('value', arrayGenero[i].genero);

        optionGenero.innerHTML = arrayGenero[i].genero;
        optionGenero.style.width = "300px"
        selectGenero.appendChild(optionGenero);
    }

    for (let i = 0; i < arrayTema.length; i++) {
        let optionTema = document.createElement('option');
        optionTema.setAttribute('value', arrayTema[i].titulo);
        optionTema.innerHTML = arrayTema[i].titulo;
        optionTema.style.width = "300px"
        selectTema.appendChild(optionTema);
    }

    for (let i = 0; i < arrayCategorias.length; i++) {
        let optionCategoria = document.createElement('option');
        optionCategoria.setAttribute('value', arrayCategorias[i].nombre);
        optionCategoria.innerHTML = arrayCategorias[i].nombre;
        optionCategoria.style.width = "300px"
        selectCategoria.appendChild(optionCategoria);
    }

    for (let i = 0; i < arrayLibrerias.length; i++) {
        let optionLibreria = document.createElement('option');
        optionLibreria.setAttribute('value', arrayLibrerias[i].nombre_comercial);
        optionLibreria.innerHTML = arrayLibrerias[i].nombre_comercial;
        optionLibreria.style.width = "300px"
        selectLibreria.appendChild(optionLibreria);

    }


    selectLibreria.setAttribute("onchange", 'show_Sucursales_Librerias(value)');

}

let show_Sucursales_Librerias=async(valueLibreria)=>{


    let listaSucursales=[];
    let arrayLibrerias = [];

    arrayLibrerias=await obtenerLibrerias();
    listaSucursales=await obtenerSucursales();


    selectSucursal.innerHTML="";


    let currentLibreria_id="";

    for (let index = 0; index < arrayLibrerias.length; index++) {
        if (arrayLibrerias[index].nombre_comercial==valueLibreria) {
            currentLibreria_id=arrayLibrerias[index]._id;
        }

    }

    for (let i = 0; i < listaSucursales.length; i++) {
        if (listaSucursales[i].idLibreria==currentLibreria_id) {
            let optionSucursal = document.createElement('option');
            optionSucursal.setAttribute('value', listaSucursales[i].nombre);
            optionSucursal.innerHTML = listaSucursales[i].nombre;
            optionSucursal.style.width = "300px";
            selectSucursal.appendChild(optionSucursal);
        }

    }

}

window.addEventListener('load', showSelects);

let cleanupFormClubes = () => {

    document.getElementById('formulario-ClubLectura').reset();
    var h2Elements = document.getElementsByClassName("error");

    for (var i = 0; i < h2Elements.length; i++) {
        h2Elements[i].style.display = "none"
    }

    nombreClub_input.classList.remove('input_error');
    fechaInicioClub_input.classList.remove('input_error');
    fechaFinClub_input.classList.remove('input_error');
}

let hideHora = () => {
    let mod = document.getElementById('modalidad_Club').value;
    let hora = document.getElementById('horasClub');

    if (mod == "Virtual") {
        hora.style.display = "none";
        hora.value = "00:00";
    } else {
        hora.style.display = '';
    }
}

let validarDatos = (pnombre, pmodalidad, pfechainicio, pfechafin) => {
    let error = false;

    if (pnombre == "") {
        error = true;
        document.getElementById('error_content').style.display = "block";
        nombreClub_input.classList.add('input_error');
    } else {
        document.getElementById('error_content').style.display = "none";
        nombreClub_input.classList.remove('input_error');
    }

    if (pmodalidad == "") {
        error = true;
        document.getElementById('error_modalidad').style.display = "block";
        modalidad_input.classList.add('input_error');
    } else {
        document.getElementById('error_modalidad').style.display = "none";
        modalidad_input.classList.remove('input_error');
    }


    if (pfechainicio == '') {
        error = true;
        fechaInicioClub_input.classList.add('input_error');
        document.getElementById('error_fecha').style.display = "block";
    } else {
        document.getElementById('error_fecha').style.display = "none";
        if (pfechainicio < today) {
            error = true;
            fechaInicioClub_input.classList.add('input_error');
            document.getElementById('error_fechaDia').style.display = "block";
        } else {
            fechaInicioClub_input.classList.remove('input_error');
            document.getElementById('error_fechaDia').style.display = "none";
        }
    }

    if (pfechafin == '') {
        error = true;
        fechaFinClub_input.classList.add('input_error');
        document.getElementById('error_fecha').style.display = "block";
    } else {
        document.getElementById('error_fecha').style.display = "none";
        if (pfechafin < pfechainicio) {
            error = true;
            fechaFinClub_input.classList.add('input_error');
            document.getElementById('error_fechaFin').style.display = "block";
        } else {
            fechaFinClub_input.classList.remove('input_error');
            document.getElementById('error_fechaFin').style.display = "none";
        }


    }

    return error;
}

btnCrearClub.onclick = function () {
    let tema_input = document.querySelector("#temas_club");
    let genero_input = document.querySelector("#generos_club");
    let categoria_input = document.querySelector("#categorias_club");
    let librerias_input = document.querySelector("#librerias_club");
    let sucursales_input = document.querySelector("#sucursales_club");

    let error = false;
    let nombreClub = nombreClub_input.value;
    let modalidad = modalidad_input.value;
    let fechainicio = fechaInicioClub_input.value;
    let fechaFin = fechaFinClub_input.value;
    let hora = hora_input.value;
    let frecuencia = frecuencia_input.value;


    error = validarDatos(nombreClub, modalidad, fechainicio, fechaFin);
    let idAdminClub = sessionStorage.getItem('id');

    if (modalidad == 'Virtual') {
        hora = "00:00"
    }


    if (error == false) {

        registrarClub(nombreClub, modalidad, fechainicio, fechaFin, hora, frecuencia, tema_input.value, genero_input.value,categoria_input.value,librerias_input.value,sucursales_input.value,idAdminClub);

        cleanupFormClubes();

        location.replace('%20clubesLectura.html');

    } else {

    }

}
