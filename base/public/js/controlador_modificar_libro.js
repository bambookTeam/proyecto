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


let limpiar = () => {
    localStorage.removeItem("usuario");
}

llenarFormulario();