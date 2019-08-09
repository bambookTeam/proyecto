'use strict';

const urlParams = new URLSearchParams(window.location.search);
let _id = urlParams.get('_id');
const txt_nombre = document.querySelector('#txt_nombre');
const txt_correo = document.querySelector('#txt_correo');
const txt_contraseña = document.querySelector('#txt_contraseña');
const avatar = document.querySelector('#avatar');



let llenar_perfil = async () => {
    let usuario = await obtenerUsuarioPerfil(sessionStorage.getItem("id"));
    if (usuario) {
        let img = document.createElement("img");
        img.src = usuario.avatar;
        img.classList.add("avatar-admin");
        avatar.appendChild(img);
        txt_nombre.innerHTML = usuario.nombre;
        txt_correo.innerHTML = usuario.correo;
    }
};

llenar_perfil();