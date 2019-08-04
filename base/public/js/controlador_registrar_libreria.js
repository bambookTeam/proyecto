'use strict';

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

let validarIdentificacion = (pidentificacion) =>{
    let validacionId = false;

    if (pidentificacion.length != 9) {
        validacionId = true;

    } else {
        for(let i =0; i < pidentificacion.length; i++) {
        pidentificacion.charAT
        }
    }

};

let validar = (pnombre_comercial, pnombre_fantasia, pdireccion, pidentificacion, pprimer_nombre, psegundo_nombre, pprimer_apellido, psegundo_apellido, psexo, pcorreo, pnombre_usuario) => {

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
    if (pidentificacion == '') {
        error = true;
        input_identificacion.classList.add('input_error');
    } else {
        input_identificacion.classList.remove('input_error');
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
    }

    //Validar nombre usuario
    if (pnombre_usuario == '') {
        error = true;
        input_nombre_usuario.classList.add('input_error');
    } else {
        input_nombre_usuario.classList.remove('input_error');
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

    let provincia = null;
    let canton = null;
    let distrito = null;

    let tipo = 1;

    let error = validar(nombre_comercial, nombre_fantasia, direccion, identificacion, primer_nombre, segundo_nombre, primer_apellido, segundo_apellido, sexo, correo, nombre_usuario);
   
    if (error == false) {

        registrarLibreria(nombre_comercial, nombre_fantasia, direccion);
        
        registroEnLinea (primer_nombre, segundo_nombre, primer_apellido, segundo_apellido, sexo, identificacion, correo, provincia, canton, distrito, direccion, nombre_usuario,tipo);

        //(pnombre1, pnombre2, papellido1, papellido2, psexo, pidentificacion, pcorreo, pprovincia, pcanton, pdistrito, pdireccion, pnombreUsuario, ptipo)

        Swal.fire({ //formato Jason
            title: 'La librería se a registrado exitosamente',
            type: 'success',
            text: 'Nos pondremos en contacto con usted, tan pronto nos sea posible'
        })
    } else {
        Swal.fire({ //formato Jason
            title: 'No se ha podido registrar la librería',
            type: 'warning',
            text: 'Revise los campos resaltados e inténtelo de nuevo'
        })
    }
};

boton_registrar.addEventListener('click',saludar);
    
