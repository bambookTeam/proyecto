let showSelects = async () => {

    let arrayGenero = [];
    let arrayTema = [];
    let arrayCategorias = [];
    let arrayLibrerias = [];
    let arraySucursales = [];

    arrayGenero = await listarGenero();
    arrayTema = await obtenerLibros();
    arrayCategorias = await obtenerCategorias();
    arrayLibrerias = await obtenerLibrerias();
    arraySucursales = await obtenerSucursales();

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
    selectCategoria.setAttribute('id', 'categorias_club');
    parentCategoria.appendChild(selectCategoria);

    let selectLibreria = document.createElement('select');
    selectLibreria.setAttribute('id', 'librerias_club');
    parentLibreria.appendChild(selectLibreria);

    let selectSucursal = document.createElement('select');
    selectSucursal.setAttribute('id', 'sucursales_club');
    parentSucursal.appendChild(selectSucursal);


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

    for (let i = 0; i < arraySucursales.length; i++) {
        let optionSucursal = document.createElement('option');
        optionSucursal.setAttribute('value', arraySucursales[i].nombre);
        optionSucursal.innerHTML = arraySucursales[i].nombre;
        optionSucursal.style.width = "300px"
        selectSucursal.appendChild(optionSucursal);
    }

    fillform();
}

let fillform = async () => {
    let activeClub = localStorage.getItem('idClub');

    let listaClubes = await obtenerClubes();

    for (let i = 0; i < listaClubes.length; i++) {
        if (activeClub == listaClubes[i]._id) {
            document.querySelector('#txt-clubLectura').value = listaClubes[i].nombre_Club;
            document.querySelector('#modalidad_Club').value = listaClubes[i].modalidad;
            document.querySelector('#fechaInicioClub').value = listaClubes[i].fechaInicio.substring(0, 10);
            document.querySelector('#fechaInicioClub').disabled = true;
            document.querySelector('#fechaFinClub').value = listaClubes[i].fechaFin.substring(0, 10);
            document.querySelector('#horaClub').value = listaClubes[i].hora;
            document.querySelector('#frecuencia_club').value = listaClubes[i].frecuencia;
            document.querySelector('#lista_tema_clubes').value = listaClubes[i].tema;
            document.querySelector('#lista_genero_clubes').value = listaClubes[i].genero;
            document.querySelector('#lista_categoria_club').value = listaClubes[i].categoria;
            document.querySelector('#lista_libreria_club').value = listaClubes[i].libreria;
            document.querySelector('#lista_sucursal_club').value = listaClubes[i].sucursal;
        }

    }

}

let validarDatos = (dateFin,dateInicio) => {
    let error = false;
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    today = yyyy + '-' + mm + '-' + dd;

    if (dateFin < dateInicio) {
        error = true;
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
    let ptema = document.querySelector('#lista_tema_clubes').value;
    let pgenero = document.querySelector('#lista_genero_clubes').value;
    let pcategoria=document.querySelector('#lista_categoria_club').value;
    let plibreria = document.querySelector('#lista_libreria_club').value;
    let psucursal = document.querySelector('#lista_sucursal_club').value;

    let error=validarDatos(pfechaFin,pfechaInicio);

    pid=localStorage.getItem('idClub');

    if (error==false) {
        modificarClub(pid,pnombre_Club, pmodalidad, pfechaInicio, pfechaFin, pHora, pFrecuencia, ptema, pgenero, pcategoria, plibreria, psucursal);
       
    }else{
        console.log('no pa')
    }
}

let btnCrearClub = document.querySelector('#btnCrearClub');

btnCrearClub.addEventListener('click', modClub);
window.addEventListener('load', showSelects);