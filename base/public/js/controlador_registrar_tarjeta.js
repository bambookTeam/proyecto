'use strict';
var btnRegistrartarjeta = document.getElementById('btn-registrar-tarjeta'),
    overlay = document.getElementById('overlay'),
    popup = document.getElementById('popup'),
    cerrarpopup = document.getElementById('cerrar');
const  input_numerotarjeta = document.getElementById('txt-numerotarjeta'),
    input_fechavencimiento = document.getElementById('txt-fechadevencimiento'),
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
        
        if(Date.parse(input_fechavencimiento.value) < Date.parse(today)){
        
            error = true;
            input_fechavencimiento.classList.add('input_error');

        }else {

            input_fechavencimiento.classList.remove('input_error');
        }


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

let validarNumTarjeta = (pNumeroTarjeta) => {
    let error = false;
    for (let i = 0; i < listar_tarjetas.length; i++) {
        if (pNumeroTarjeta === listar_tarjetas[i].numerotarjeta) {
            error = true;
        
        }
    }
    return error;
};

let limpiarForm = () => {
    document.getElementById('txt-numerotarjeta').value = "";
    document.getElementById('txt-fechadevencimiento').value = "";
    document.querySelector('#txt-codigocvv').value = "";
};

let cerrar =() => {
    overlay.classList.remove('active');
    popup.classList.add('remove');
}
let registraTarjeta = () => {



    let numerotarjeta = input_numerotarjeta.value;
    let errorNumeroTarjeta = validarNumTarjeta(numerotarjeta);
    let fechavencimiento = input_fechavencimiento.value;
    let codigocvv = input_codigocvv.value;
    let error = validar(numerotarjeta, fechavencimiento, codigocvv);

    if(errorNumeroTarjeta == true) {
        Swal.fire({ //formato json
            title: 'El número de tarjeta ya se encuentra registrado',
            type: 'warning',
            text: 'Registre otro número de tarjeta'
        })           
    } else {
        if (error == false) {
            Swal.fire({ //formato json
                title: 'Se ha agregado su tarjeta exitosamente',
                type: 'success'
            })
            registrarTarjeta(numerotarjeta, fechavencimiento, codigocvv);
            limpiarForm();
            cerrar();
        } else {
            Swal.fire({ //formato json
                title: 'No se ha podido registrar su tarjeta',
                type: 'warning',
                text: 'Revise los campos resaltados e inténtelo de nuevo'
            })
        }
    }

    
}
const agregar = document.getElementById('btn-agregar');
agregar.addEventListener('click', registraTarjeta);





