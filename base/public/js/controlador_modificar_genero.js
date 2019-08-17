

'use strict';

let usuario = JSON.parse(localStorage.getItem("usuario"));
let lista_genero = [];
let idGenero=localStorage.getItem('_idgenero');


let modifgenero = async(id) => {
    var input_genero = document.getElementById('txt-genero');

    console.log(id);
    
    modifgenero(id, input_genero)

}

document.getElementById("btn-modificar").addEventListener("click", function () {
    modificarLibro(idGenero);
});

let llenarFormulario = async () => {

    lista_genero=await listarGenero();


    for (let index = 0; index < lista_genero.length; index++) {
        if (idGenero==lista_genero[index]._id) {
    document.getElementById('txt-genero').value = lista_genero[index].genero;

        }
        
    }
    limpiar();
};


let limpiar = () => {
    localStorage.removeItem("usuario");
}

llenarFormulario();
