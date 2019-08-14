'use strict';

const urlParams = new URLSearchParams(window.location.search);
const txt_nombreusuario = document.querySelector('#txt_nombreusuario');
const txt_contrasena = document.querySelector('#txt_contrasena');
const txt_correo = document.querySelector('#txt_correo');

let _id = urlParams.get('_id');


let llenar_perfil = async () => {
    let usuario = await obtenerUsuarioPerfil(sessionStorage.getItem("id"));
    if (usuario) {
    
        txt_nombreusuario.innerHTML = usuario['nombreUsuario'];
        txt_correo.innerHTML = usuario['correo'];
        txt_contrasena.innerHTML = usuario['contrasena'];
       
    }
};

llenar_perfil();