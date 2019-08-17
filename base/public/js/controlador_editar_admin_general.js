'use strict';


const boton_enviar = document.querySelector('#btn-guardar');
const img_avatar = document.querySelector('#img_avatar');
const input_nombre_usuario = document.querySelector('#txt_nombre_usuario');
const input_correo = document.querySelector('#txt_correo');
const input_contrasena = document.querySelector("#txt_contrasena")
const urlParams = new URLSearchParams(window.location.search);
let _id = urlParams.get('_id');

let cargar_formulario = async () => {
    let usuario = await obtenerUsuarioId(_id);
    if (usuario) {
        img_avatar.value=usuario["img_avatar"];
        input_nombre_usuario.value = usuario['nombreUsuario'];
        input_correo.value= usuario['correo'];
        input_contrasena.value=usuario["contrasena"];
    }
};
let editar = () => {

    modificarUsuarioCliente(_id,img_avatar.value, input_nombre_usuario.value, input_correo.value, input_contrasena.value);
};


cargar_formulario();
boton_enviar.addEventListener('click', editar);