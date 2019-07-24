'use strict';



let modal = document.getElementById("RegistrarClubScreen");

let btn = document.getElementById("btnRegistrarClub");
let btnCancelClub = document.getElementById("btnCancelClub");
let btnCrearClub = document.getElementById("btnCrearClub");

let span = document.getElementsByClassName("close")[0];

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

btn.onclick = function () {
    modal.style.display = "block";
}

let showSelects = () => {

    let arrayGenero = ['Sin Género','Drama', 'Sci-Fi', 'Romance'];
    let arrayTema = ['Cocori', 'Unica Mirando al Mar', '1984'];
    let arrayCategorias= ['Sin Categoría','A','B','C'];
    let arrayLibrerias = ['Libreria Internacional','Wal-mart','Universal'];
    let arraySucursales = ['1','2','3'];

    let parentTema = document.getElementById('lista_tema_clubes');
    let parentGenero = document.getElementById('lista_genero_clubes');
    let parentCategoria = document.getElementById('lista_categoria_club');
    let parentLibreria = document.getElementById('lista_libreria_club');
    let parentSucursal = document.getElementById('lista_sucursal_club');

    let selectGenero = document.createElement('select');
    selectGenero.setAttribute('id', 'generos_club');
    parentGenero.appendChild(selectGenero);

    let selectTema = document.createElement('select');
    selectTema.setAttribute('id', 'temas_club');
    parentTema.appendChild(selectTema);

    let selectCategoria = document.createElement('select');
    selectCategoria.setAttribute('id','categorias_club');
    parentCategoria.appendChild(selectCategoria);

    let selectLibreria = document.createElement('select');
    selectLibreria.setAttribute('id','librerias_club');
    parentLibreria.appendChild(selectLibreria);

    let selectSucursal = document.createElement('select');
    selectSucursal.setAttribute('id','sucursales_club');
    parentSucursal.appendChild(selectSucursal);


    for (let i = 0; i < arrayGenero.length; i++) {
        let optionGenero = document.createElement('option');
        optionGenero.setAttribute('value', arrayGenero[i]);

        optionGenero.innerHTML = arrayGenero[i];
        optionGenero.style.width = "300px"
        selectGenero.appendChild(optionGenero);
    }

    for (let i = 0; i < arrayTema.length; i++) {
        let optionTema = document.createElement('option');
        optionTema.setAttribute('value', arrayTema[i]);
        optionTema.innerHTML = arrayTema[i];
        optionTema.style.width = "300px"
        selectTema.appendChild(optionTema);
    }

    for (let i = 0; i < arrayCategorias.length; i++) {
        let optionCategoria = document.createElement('option');
        optionCategoria.setAttribute('value', arrayCategorias[i]);
        optionCategoria.innerHTML = arrayCategorias[i];
        optionCategoria.style.width = "300px"
        selectCategoria.appendChild(optionCategoria);
    }

    for (let i = 0; i < arrayLibrerias.length; i++) {
        let optionLibreria = document.createElement('option');
        optionLibreria.setAttribute('value', arrayLibrerias[i]);
        optionLibreria.innerHTML = arrayLibrerias[i];
        optionLibreria.style.width = "300px"
        selectLibreria.appendChild(optionLibreria);
    }

    for (let i = 0; i < arraySucursales.length; i++) {
        let optionSucursal = document.createElement('option');
        optionSucursal.setAttribute('value', arraySucursales[i]);
        optionSucursal.innerHTML = arraySucursales[i];
        optionSucursal.style.width = "300px"
        selectSucursal.appendChild(optionSucursal);
    }
}

window.addEventListener('load', showSelects);

btnCancelClub.onclick = function () {
    modal.style.display = "none";
    cleanupFormClubes();

}
// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
    cleanupFormClubes();
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
        cleanupFormClubes();
    }
}


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
        hora.value="00:00";
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


    error=validarDatos(nombreClub,modalidad,fechainicio,fechaFin);

    if (error == false) {
       
        registrarClub(nombreClub, modalidad, fechainicio, fechaFin, hora, frecuencia, tema_input.value, genero_input.value,categoria_input.value,librerias_input.value,sucursales_input.value,0);
        modal.style.display = "none";
        cleanupFormClubes();


    } else {
        document.getElementById('modal-content').style.height = "1080px";

    }

}

