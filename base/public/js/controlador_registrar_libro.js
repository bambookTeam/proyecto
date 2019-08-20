'use strict'


const boton_registrar = document.querySelector('#btn_registrar');

const input_titulo = document.querySelector('#txt_titulo');
const input_edicion = document.querySelector('#txt_edicion');
const input_editorial = document.querySelector('#txt_editorial');
const input_autor = document.querySelector('#txt-nombre-autor');
const input_anno = document.querySelector('#txt_anno_edicion');
const input_idioma = document.querySelector('#txt_idioma');
const input_isbn = document.querySelector('#txt_isbn');
const input_genero = document.querySelector('#txt_genero');
const input_tipo = document.querySelector('#txt_tipo');
const input_cantidad = document.querySelector('#txt_existencia');
const input_precio = document.querySelector('#txt_precio');
const portadaLibro = document.querySelector('#portada_preview');
const contraportadaLibro = document.querySelector('#contraportada_preview');

//Funsión para seleccionar genero previamente registrado
// let listar_genero = async () => {
//     let arrayGenero = [];
//     arrayGenero = await listarGenero ();
//     let genero_select = document.querySelector('#txt_genero');

//     for (let i = 0; i < arrayGenero.length; i++) {
//         let optionGenero = document.createElement('option');
//         optionGenero.setAttribute('value', arrayGenero[i].genero);

//         optionGenero.innerHTML = arrayGenero[i].genero;
//         genero_select.appendChild(optionGenero);
//     }

// }
// window.addEventListener('load', listar_genero);

//Funsión para seleccionar autor previamente registrado
// let listar_autor = async () => {
//     let arrayAutor = [];
//     arrayAutor = await obtenerAutores();
//     let autor_select = document.querySelector('#txt-nombre-autor');

//     for (let i = 0; i < arrayAutor.length; i++) {
//         let optionAutor = document.createElement('option');
//         optionAutor.setAttribute('value', arrayAutor[i].autor);

//         optionAutor.innerHTML = arrayAutor[i].autor;
//         autor_select.appendChild(optionAutor);
//     }
// }
// window.addEventListener('load', listar_autor);

let showSelects = async() => {

    let arrayGenero = [];
    let arrayAutor = [];
    
    arrayGenero = await listarGenero();
    arrayAutor = await obtenerAutores();

    let parentGenero = document.getElementById('lista_genero');
    let parentAutor = document.getElementById('lista_autores');
    

    let selectGenero = document.createElement('select');
    selectGenero.setAttribute('id', 'txt_genero');
    parentGenero.appendChild(selectGenero);

    let selectAutor = document.createElement('select');
    selectAutor.setAttribute('id', 'txt_autor');
    parentAutor.appendChild(selectAutor);


    for (let i = 0; i < arrayGenero.length; i++) {
        let optionGenero = document.createElement('option');
        optionGenero.setAttribute('value', arrayGenero[i].genero);
    
        optionGenero.innerHTML = arrayGenero[i].genero;
        optionGenero.style.width = "300px"
        selectGenero.appendChild(optionGenero);
    }

    for (let i = 0; i < arrayAutor.length; i++) {
        let optionAutor = document.createElement('option');
        optionAutor.setAttribute('value', arrayAutor[i].nombre_autor);
       
    
        optionAutor.innerHTML = arrayAutor[i].nombre_autor;
        optionAutor.style.width = "300px"
        selectAutor.appendChild(optionAutor);
    }

}

window.addEventListener('load', showSelects);


let validar = (ptitulo, pedicion, peditorial, pautor, panno, pidioma, pisbn, pimgLibro, pgenero, ptipo, pcantidad, pprecio, pcontraportada ) => {

    let error = false;
    //Validar titulo
    if (ptitulo == '') {
        error = true;
        input_titulo.classList.add('input_error');
    } else {
        input_titulo.classList.remove('input_error');
    }

    //validar edición
    if (pedicion == '') {
        error = true;
        input_edicion.classList.add('input_error');
    } else {
        input_edicion.classList.remove('input_error');
    }

    //Validareditorial
    if (peditorial == '') {
        error = true;
        input_editorial.classList.add('input_error');
    } else {
        input_editorial.classList.remove('input_error');
    }

    //validar autor
    if (pautor == '') {
        error = true;
        input_autor.classList.add('input_error');
    } else {
        input_autor.classList.remove('input_error');
    }

    //validar año de edición
    if (panno == '') {
        error = true;
        input_anno.classList.add('input_error');
    } else {
        input_anno.classList.remove('input_error');
    }

    //validar idioma
    if (pidioma == '') {
        error = true;
        input_idioma.classList.add('input_error');
    } else {
        input_idioma.classList.remove('input_error');
    }

    //Validar ISBN
    if (pisbn == '') {
        error = true;
        input_isbn.classList.add('input_error');
    } else {
        input_isbn.classList.remove('input_error');
    }

    //validar portada
    if (pimgLibro == '') {
        error = true;
        imgLibro.classList.add('input_error');
    } else {
        imgLibro.classList.remove('input_error');
    }

    //validar contraportada
    if (pcontraportada == '') {
        error = true;
        contraportada.classList.add('input_error');
    } else {
        contraportada.classList.remove('input_error');
    }

    //validar género
    if (pgenero == '') {
        error = true;
        input_genero.classList.add('input_error');
    } else {
        input_genero.classList.remove('input_error');
    }

    //validar tipo
    if (ptipo == '') {
        error = true;
        input_tipo.classList.add('input_error');
    } else {
        input_tipo.classList.remove('input_error');
    }

    //validar existencia
    if (pcantidad == '') {
        error = true;
        input_cantidad.classList.add('input_error');
    } else {
        input_cantidad.classList.remove('input_error');
    }

    //validar precio
    if (pprecio == '') {
        error = true;
        input_precio.classList.add('input_error');
    } else {
        input_precio.classList.remove('input_error');
    }

    return error;
}


let saludar = () => {
    let titulo = input_titulo.value;
    let edicion = input_edicion.value;
    let editorial = input_editorial.value;
    let autor = input_autor.value;
    let anno = Number(input_anno.value);
    let idioma = input_idioma.value;
    let isbn = input_isbn.value;
    let genero = input_genero.value;
    let tipo = input_tipo.value;
    let cantidad = Number(input_cantidad.value);
    let precio = Number(input_precio.value);
    let portada = portadaLibro.src;
    let contraportada = contraportada.src;
    

    let error = validar(titulo, edicion, editorial, autor, anno, idioma, isbn, genero, tipo, cantidad, precio, portada, contraportada,);

    if (error == false) {
        registrarLibro(titulo, edicion, editorial, autor, anno, idioma, isbn, genero, tipo, cantidad, precio, portada, contraportada,);
        registrarInventario(isbn);
        Swal.fire({
            type: 'success',
            title: 'El libro se ha registrado exitosamente'
        })
    } else {
        Swal.fire({
            type: 'warning',
            title: 'No se ha podido registrar el libro',
            text: 'Revise los campos resaltados e inténtelo de nuevo'
        })
    }

};


boton_registrar.addEventListener('click', saludar)

