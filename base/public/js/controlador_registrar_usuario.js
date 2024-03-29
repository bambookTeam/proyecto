'use strict';

let obtenerListaUsuarios = async (pcorreo) => {
    usuarios = await obtenerUsuarios();
};

var usuarios = [];
usuarios = obtenerListaUsuarios();

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
const img_avatar = document.querySelector('#img_avatar');



/*
let validarIdentificacion = (pidentificacion) =>
{
    let validacionId = false;

    let numeros = '0123456789';

    let contNum = 0;


    if(pidentificacion.length != 9){

        validacionId = true;

        input_identificacion.classList.add('input_error');

    }else {

        input_identificacion.classList.remove('input_error');

    }


    for(let i=0; i<pidentificacion.length; i++){

        if (numeros.indexOf(pidentificacion.charAt(i),0)!=-1){
            contNum = 1;
           return contNum;
        }

        return contNum;

    }


  if ( contNum == 0){

    validacionId = true;

    input_identificacion.classList.add('input_error');

  }else {

    input_identificacion.classList.remove('input_error');

  }


    if( pidentificacion.charAt(0) == '0'){

        validacionId = true;
        input_identificacion.classList.add('input_error');
    } else {

        input_identificacion.classList.remove('input_error');

    }




    return validacionId;


};
*/

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




let validar = (pnombre1, papellido1, psexo, pidentificacion, pcorreo, pprovincia, pcanton, pdistrito, pdireccion, pnombreUsuario) => {

    let error = false;


    if (pprovincia == '') {

        error = true;
        select_provincia.classList.add('input_error');

    } else {

        select_provincia.classList.remove('input_error');

    }

    if (pcanton == '') {

        error = true;
        select_canton.classList.add('input_error');

    } else {

        select_canton.classList.remove('input_error');


    }

    if (pdistrito == '') {

        error = true;
        select_distrito.classList.add('input_error');

    } else {

        select_distrito.classList.remove('input_error');


    }

    if (pdireccion == '') {

        error = true;
        input_direccion.classList.add('input_error');

    } else {

        input_direccion.classList.remove('input_error')


    }



    if (pnombre1 == '') {
        error = true;
        input_primer_nombre.classList.add('input_error');

    } else {
        input_primer_nombre.classList.remove('input_error');

    }


    if (papellido1 == '') {
        error = true;
        input_primer_apellido.classList.add('input_error');

    } else {
        input_primer_apellido.classList.remove('input_error');

    }



    if (psexo == '') {
        error = true;
        select_sexo.classList.add('input_error');

    } else {
        select_sexo.classList.remove('input_error');

    }


    if (pidentificacion == '') {
        error = true;
        input_identificacion.classList.add('input_error');

    } else {

        input_identificacion.classList.remove('input_error');
        error = validarIdentificacion(pidentificacion);

        if (error == true) {

            input_identificacion.classList.add('input_error');

        } else {

            input_identificacion.remove('input_error');

        }

    }




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


    if (pnombreUsuario == '') {
        error = true;
        input_nombre_usuario.classList.add('input_error');

    } else {
        input_nombre_usuario.classList.remove('input_error');

    }



    return error;

};

let guardar = () => {
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
    let nombreUsuario = input_nombre_usuario.value;
    let tipo = 2;
    let estado = 1;
    let error = validar(nombre1, apellido1, sexo, identificacion, correo, provincia, canton, distrito, direccion, nombreUsuario);


    if (error == false) {

        registroEnLinea(nombre1, nombre2, apellido1, apellido2, sexo, identificacion, correo, provincia, canton, distrito, direccion, nombreUsuario, tipo, estado)

        Swal.fire({
            title: 'Se ha guardado el cliente',
            type: 'success',
            text: 'Se enviara un correo para confirmar su cuenta'
        });
        obtenerBitacora();
    } else {
        Swal.fire({
            title: 'No se pudo hacer el registro',
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
boton_registrar.addEventListener('click', guardar);

