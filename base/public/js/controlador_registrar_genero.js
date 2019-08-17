'use strict';
var btnRegistrargenero = document.getElementById('btn-registrar-genero'),
    overlay = document.getElementById('overlay'),
    popup = document.getElementById('popup'),
    cerrarpopup = document.getElementById('cerrar'),
    input_genero = document.getElementById('txt-genero');
   

  btnRegistrargenero.addEventListener('click', function(){
    overlay.classList.add('active');
    popup.classList.add('active');
});

cerrarpopup.addEventListener('click', function () {
    overlay.classList.remove('active');
    popup.classList.add('remove');

});




let validar = (pgenero) => {
    let error = false;

    if (pgenero == '') {
        error = true;
        input_genero.classList.add('input_error');
    } else {
        input_genero.classList.remove('input_error');
        registrarGenero(pgenero);
        mostrarlista();
        
    }

    return error;
};

let validarElGenero = (pElGenero) => {
    let error = false;
    for (let i = 0; i < lista_genero.length; i++) {
        if (pElGenero === lista_genero[i].genero) {
            error = true;
        
        }
    }
    return error;
};

let limpiarForm = () => {
    document.getElementById('txt-genero').value = "";

};

let cerrar =() => {
    overlay.classList.remove('active');
    popup.classList.add('remove');
}

let registraGenero =() =>{
   

let genero = input_genero.value;
let erroGenero = validarElGenero(genero);
let error = validar(genero);

if(erroGenero == true) {
    Swal.fire({ //formato json
        title: 'El Género ya se encuentra registrado',
        type: 'warning',
        text: 'Registre otro género'
    })           
} else {
    if (error == false) {
        Swal.fire({ //formato json
            title: 'Se ha agregado su tarjeta exitosamente',
            type: 'success'
        })
        registraGenero(genero);
        limpiarForm();
        cerrar();
    } else {
        Swal.fire({ //formato json
            title: 'No se ha podido registrar su género',
            type: 'warning',
            text: 'Revise los campos resaltados e inténtelo de nuevo'
        })
    }
}


}
const agregar=document.querySelector('#btn-agregar');
agregar.addEventListener('click',registraGenero);




