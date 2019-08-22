'use strict';

let usuario = JSON.parse(localStorage.getItem("usuario"));
let listar_generos = [];

let genero;

let llamarModicarGenero = async (id) => {
    let response = await modificarGenero(genero._id, document.getElementById("txt-genero").value);
    console.log(response);
    if(response) {
      window.location.href = 'listar_genero.html'
    }

}



let llenarFormulario = async () => {
    genero = JSON.parse(localStorage.getItem('generoModificar'));

    console.log(genero);

    document.getElementById('txt-genero').value = genero.genero;

    limpiar();
};

document.getElementById("btn-agregar").addEventListener("click", llamarModicarGenero);


let limpiar = () => {
    localStorage.removeItem("_idGenero");
}

llenarFormulario();
