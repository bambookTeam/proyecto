'use strict';


const modificar = document.getElementById('btn-modificar');
var  input_numerotarjeta = document.getElementById('txt-numerotarjeta'),
    input_fechavencimiento = document.getElementById('txt-fechadevencimiento'),
    input_codigocvv = document.querySelector('#txt-codigocvv');

const urlParams = new URLSearchParams(window.location.search);
let _id = urlParams.get('_id');

let cargar_formulario = async () => {
    let genero = JSON.parse(localStorage.getItem("modificarGenero"));
    if (genero) {
    
        input_genero.value = genero['genero'];
    }

}
let editar_genero = () => {
    modificarGenero(_id,pgenero);
};

cargar_formulario();
modificar.addEventListener('click', editar_genero);