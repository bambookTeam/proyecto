'use strict';

let obtenerListaUsuarios = async (pcorreo) => {

    usuarios = await obtenerUsuarios();
    console.log(usuarios);
};

var usuarios = [];
usuarios = obtenerListaUsuarios();

const boton_registrar = document.querySelector('#btn_registrar');

const input_nombre_comercial = document.querySelector('#txt_nombre_comercial');
const input_nombre_fantasia = document.querySelector('#txt_nombre_fantasia');
const input_direccion = document.querySelector('#txt_direccion');

const input_identificacion = document.querySelector('#txt_identificacion');
const input_primer_nombre = document.querySelector('#txt_primer_nombre');
const input_segundo_nombre = document.querySelector('#txt_segundo_nombre');
const input_primer_apellido = document.querySelector('#txt_primer_apellido');
const input_segundo_apellido = document.querySelector('#txt_segundo_apellido');
const input_sexo = document.querySelector('#txt_sexo');
const input_correo = document.querySelector('#txt_correo');

const input_nombre_usuario = document.querySelector('#txt_nombre_usuario');

const select_provincia = document.querySelector('#txt_provincia');
const select_canton = document.querySelector('#txt_canton');
const select_distrito = document.querySelector('#txt_distrito')

const img_avatar = document.querySelector('#img_avatar_admin_libreria');


let validarCorreo = (pcorreo) => {

    let error = false;

    for (let i = 0; i < usuarios.length; i++) {

        if (usuarios[i].correo == pcorreo) {

            error = true;
            input_correo.classList.add('input_error');

        } else {

            input_correo.classList.remove('input_error');
        }

    }

    return error;

};

let validarIdentificacion = (pidentificacion) => {

    let error = false;

    for (let i = 0; i < usuarios.length; i++) {

        if (usuarios[i].identificacion == pidentificacion) {

            error = true;
            input_identificacion.classList.add('input_error');

        } else {

            if (pidentificacion.charAt(0) == '0') {

                error = true;
                input_identificacion.classList.add('input_error');

            } else {

                if (pidentificacion.length != 9) {

                    error = true;

                    input_identificacion.classList.add('input_error');

                } else {

                    input_identificacion.classList.remove('input_error');

                }


            }

        }

    }

    return error;
};

let validar = (pnombre_comercial, pnombre_fantasia, pdireccion, pidentificacion, pprimer_nombre, pprimer_apellido, psexo, pcorreo, pnombre_usuario, pprovincia, pcanton, pdistrito) => {

    let error = false;

    //Validar nombre_comercial
    if (pnombre_comercial == '') {
        error = true;
        input_nombre_comercial.classList.add('input_error');
    } else {
        input_nombre_comercial.classList.remove('input_error');
    }

    //Validar nombre_fantasia
    if (pnombre_fantasia == '') {
        error = true;
        input_nombre_fantasia.classList.add('input_error');
    } else {
        input_nombre_fantasia.classList.remove('input_error');
    }

    //Validar direccion
    if (pdireccion == '') {
        error = true;
        input_direccion.classList.add('input_error');
    } else {
        input_direccion.classList.remove('input_error');
    }

    //Validar identificación
    if (pidentificacion.length != 9) {
        error = true;
        input_identificacion.classList.add('input_error');
    } else {
        input_identificacion.classList.remove('input_error');
    }

    if (pidentificacion == '') {
        error = true;
        input_identificacion.classList.add('input_error');
    } else {
        //input_identificacion.classList.remove('input_error');

        input_identificacion.classList.remove('input_error');
        error = validarIdentificacion(pidentificacion);

        if (error == true) {

            input_identificacion.classList.add('input_error');

        } else {

            input_identificacion.classList.remove('input_error');

        }
    }


    //Validar primer_nombre
    if (pprimer_nombre == '') {
        error = true;
        input_primer_nombre.classList.add('input_error');
    } else {
        input_primer_nombre.classList.remove('input_error');
    }

    //Validar primer_apellido
    if (pprimer_apellido == '') {
        error = true;
        input_primer_apellido.classList.add('input_error');
    } else {
        input_primer_apellido.classList.remove('input_error');
    }

    //Validar sexo
    if (psexo == '') {
        error = true;
        input_sexo.classList.add('input_error');
    } else {
        input_sexo.classList.remove('input_error');
    }

    //Validar correo

    if (pcorreo == '') {
        error = true;
        input_correo.classList.add('input_error');

    } else {
        input_correo.classList.remove('input_error');
        error = validarCorreo(pcorreo);

        if (error == true) {

            input_correo.classList.add('input_error');

        } else {

            input_correo.classList.remove('input_error');

        }

    }

    //Validar nombre usuario
    if (pnombre_usuario == '') {
        error = true;
        input_nombre_usuario.classList.add('input_error');
    } else {
        input_nombre_usuario.classList.remove('input_error');
    }

    //Validar provincia
    if (pprovincia == '') {
        error = true;
        select_provincia.classList.add('input_error');
    } else {
        select_provincia.classList.remove('input_error');
    }

    //Validar cantón
    if (pcanton == '') {
        error = true;
        select_canton.classList.add('input_error');
    } else {
        select_canton.classList.remove('input_error');
    }

    //Validar distrito
    if (pdistrito == '') {
        error = true;
        select_distrito.classList.add('input_error');
    } else {
        select_distrito.classList.remove('input_error');
    }


    return error;
};

