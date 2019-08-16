'use strict';


var  modificar = document.getElementById('btn-modificar'),
input_genero = document.getElementById('txt-genero');

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