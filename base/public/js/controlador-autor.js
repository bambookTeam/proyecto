'use strict';

const boton_registrar = document.querySelector('#btn-registrar-autor');
const input_nombre = document.querySelector('#txt-nombre-autor');
const input_nombre_artistico = document.querySelector('#txt-nombre-artistico-autor');
const input_fecha_nacimiento = document.querySelector('#txt-nacimiento-autor');
const input_fecha_muerte = document.querySelector('#txt-muerte-autor');
const input_nacionalidad = document.querySelector('#txt-nacionalidad-autor');
const input_biografia = document.querySelector('#txt-biografia-autor');
const input_premios = document.querySelector('#txt-premios-autor');
const input_foto = document.querySelector('#foto');



let validar = (pnombre, pnombre_artistico, pfecha_nacimiento, pfecha_muerte, pnacionalidad, pbiografia, ppremios, pfoto) => {

    let error = false;

    if (pnombre == '') {
        error = true;
        input_nombre.classList.add('input_error');
    } else {
        input_nombre.classList.remove('input_error');
    }

    if (pnombre_artistico == '') {
        error = true;
        input_nombre_artistico.classList.add('input_error');
    } else {
        input_nombre_artistico.classList.remove('input_error');
    }

    if (pfecha_nacimiento == '') {
        error = true;
        input_fecha_nacimiento.classList.add('input_error');
    } else {
        input_fecha_nacimiento.classList.remove('input_error');
    }

    if (pfecha_muerte == '') {
        error = true;
        input_fecha_muerte.classList.add('input_error');
    } else {
        input_fecha_muerte.classList.remove('input_error');
    }

    if (pnacionalidad == '') {
        error = true;
        input_nacionalidad.classList.add('input_error');
    } else {
        input_nacionalidad.classList.remove('input_error');
    }

    if (pbiografia == '') {
        error = true;
        input_biografia.classList.add('input_error');
    } else {
        input_biografia.classList.remove('input_error');
    }

    if (ppremios == '') {
        error = true;
        input_premios.classList.add('input_error');
    } else {
        input_premios.classList.remove('input_error');
    }

    if (pfoto == '') {
        error = true;
        input_foto.classList.add('input_error');
    } else {
        input_foto.classList.remove('input_error');
    }

    return error;
};

let saludar = () => {


    let nombre = input_nombre.value;
    let nombre_artistico = input_nombre_artistico.value;
    let fecha_nacimiento = input_fecha_nacimiento.value;
    let fecha_muerte = input_fecha_muerte.value;
    let nacionalidad = input_nacionalidad.value;
    let biografia = input_biografia.value;
    let premios = input_premios.value;
    let foto = input_foto.value;

    let error = validar(nombre, nombre_artistico, fecha_nacimiento, fecha_muerte, nacionalidad, biografia, premios, foto);

    if (error == false) {
        registrarAutor(nombre, nombre_artistico, fecha_nacimiento, fecha_muerte, nacionalidad, biografia, premios, foto);
        Swal.fire({ //formato json
            title: 'Se ha registrado exitosamente',
            type: 'success',
            text: 'El autor estará disponible a la hora de registrar un libro'
        })
    } else {
        Swal.fire({ //formato json
            title: 'No se ha podido registrar',
            type: 'warning',
            text: 'Revise los campos resaltados e inténtelo de nuevo'
        })
    }

};


boton_registrar.addEventListener('click', saludar);



function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('#imagen')
                .attr('src', e.target.result)
                .width(150)
                .height(200);
        };

        reader.readAsDataURL(input.files[0]);
    }
}
