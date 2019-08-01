'use strict';


const boton_cerrar_sesion = document.querySelector('#btn_cerrar');

let cerrar_sesion = () => {

    sessionStorage.clear();

    location.replace('index.html');

}

boton_cerrar_sesion.addEventListener('click', cerrar_sesion);
