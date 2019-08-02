'use strict';


const boton_registrar = document.querySelector('#btn_registrar');
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


const input_contrasena = document.querySelector('#txt_contrasena');

const input_avatar = document.querySelector('#img_avatar');


let validarIdentificacion = (pidentificacion) =>
{
    let validacionId = false;


    if(pidentificacion.length != 9){

        validacionId = true;

    }else
    {

    for(let i =0; i < pidentificacion.length; i++)
    {
        pidentificacion.charAT

    }

    }

}

let validar = (pnombre1, pnombre2, papellido1, papellido2, psexo, pidentificacion, pcorreo, pdireccion, pnombreUsuario, pcontrasena) => {

    let error = false;

    if (pnombre1 == '')
    {
        error = true;
        input_primer_nombre.classList.add('input_error');

    }else
    {
        input_primer_nombre.classList.remove('input_error');

    }


    if (papellido1 == '')
    {
        error = true;
        input_primer_apellido.classList.add('input_error');

    }else
    {
        input_primer_apellido.classList.remove('input_error');

    }



    if (psexo== '')
    {
        error = true;
        select_sexo.classList.add('input_error');

    }else
    {
        select_sexo.classList.remove('input_error');

    }


    if (pidentificacion == '')
    {
        error = true;
        input_identificacion.classList.add('input_error');

    }else
    {
        input_identificacion.classList.remove('input_error');

    }




    /*
    if( pidentificacion.charAt(0) !='0')
    {

        error = true;
        input_identificacion.classList.add('input_error');

    }else
     {

        input_identificacion.classList.remove('input_error');

    }
    */


    if (pcorreo == '')
    {
        error = true;
        input_correo.classList.add('input_error');

    }else
    {
        input_correo.classList.remove('input_error');

    }

/*
 SE DEBE DE TENER EN LA BASE DE DATOS LOS CANTONES RELACIONADOS CON LA PROVINCIA
 PARA PODER MOSTRAR UN SELECT CON LOS CANTONES RESPECTIVOS

    if (pprovincia == '')
    {
        error = true;
        select_provincia.classList.add('input_error');

    }else
    {
        select_provincia.classList.remove('input_error');

    }


    if (pcanton == '')
    {
        error = true;
        input_canton.add('input_error');

    }else
    {
        input_canton.remove('input_error');

    }




    if (pdistrito == '')
    {
        error = true;
        input_distrito.add('input_error');

    }else
    {
        input_distrito.remove('input_error');

    } */


    if (pdireccion == '')
    {
        error = true;
        input_direccion.classList.add('input_error');

    }else
    {
        input_direccion.classList.remove('input_error');

    }


    if (pnombreUsuario == '')
    {
        error = true;
        input_nombre_usuario.classList.add('input_error');

    }else
    {
        input_nombre_usuario.classList.remove('input_error');

    }

     //Validar contraseña
    /* if (pcontrasena == '') {
        error = true;
        input_contrasena.classList.add('input_error');
    } else {
        input_contrasena.classList.remove('input_error');
    }
    */

    return error;

};

let guardar =() =>
{

    let nombre1 = input_primer_nombre.value;
    let nombre2 = input_segundo_nombre.value;
    let apellido1 = input_primer_apellido.value;
    let apellido2 = input_segundo_apellido.value;
    let identificacion = input_identificacion.value;
    let sexo = select_sexo.value;
    let correo = input_correo.value;
    let provincia = select_provincia.value;
    let canton = select_canton.value;
    let distrito = select_distrito.value;
    let direccion = input_direccion.value;
    let nombreUsuario =input_nombre_usuario.value;
    let tipo = 2;
    //let contrasena = input_contrasena.value;

    //let avatar = input_avatar.value;



    let error = validar(nombre1, nombre2, apellido1, apellido2,sexo,identificacion, correo, direccion, nombreUsuario);

    if( error == false )
    {
        registroEnLinea(nombre1,nombre2,apellido1,apellido2,sexo,identificacion,correo,provincia,canton,distrito,direccion,nombreUsuario,tipo)
        Swal.fire({
            title: 'Se ha guardado el cliente',
            type: 'success',
            text: 'Se enviara un correo para confirmar su cuenta'
        })
    }else
    {
        Swal.fire({
            title: 'No se pudo hacer el registro',
            type: 'warning',
            text: 'Revise los campos resaltados e inténtelo de nuevo'
        })


    }
};





boton_registrar.addEventListener('click', guardar);
