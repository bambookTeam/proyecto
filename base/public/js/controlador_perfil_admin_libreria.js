'use strict';

const urlParams = new URLSearchParams(window.location.search);

let _id = urlParams.get('_id');

const nombreUsuario = document.querySelector('#txt_nombre_usuario');
const identificacion = document.querySelector('#txt_identificacion');
const nombre = document.querySelector('#txt_nombre');
const sexo = document.querySelector('#txt_sexo');
const correo = document.querySelector('#txt_correo');

let llenar_perfil = async() => {
    let usuario = await obtenerUsuarioId(_id);
    if (usuario) {
        nombreUsuario.innerHTML = usuario['nombreUsuario'];
        identificacion.innerHTML = contacto['identificacion'];
        nombre.innerHTML = contacto['primerNombre'];
        sexo.innerHTML=contacto['sexo'];
        correo.innerHTML=contacto['correo'];
    }
};

llenar_perfil();