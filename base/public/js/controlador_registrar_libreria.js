'use strict';

const boton_registrar = document.querySelector('#btn_registrar');

const input_nombre_comercial = document.querySelector('#txt_nombre_comercial');
const input_nombre_fantasia = document.querySelector('#txt_nombre_fantasia');
const input_direccion = document.querySelector('#txt_direccion');

let validar = (pnombre_comercial, pnombre_fantasia, pdireccion) => {

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

    return error;
};

let saludar = () => {
    let nombre_comercial = input_nombre_comercial.value;
    let nombre_fantasia = input_nombre_fantasia.value;
    let direccion = input_direccion.value;

    let error = validar(nombre_comercial, nombre_fantasia, direccion);

    if (error == false) {

        registrarLibreria(nombre_comercial, nombre_fantasia, direccion);
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