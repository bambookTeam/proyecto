'use strict';

let usuario = JSON.parse(localStorage.getItem("usuario"));
let lista_categorias = [];
let idCategoria = localStorage.getItem('_idCategoria');

let modificarCategoria = async (id) => {
    console.log(id);

    const input_nombre = document.querySelector('#txt_nombre_categoria').value;

    modificar_categoria(id, input_nombre);
}

document.querySelector("#btn_registrar").addEventListener("click", function () {
    modificarCategoria(idCategoria);

    window.location.href = 'listar_categoría.html'
});

let llenarFormulario = async () => {
    let lista_categorias = await obtenerCategorias();

    for (let i = 0; i < lista_categorias.length; i++) {
        if (idCategoria == lista_categorias[i]._id) {
            document.querySelector('#txt_nombre_categoria').value = lista_categorias[i].nombre;
        }
    }
    limpiar();
};

let limpiar = () => {
    localStorage.removeItem("usuario");
}

llenarFormulario();