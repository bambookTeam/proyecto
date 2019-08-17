'use strict';


const modificar = document.getElementById('btn-modificar');
 var input_genero = document.getElementById('txt-genero');

const urlParams = new URLSearchParams(window.location.search);
let _id = urlParams.get('_id');

let cargar_formulario = async () => {
    let genero = await obtener_generoId(_id);
    if (genero) {
    
        input_genero.value = genero['genero'];
    }

}
let editar_genero = () => {
    modificarGenero(_id,pgenero);
};

cargar_formulario();
modificar.addEventListener('click', editar_genero);