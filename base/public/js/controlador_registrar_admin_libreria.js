'use strict';

const input_identificacion = document.querySelector('#txt_identificacion');
const input_primer_nombre = document.querySelector('#txt_primer_nombre');
const input_segundo_nombre = document.querySelector('#txt_segundo_nombre');
const input_primer_apellido = document.querySelector('#txt_primer_apellido');
const input_segundo_apellido = document.querySelector('#txt_segundo_apellido');
const input_sexo = document.querySelector('#txt_sexo');
const input_correo = document.querySelector('#txt_correo');

let registrarAdmin = () => {
    let identificacion = input_identificacion.value;
    let primer_nombre = input_primer_nombre.value;
    let segundo_nombre = input_segundo_nombre.value;
    let primer_apellido = input_primer_apellido.value;
    let segundo_apellido = input_segundo_apellido.value;
    let sexo = input_sexo.value;
    let correo = input_correo.value;
    let nombre_comercial = input_nombre_comercial.value;
    let nombre_fantasia = input_nombre_fantasia.value;
    let direccion = input_direccion.value;


    let error = validar(nombre_comercial, nombre_fantasia, direccion, identificacion, primer_nombre, segundo_nombre, primer_apellido, segundo_apellido, sexo, correo);

    if (error == false) {

        //registrarAdminLibreria(identificacion, primer_nombre, segundo_nombre, primer_apellido, segundo_apellido, sexo, correo);
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
    
boton_registrar.addEventListener('click',registrarAdmin );