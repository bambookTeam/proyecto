'use strict';

const urlParams = new URLSearchParams(window.location.search);

let _id = urlParams.get('_id');

const txt_nombre = document.querySelector('#txt_nombre');
const txt_nombre_artistico = document.querySelector('#txt_nombre_artistico');
const txt_nacimiento = document.querySelector('#txt_nacimiento');
const txt_muerte = document.querySelector('#txt_muerte');
const txt_nacionalidad = document.querySelector('#txt_nacionalidad');
const txt_bio = document.querySelector('#txt_bio');
const txt_premios = document.querySelector('#txt_premios');
const foto = document.querySelector('#foto');

let llenar_perfil = async() => {
    let autor = await obtenerAutorId(_id);
    if (autor) {
        txt_nombre.innerHTML = autor['nombre_autor'];
        foto.innerHTML = autor['foto_autor'];
        txt_nombre_artistico.innerHTML = autor['nombre_artistico_autor'];
        txt_nacimiento.innerHTML = autor['fecha_nacimiento'];
        txt_muerte.innerHTML = autor['fecha_muerte'];
        txt_nacionalidad.innerHTML = autor['nacionalidad_autor'];
        txt_bio.innerHTML = autor['biografia_autor'];
        txt_premios.innerHTML = autor['premios_autor'];
    }
};

llenar_perfil();
