'use strict';


const boton_modificar = document.querySelector('#btn_modificar');

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
const imgLibro = document.querySelector('#img_preview');

const urlParams = new URLSearchParams(window.location.search);
let _id = urlParams.get('_id');

let cargar_formulario = async () => {
    let libro = await obtener_libroId(_id);
    if (libro) {
        input_titulo.value = libro['titulo'];
        input_edicion.value = libro['edicion'];
        input_editorial.value = libro['editorial'];
        input_autor.value = libro['autor'];
        input_anno.value = libro['año'];
        input_idioma.value = libro['idioma'];
        input_isbn.value = libro['isbn'];
        input_genero.value = libro['genero'];
        input_tipo.value = libro['tipo'];
        input_cantidad.value = libro['cantidad'];
        input_precio.value = libro['precio'];
        imgLibro.value = libro['portada'];
    }

}
let editar_libro = () => {
    modificar_libro(_id, ptitulo, pedicion, peditorial, pautor, panno, pidioma, pisbn, pimagen, pgenero, ptipo, pcantidad, pprecio);
};

cargar_formulario();
boton_modificar.addEventListener('click', editar_libro);