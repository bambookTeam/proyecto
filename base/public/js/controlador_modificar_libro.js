'use strict';

let usuario = JSON.parse(localStorage.getItem("usuario"));
let lista_libros = [];
let idLibro = localStorage.getItem('_idLibro');
console.log(idLibro);


let modificarLibro = async (id) => {
    // console.log(id);
    const input_titulo = document.querySelector('#txt_titulo').value;
    const input_edicion = document.querySelector('#txt_edicion').value;
    const input_editorial = document.querySelector('#txt_editorial').value;
    const input_autor=document.querySelector('#slt_autor').value;
    const input_anno = document.querySelector('#txt_anno_edicion').value;
    const input_idioma = document.querySelector('#txt_idioma').value;
    const input_isbn = document.querySelector('#txt_isbn').value;
    const input_genero=document.querySelector('#txt_genero').value;
    const input_tipo = document.querySelector('#txt_tipo').value;
    const input_cantidad = document.querySelector('#txt_existencia').value;
    const input_precio = document.getElementById('txt_precio').value;
    const portadaLibro = document.querySelector('#portada_preview').value;
    const contraportadaLibro = document.querySelector('#contraportada_preview').value;

    

 modificar_libro(idLibro, portadaLibro, contraportadaLibro, input_titulo, input_edicion, input_editorial, input_autor, input_anno, input_idioma, input_isbn, input_genero, input_tipo, input_cantidad, input_precio);
    
                   //(pid, ptitulo, pedicion, peditorial, pautor, panno, pidioma, pisbn, pgenero, ptipo, pcantidad, pprecio , pportada, pcontraportada)
    //modificar_libro(idLibro, input_titulo, input_edicion, input_editorial, input_anno, input_anno.value, input_idioma.value, input_isbn.value, pgenero, input_tipo.value, input_cantidad.value, input_precio.value , portadaLibro.value, contraportadaLibro.value);
}

document.querySelector("#btn_guardar").addEventListener("click", function () {
    modificarLibro(idLibro);
   // window.location.href = 'listar_libros.html';
    // window.location.addEventListener("click", saludar,);

});

function contruirOpciones(idSelect, valor) {
    var x = document.getElementById(idSelect);
    var option = document.createElement("option");
    option.text = valor;
    option.value = valor;
    x.add(option);
}

let showSelects = async () => {

    let arrayGenero = [];
    let arrayAutor = [];

    arrayGenero = await obtenerGeneros();
    arrayAutor = await obtenerAutores();

    let parentGenero = document.getElementById('lista_genero');
    let parentAutor = document.getElementById('lista_autores');


    // let selectAutor = document.createElement('select');
    // selectAutor.setAttribute('id', 'txt_autor');
    // parentAutor.appendChild(selectAutor);



    for (let i = 0; i < arrayGenero.length; i++) {
        
            contruirOpciones("txt_genero", arrayGenero[i].genero);

    }

    for (let i = 0; i < arrayAutor.length; i++) {
        contruirOpciones("slt_autor", arrayAutor[i].nombre_autor);
    }

}


let llenarFormulario = async () => {

    showSelects(); 

    lista_libros = await obtenerLibros();
 


    for (let i = 0; i < lista_libros.length; i++) {
        if (idLibro == lista_libros[i]._id) {
            document.querySelector('#txt_titulo').value = lista_libros[i].titulo;
            document.querySelector('#txt_edicion').value = lista_libros[i].edicion;
            document.querySelector('#txt_editorial').value = lista_libros[i].editorial;
           
            let x=lista_libros[i].autor;
            document.querySelector('#slt_autor').value = x;
            console.log( lista_libros[i].autor);

            document.querySelector('#txt_anno_edicion').value = lista_libros[i].anno;
            document.querySelector('#txt_idioma').value = lista_libros[i].idioma;
            document.querySelector('#txt_isbn').value = lista_libros[i].isbn;
            document.querySelector('#txt_genero').value = lista_libros[i].genero;
            document.querySelector('#txt_tipo').value = lista_libros[i].tipo;
            document.querySelector('#txt_existencia').value = lista_libros[i].cantidad;
            document.getElementById('txt_precio').value = parseFloat(lista_libros[i].precio);
            document.querySelector('#portada_preview').src= lista_libros[i].portada;
            document.querySelector('#contraportada_preview').src = lista_libros[i].contraportada;
        }

    }
    limpiar();
};

let validar = ( ptitulo, pedicion, peditorial, panno, pautor, pidioma, pisbn, pgenero, ptipo, pcantidad, pprecio, pportada, pcontraportada) => {

    let error = false;

    //validar portada
    if (pportada == '') {
        error = true;
        portadaLibro.classList.add('input_error');
    } else {
        portadaLibro.classList.remove('input_error');
    }

    //validar contraportada
    if (pcontraportada == '') {
        error = true;
        contraportadaLibro.classList.add('input_error');
    } else {
        contraportadaLibro.classList.remove('input_error');
    }

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
        document.querySelector('#slt_autor').classList.add('input_error');
    } else {
        document.querySelector('#slt_autor').classList.remove('input_error');
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

    //validar género
    if (pgenero == '') {
        error = true;
        document.querySelector('#txt_genero').classList.add('input_error');
    } else {
        document.querySelector('#txt_genero').classList.remove('input_error');
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

let limpiar = () => {
    localStorage.removeItem("usuario");
}

window.addEventListener('load',llenarFormulario)

