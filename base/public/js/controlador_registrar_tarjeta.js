'use strict';
var btnRegistrartarjeta = document.getElementById('btn-registrar-tarjeta'),
    overlay = document.getElementById('overlay'),
    popup = document.getElementById('popup'),
    cerrarpopup = document.getElementById('cerrar'),
    input_numerotarjeta = document.getElementById('txt-numerodetarjeta'),
    input_fechavencimiento = document.querySelector('#txt-fechadevencimiento'),
    input_codigocvv = document.querySelector('#txt-codigocvv');
     

var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

today = mm + '-' + dd + '-' + yyyy;



btnRegistrartarjeta.addEventListener('click', function () {
    overlay.classList.add('active');
    popup.classList.add('active');
});

cerrarpopup.addEventListener('click', function () {
    overlay.classList.remove('active');
    popup.classList.add('remove');

});


let validar = (pnumerotarjeta, pfechavencimiento, pcodigocvv) => {
    let error = false;

    // 

    if ((pnumerotarjeta == '') ||(pnumerotarjeta.length != 16)){
        error = true;
        input_numerotarjeta.classList.add('input_error');
    } else {
        input_numerotarjeta.classList.remove('input_error');
    }

    if (pfechavencimiento == '')  {
        error = true;
        input_fechavencimiento.classList.add('input_error');
    } else {
        input_fechavencimiento.classList.remove('input_error');

    }


    if ((pcodigocvv == '') || (pcodigocvv.length != 3)){
        error = true;
        input_codigocvv.classList.add('input_error');
    } else {
        input_codigocvv.classList.remove('input_error');
        registrarTarjeta(pnumerotarjeta, pfechavencimiento, pcodigocvv);
        mostrarlista();
    }

    return error;
};


    let saludar = () => {


        let numerotarjeta = input_numerotarjeta.value;
        let fechavencimiento = input_fechavencimiento.value;
        let codigocvv = input_codigocvv.value;
        let error = validar(numerotarjeta, fechavencimiento, codigocvv);

        if (error == false) {
            Swal.fire({ //formato json
                title: 'Se ha agregado su tarjeta exitosamente',
                type: 'success'

            })
        } else {
            Swal.fire({ //formato json
                title: 'No se ha podido registrar su tarjeta',
                type: 'warning',
                text: 'Revise los campos resaltados e inténtelo de nuevo'
            })
        }
    }
    const agregar = document.querySelector('#btn-agregar');
    agregar.addEventListener('click', saludar);
   






