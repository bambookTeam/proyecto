'use strict';

const urlParams = new URLSearchParams(window.location.search);

let _id = urlParams.get('_id');

primerNombre: {type: String, required: true,unique: false},
  segundoNombre: {type: String, requiered: false, unique: false},
  primerApellido: {type: String, required: true,unique: false},
  segundoApellido:

const identificacion = document.querySelector('#txt_nombre');
const primerNombre = document.querySelector('#txt_correo');
const segundoNombre = document.querySelector('#txt_contraseña');
const primerApellido = document.querySelector('#avatar');
const segundoApellido = document.querySelector('#avatar');

const primerApellido = document.querySelector('#avatar');
const primerApellido = document.querySelector('#avatar');
const primerApellido = document.querySelector('#avatar');
const primerApellido = document.querySelector('#avatar');
const primerApellido = document.querySelector('#avatar');



let llenar_perfil = async() => {
    let usuario = await obtenerUsuarioId(_id);
    if (usuario) {
        avatar.innerHTML = usuario['avatar'];
        txt_nombre.innerHTML = contacto['nombre'];
        txt_correo.innerHTML = contacto['correo'];
        txt_contraseña.innerHTML=contacto['contraseña'];
    }
};

llenar_perfil();