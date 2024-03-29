'use strict';


const boton_enviar = document.querySelector('#btn-guardar');
const input_primer_nombre = document.querySelector('#txt_primer_nombre');
const input_segundo_nombre = document.querySelector('#txt_segundo_nombre');
const input_primer_apellido = document.querySelector('#txt_primer_apellido');
const input_segundo_apellido = document.querySelector('#txt_segundo_apellido');
const select_sexo = document.querySelector('#txt_sexo');
const input_identificacion = document.querySelector('#txt_identificacion');
const input_correo = document.querySelector('#txt_correo');
const select_provincia = document.querySelector('#txt_provincia');
const select_canton = document.querySelector('#txt_canton');
const select_distrito = document.querySelector('#txt_distrito')
const input_direccion = document.querySelector('#txt_direccion');
const input_nombre_usuario = document.querySelector('#txt_nombre_usuario');
const img_avatar = document.querySelector('#img_avatar');
const input_contrasena = document.querySelector("#txt_contrasena")
const urlParams = new URLSearchParams(window.location.search);
let _id = urlParams.get('_id');

let cargar_formulario = async () => {
    let usuario = await obtenerUsuarioId(_id);
    if (usuario) {
img_avatar.value=usuario["img_avatar"];
        input_primer_nombre.value = usuario['primerNombre'];
        input_segundo_nombre.value = usuario['segundoNombre'];
        input_primer_apellido.value= usuario['primerApellido'];
        input_segundo_apellido.value = usuario['segundoApellido'];
        select_sexo.value = usuario['sexo'];
        input_identificacion.value = usuario['identificacion'];
        input_correo.value= usuario['correo'];
        input_contrasena.value=usuario["contrasena"];
        select_provincia.value= usuario['provincia'];
        select_canton.value = usuario['canton'];
        select_distrito.value = usuario['distrito'];
        input_direccion.value = usuario['direccion'];
        input_nombre_usuario.value = usuario['nombreUsuario'];
    }
};
let editar = () => {

    modificarUsuarioCliente(_id, input_primer_nombre.value, input_segundo_nombre.value, input_primer_apellido.value, input_segundo_apellido.value,
    select_sexo.value, input_identificacion.value, input_correo.value, select_provincia.value, select_canton.value, 
    select_distrito.value, input_direccion.value, input_nombre_usuario.value,input_contrasena.value, img_avatar.value);

        Swal.fire({
            title: 'Listo',
            type: 'success',
            text: 'Se ha modificado el usuario'
        })
};



cargar_formulario();
boton_enviar.addEventListener('click', editar);