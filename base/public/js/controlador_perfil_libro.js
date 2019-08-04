'use strict'

const  urlParams = new URLSearchParams(window.location.search);
console.log(urlParams.get('_id'));



let llenar_perfil = async () => {

    let libro = await obtener_libroID();
    console.log(libro);
};