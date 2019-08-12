'use strict';

const urlParams = new URLSearchParams(window.location.search);
const txt_usuario = document.querySelector('#txt_usuario');
const txt_contrasena = document.querySelector('#txt_contrasena');
const txt_correo = document.querySelector('#txt_correo');
const avatar = document.querySelector('#avatar');

let _id = urlParams.get('_id');


let llenar_perfil = async () => {
    let usuario = await obtenerUsuarioPerfil(sessionStorage.getItem("id"));
    if (usuario) {
        let img = document.createElement("img");
        img.src = usuario.avatar;
        img.classList.add("avatar-admin");
        avatar.innerHTML = img;
        txt_usuario.innerHTML = usuario['usuario'];
        txt_contrasena.innerHTML = usuario['contraseña'];
        txt_correo.innerHTML = usuario['correo'];
    }
};

llenar_perfil();