let saludar = () => {
    let nombre_comercial = input_nombre_comercial.value;
    let nombre_fantasia = input_nombre_fantasia.value;
    let direccion = input_direccion.value;

    let identificacion = input_identificacion.value;
    let primer_nombre = input_primer_nombre.value;
    let segundo_nombre = input_segundo_nombre.value;
    let primer_apellido = input_primer_apellido.value;
    let segundo_apellido = input_segundo_apellido.value;

    let sexo = input_sexo.value;
    let correo = input_correo.value;
    let nombre_usuario = input_nombre_usuario.value;

    let avatar = img_avatar.src;

    let provincia = select_provincia.value;
    let canton = select_canton.value;
    let distrito = select_distrito.value;

    let tipo = 1;

    let estado = 1;

    let error = validar(nombre_comercial, nombre_fantasia, direccion, identificacion, primer_nombre, primer_apellido, sexo, correo, nombre_usuario, provincia, canton, distrito);

    let errorid = validarIdentificacion(identificacion);

    // error = validarCorreo(correo);

    if (error == false && errorid == false) {

        registrarLibreria(nombre_comercial, identificacion, nombre_fantasia, direccion);

        registroAdminLibreria(primer_nombre, segundo_nombre, primer_apellido, segundo_apellido, sexo, identificacion, correo, provincia, canton, distrito, direccion, nombre_usuario, tipo, estado, avatar);

        obtenerBitacora();
        //location.replace('index.html');

    } else {
        Swal.fire({
            title: 'No se ha podido registrar la librería',
            type: 'warning',
            text: 'Revise los campos resaltados e inténtelo de nuevo'
        })
    }
};

let obtenerBitacora = async () => {
    let listaBitacora = [];
    listaBitacora = await obtener_Bitacora();
    let listaUsers = [];
    listaUsers = await obtenerUsuarios();
    let date = new Date();
    let descripcion = "";

    let usersBitacora = [];
    console.log(usersBitacora);
    for (let x = 0; x < listaBitacora.length; x++) {
        usersBitacora.push(listaBitacora[x].usuarioRegistrado);
    }

    for (let index = 0; index < listaUsers.length; index++) {
        let n = usersBitacora.includes(listaUsers[index]._id);

        if (n == false) {
            if (listaUsers[index].tipo == 1) {
                descripcion = "Registro Admin Libreria";
            } else {
                descripcion = "Registro Cliente";
            }
            registrarEnBitacora(listaUsers[index]._id, descripcion, date);
        }
    }
}

boton_registrar.addEventListener('click', saludar);