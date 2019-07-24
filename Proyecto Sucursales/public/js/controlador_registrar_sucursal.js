'use strict';

const boton_registrar = document.querySelector('#btn_registrar');

const input_nombre = document.querySelector('#txt_nombre');
const input_telefono = document.querySelector('#txt_telefono');
const input_correo = document.querySelector('#txt_correo');
const input_direccion = document.querySelector('#txt_direccion');

let validar = (pnombre, ptelefono, pcorreo, pdireccion) => {

    let error = false;

    //Validar nombre
    if (pnombre == '') {
        error = true;
        input_nombre.classList.add('input_error');
    } else {
        input_nombre.classList.remove('input_error');
    }

    //Validar telefono
    if (ptelefono == '') {
        error = true;
        input_telefono.classList.add('input_error');
    } else {
        input_telefono.classList.remove('input_error');
    }

    //Validar correo
    if (pcorreo == '') {
        error = true;
        input_correo.classList.add('input_error');
    } else {
        input_correo.classList.remove('input_error');
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
    let nombre = input_nombre.value;
    let telefono = input_telefono.value;
    let correo = input_correo.value;
    let direccion = input_direccion.value;

    let error = validar(nombre, telefono, correo, direccion);

    if (error == false) {
        registrarSucursal(nombre, telefono, correo, direccion);
        Swal.fire({ //formato Jason
            title: 'La sucursal se a registrado exitosamente',
            type: 'success',
            text: 'Nos pondremos en contacto con usted, tan pronto nos sea posible'
        })
    } else {
        Swal.fire({ //formato Jason
            title: 'No se ha podido registrar la sucursal',
            type: 'warning',
            text: 'Revise los campos resaltados e inténtelo de nuevo'
        })
    }
};
    
boton_registrar.addEventListener('click', saludar);