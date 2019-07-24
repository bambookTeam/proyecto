'use strict';

const boton_registrar = document.querySelector('#btn_registrar');

const input_identificacion = document.querySelector('#txt_identificacion');
const input_primer_nombre = document.querySelector('#txt_primer_nombre');
const input_segundo_nombre = document.querySelector('#txt_segundo_nombre');
const input_primer_apellido = document.querySelector('#txt_primer_apellido');
const input_segundo_apellido = document.querySelector('#txt_segundo_apellido');
const input_sexo = document.querySelector('#txt_sexo');
const input_correo = document.querySelector('#txt_correo');

let validar = (pidentificacion, pprimer_nombre, psegundo_nombre, pprimer_apellido, psegundo_apellido, psexo, pcorreo) => {

    let error = false;

    //Validar identificación
    if (pidentificacion == '') {
        error = true;
        input_primer_nombre.classList.add('input_error');
    } else {
        input_primer_nombre.classList.remove('input_error');
    }

    //Validar primer_nombre
    if (pprimer_nombre == '') {
        error = true;
        input_primer_nombre.classList.add('input_error');
    } else {
        input_primer_nombre.classList.remove('input_error');
    }

    //Validar segundo_nombre
    if (psegundo_nombre == '') {
        error = true;
        input_segundo_nombre.classList.add('input_error');
    } else {
        input_segundo_nombre.classList.remove('input_error');
    }

    //Validar primer_apellido
    if (pprimer_apellido == '') {
        error = true;
        input_primer_apellido.classList.add('input_error');
    } else {
        input_primer_apellido.classList.remove('input_error');
    }

    //Validar segundo_apellido
    if (psegundo_apellido == '') {
        error = true;
        input_segundo_apellido.classList.add('input_error');
    } else {
        input_segundo_apellido.classList.remove('input_error');
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

    return error;
};

let saludar = () => {
    let identificacion = input_identificacion.value;
    let primer_nombre = input_primer_nombre.value;
    let segundo_nombre = input_segundo_nombre.value;
    let primer_apellido = input_primer_apellido.value;
    let segundo_apellido = input_segundo_apellido.value;
    let sexo = input_sexo.value;
    let correo = input_correo.value;

    let error = validar(identificacion, primer_nombre, segundo_nombre, primer_apellido, segundo_apellido, sexo, correo);

    if (error == false) {
        registrarAdminLibreria(identificacion, primer_nombre, segundo_nombre, primer_apellido, segundo_apellido, sexo, correo);
        Swal.fire({ //formato Jason
            title: 'El administrador de librería se a registrado exitosamente',
            type: 'success',
            text: 'Nos pondremos en contacto con usted, tan pronto nos sea posible'
        })
    } else {
        Swal.fire({ //formato Jason
            title: 'No se ha podido registrar el administrador de librería',
            type: 'warning',
            text: 'Revise los campos resaltados e inténtelo de nuevo'
        })
    }
};
    
boton_registrar.addEventListener('click',saludar);