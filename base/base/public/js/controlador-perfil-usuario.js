'use strict';

const urlParams = new URLSearchParams(window.location.search);
let _id = urlParams.get('_id');
const txt_primerNombre = document.querySelector('#txt_primerNombre');
const txt_segundoNombre = document.querySelector('#txt_segundoNombre');
const txt_primerApellido = document.querySelector('#txt_primerApellido');
const txt_segundoApellido = document.querySelector('#txt_segundoApellido');
const txt_sexo = document.querySelector('#txt_sexo');
const txt_identificacion = document.querySelector('#txt_identificacion');
const txt_correo = document.querySelector('#txt_correo');
const txt_distrito = document.querySelector('#txt_distrito');
const txt_direccion = document.querySelector('#txt_direccion');
const txt_nombreUsuario = document.querySelector('#txt_nombreUsuario');
const avatar = document.querySelector('#avatar');
const txt_provincia = document.querySelector('#txt_provincia');
const txt_canton = document.querySelector('#txt_canton');
let img = document.createElement('img');

let llenar_perfil = async () => {
    let usuario = await obtenerUsuarioId(_id);

    if (usuario) {
        txt_nombreUsuario.innerHTML = usuario['nombreUsuario'];
        img.setAttribute('src', usuario['avatar']);
        img.classList.add('imgTabla');
        avatar.innerHTML = img;
        txt_primerNombre.innerHTML = usuario['primerNombre'];
        txt_segundoNombre.innerHTML = usuario['segundoNombre'];
        txt_primerApellido.innerHTML = usuario['primerApellido'];
        txt_segundoApellido.innerHTML = usuario['segundoApellido'];
        txt_sexo.innerHTML = usuario['sexo'];
        txt_identificacion.innerHTML = usuario['identificacion'];
        txt_correo.innerHTML = usuario['correo'];
        txt_provincia.innerHTML = usuario['provincia'];
        txt_canton.innerHTML = usuario['canton'];
        txt_distrito.innerHTML = usuario['distrito'];
        txt_direccion.innerHTML = usuario['direccion'];

    }
};

llenar_perfil();
