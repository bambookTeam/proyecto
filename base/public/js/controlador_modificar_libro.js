'use strict';

let usuario = JSON.parse(localStorage.getItem("usuario"));
let lista_libros = [];
let idLibro=localStorage.getItem('_idLibro');


let modificarLibro = async(id) => {
    console.log(id);
    const input_titulo = document.querySelector('#txt_titulo').value;
    const input_edicion = document.querySelector('#txt_edicion').value;
    const input_editorial = document.querySelector('#txt_editorial').value;
    const input_autor = document.querySelector('#txt-nombre-autor').value;
    const input_anno = document.querySelector('#txt_anno_edicion').value;
    const input_idioma = document.querySelector('#txt_idioma').value;
    const input_isbn = document.querySelector('#txt_isbn').value;
    const input_genero = document.querySelector('#txt_genero').value;
    const input_tipo = document.querySelector('#txt_tipo').value;
    const input_cantidad = document.querySelector('#txt_existencia').value;
    const input_precio = document.querySelector('#txt_precio').value;
    const imgLibro = document.querySelector('#img_preview').value;
    modificar_libro(id, input_titulo, input_edicion, input_editorial, input_autor, input_anno, input_idioma, input_isbn, input_genero, input_tipo, input_cantidad, input_precio, imgLibro);
}

document.querySelector("#btn_guardar").addEventListener("click", function () {
    modificarLibro(idLibro);
    window.location.href = 'listar_libros.html';
    // window.location.addEventListener("click", saludar,);
    
});

let llenarFormulario = async () => {

    lista_libros=await obtenerLibros();


    for (let i = 0; i < lista_libros.length; i++) {
        if (idLibro==lista_libros[i]._id) {
                document.querySelector('#txt_titulo').value = lista_libros[i].titulo;
                document.querySelector('#txt_edicion').value = lista_libros[i].edicion;
                document.querySelector('#txt_editorial').value = lista_libros[i].editorial;
                document.querySelector('#txt-nombre-autor').value = lista_libros[i].autor;
                document.querySelector('#txt_anno_edicion').value = lista_libros[i].anno_edicion;
                document.querySelector('#txt_idioma').value = lista_libros[i].idioma;
                document.querySelector('#txt_isbn').value = lista_libros[i].isbn;
                document.querySelector('#txt_genero').value = lista_libros[i].genero;
                document.querySelector('#txt_tipo').value = lista_libros[i].tipo;
                document.querySelector('#txt_existencia').value = lista_libros[i].existencia;
                document.querySelector('#txt_precio').value = lista_libros[i].precio;
                document.querySelector('#img_preview').value = lista_libros[i].portada;

                }
                
            }
            limpiar();
};

// let validar = (ptitulo, pedicion, peditorial, pautor, panno, pidioma, pisbn, pimgLibro, pgenero, ptipo, pcantidad, pprecio, ) => {

//     let error = false;
//     //Validar titulo
//     if (ptitulo == '') {
//         error = true;
//         input_titulo.classList.add('input_error');
//     } else {
//         input_titulo.classList.remove('input_error');
//     }

//     //validar edición
//     if (pedicion == '') {
//         error = true;
//         input_edicion.classList.add('input_error');
//     } else {
//         input_edicion.classList.remove('input_error');
//     }

//     //Validareditorial
//     if (peditorial == '') {
//         error = true;
//         input_editorial.classList.add('input_error');
//     } else {
//         input_editorial.classList.remove('input_error');
//     }

//     //validar autor
//     if (pautor == '') {
//         error = true;
//         input_autor.classList.add('input_error');
//     } else {
//         input_autor.classList.remove('input_error');
//     }

//     //validar año de edición
//     if (panno == '') {
//         error = true;
//         input_anno.classList.add('input_error');
//     } else {
//         input_anno.classList.remove('input_error');
//     }

//     //validar idioma
//     if (pidioma == '') {
//         error = true;
//         input_idioma.classList.add('input_error');
//     } else {
//         input_idioma.classList.remove('input_error');
//     }

//     //Validar ISBN
//     if (pisbn == '') {
//         error = true;
//         input_isbn.classList.add('input_error');
//     } else {
//         input_isbn.classList.remove('input_error');
//     }

//     //validar portada
//     if (pimgLibro == '') {
//         error = true;
//         imgLibro.classList.add('input_error');
//     } else {
//         imgLibro.classList.remove('input_error');
//     }

//     //validar género
//     if (pgenero == '') {
//         error = true;
//         input_genero.classList.add('input_error');
//     } else {
//         input_genero.classList.remove('input_error');
//     }

//     //validar tipo
//     if (ptipo == '') {
//         error = true;
//         input_tipo.classList.add('input_error');
//     } else {
//         input_tipo.classList.remove('input_error');
//     }

//     //validar existencia
//     if (pcantidad == '') {
//         error = true;
//         input_cantidad.classList.add('input_error');
//     } else {
//         input_cantidad.classList.remove('input_error');
//     }

//     //validar precio
//     if (pprecio == '') {
//         error = true;
//         input_precio.classList.add('input_error');
//     } else {
//         input_precio.classList.remove('input_error');
//     }

//     return error;
// }

// let saludar = () => {
//     let titulo = input_titulo.value;
//     let edicion = input_edicion.value;
//     let editorial = input_editorial.value;
//     let autor = input_autor.value;
//     let anno = Number(input_anno.value);
//     let idioma = input_idioma.value;
//     let isbn = input_isbn.value;
//     let genero = input_genero.value;
//     let tipo = input_tipo.value;
//     let cantidad = Number(input_cantidad.value);
//     let precio = Number(input_precio.value);
//     let imagen = imgLibro.src;   

//     let error = validar(titulo, edicion, editorial, autor, anno, idioma, isbn, imagen, genero, tipo, cantidad, precio);
    
//     if (error == false) {
//         registrarLibro(titulo, edicion, editorial, autor, anno, idioma, isbn, imagen, genero, tipo, cantidad, precio);
//         registrarInventario(isbn);
//         Swal.fire({
//                 type: 'success',
//                 title: 'El libro se ha modificado exitosamente'
//             })
//     } else {
//         Swal.fire({
//                 type: 'warning',
//                 title: 'No se ha podido modificar el libro',
//                 text: 'Revise los campos resaltados e inténtelo de nuevo'
//             })
//     }

// };


let limpiar = () => {
    localStorage.removeItem("usuario");
}

llenarFormulario();