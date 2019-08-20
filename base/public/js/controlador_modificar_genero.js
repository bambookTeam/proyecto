'use strict';

let usuario = JSON.parse(localStorage.getItem("usuario"));
let listar_generos = [];
let idGenero = localStorage.getItem('_idGenero');

let editarGenero = async (id) => {
    console.log(id);


    const input_genero = document.getElementById('txt-genero').value;

    modificarGenero(id, input_genero);

}

document.getElementById("btn-agregar").addEventListener("click", function () {
    modificarGenero(idGenero);

    window.location.href = 'listar_genero.html'
});



let llenarFormulario = async () => {
    let listar_generos = await obtenerGeneros();


    for (let index = 0; index < listar_generos.length; index++) {
        if (idGenero == listar_generos[index]._id) {
            document.querySelector('txt-genero').value = listar_generos[index].genero;

        }

    }
    limpiar();
};


let limpiar = () => {
    localStorage.removeItem("usuario");
}

llenarFormulario();
