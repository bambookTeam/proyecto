'use strict';

const urlParams = new URLSearchParams(window.location.search);
let _id = urlParams.get('_id');
const txt_nombre = document.querySelector('#txt_nombre');
const txt_correo = document.querySelector('#txt_correo');
const txt_contraseña = document.querySelector('#txt_contraseña');
const avatar = document.querySelector('#avatar');



let llenar_perfil = async() => {
    let usuario = await obtenerContactoId(_id);
    if (usuario) {
        avatar.innerHTML = usuario['avatar'];
        txt_nombre.innerHTML = contacto['nombre'];
        txt_correo.innerHTML = contacto['correo'];
        txt_contraseña.innerHTML=contacto['contraseña'];
       

    }
};

llenar_perfil();