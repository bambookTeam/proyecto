let parentSucursal = document.getElementById('lista_sucursal_club');
let selectSucursal = document.createElement('select');
selectSucursal.setAttribute('id', 'sucursales_club');
parentSucursal.appendChild(selectSucursal)
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


let sucursalActiva = "";
let show_Sucursales_Librerias = async (valueLibreria) => {


    let listaSucursales = [];
    let arrayLibrerias = [];

    arrayLibrerias = await obtenerLibrerias();
    listaSucursales = await obtenerSucursales();


    selectSucursal.innerHTML = "";


    let currentLibreria_id = "";

    for (let index = 0; index < arrayLibrerias.length; index++) {
        if (arrayLibrerias[index].nombre_comercial == valueLibreria) {
            currentLibreria_id = arrayLibrerias[index]._id;
        }

    }

    for (let i = 0; i < listaSucursales.length; i++) {
        if (listaSucursales[i].idLibreria == currentLibreria_id) {
            let optionSucursal = document.createElement('option');
            optionSucursal.setAttribute('value', listaSucursales[i].nombre);
            optionSucursal.innerHTML = listaSucursales[i].nombre;
            optionSucursal.style.width = "300px";
            selectSucursal.appendChild(optionSucursal);
        }

    }

    selectSucursal.value = "me les cago"

}

let fillform = async () => {


    let arrayGenero = [];
    let arrayTema = [];
    let arrayCategorias = [];
    let arrayLibrerias = [];


    arrayGenero = await obtenerGeneros();
    arrayTema = await obtenerLibros();
    arrayCategorias = await obtenerCategorias();
    arrayLibrerias = await obtenerLibrerias();


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



    let activeClub = localStorage.getItem('idClub');

    let listaClubes = await obtenerClubes();

    for (let i = 0; i < listaClubes.length; i++) {
        if (activeClub == listaClubes[i]._id) {
            document.querySelector('#txt-clubLectura').value = listaClubes[i].nombre_Club;
            document.querySelector('#modalidad_Club').value = listaClubes[i].modalidad;
            document.querySelector('#fechaInicioClub').value = listaClubes[i].fechaInicio.substring(0, 10);
            document.querySelector('#fechaFinClub').value = listaClubes[i].fechaFin.substring(0, 10);
            if (listaClubes[i].modalidad == "Virtual") {
                document.querySelector('#horasClub').style.display = "none";

            } else {
                document.querySelector('#horaClub').value = listaClubes[i].hora;
            }
            console.log(listaClubes[i].genero);
            document.querySelector('#frecuencia_club').value = listaClubes[i].frecuencia;
            document.querySelector('#temas_club').value = listaClubes[i].tema;
            document.querySelector('#generos_club').value = listaClubes[i].genero;

            document.querySelector('#categorias_club').value = listaClubes[i].categoria;
            document.querySelector('#librerias_club').value = listaClubes[i].libreria;

            document.querySelector('#sucursales_club').value = listaClubes[i].sucursal;
            show_Sucursales_Librerias(listaClubes[i].sucursal)

        }

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

let modClub = () => {

    let pnombre_Club = document.querySelector('#txt-clubLectura').value;
    let pmodalidad = document.querySelector('#modalidad_Club').value;
    let pfechaInicio = document.querySelector('#fechaInicioClub').value;
    let pfechaFin = document.querySelector('#fechaFinClub').value;
    let pHora = document.querySelector('#horaClub').value;
    let pFrecuencia = document.querySelector('#frecuencia_club').value;
    let ptema = document.querySelector('#temas_club').value;
    let pgenero = document.querySelector('#generos_club').value;
    let pcategoria = document.querySelector('#categorias_club').value;
    let plibreria = document.querySelector('#librerias_club').value;
    let psucursal = document.querySelector('#sucursales_club').value;

    let error = validarDatos(pnombre_Club, pmodalidad, pfechaInicio, pfechaFin);

    pid = localStorage.getItem('idClub');

    if (error == false) {

        modificarClub(pid, pnombre_Club, pmodalidad, pfechaInicio, pfechaFin, pHora, pFrecuencia, ptema, pgenero, pcategoria, plibreria, psucursal);
        setTimeout(function () {

            redirigir_perfil_club();
        }, 2000);


        
        Swal.fire({
            title: 'Se ha modificado el Club con exito',
            text: 'Se redirigirá al Perfil del Club',
            imageUrl: 'http://www.mywebshelf.com/images/icons/book.gif',
            imageWidth: 300,
            imageHeight: 200,
            imageAlt: 'Custom image',
            animation: false,
            showCancelButton: false,
            showConfirmButton: false,
            allowOutsideClick: false
        })
    } else {
        Swal.fire({
            title: 'Por favor revise los campos en rojo',
            text: 'e intente de nuevo',
            type: 'warning'
        })
    }
}

let redirigir_perfil_club = () => {
    location.replace('ver_perfilClubLectura.html');
}

let hideHora = () => {
    let mod = document.getElementById('modalidad_Club').value;
    let hora = document.getElementById('horasClub');

    if (mod == "Virtual") {
        hora.style.display = "none";
        hora.value = "00:00";
    } else {
        hora.style.display = 'block';
    }
}

let btnCrearClub = document.querySelector('#btnCrearClub');

btnCrearClub.addEventListener('click', modClub);
window.addEventListener('load', fillform);