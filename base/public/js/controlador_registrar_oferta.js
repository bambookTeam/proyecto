'use strict';
var btnRegistraroferta = document.getElementById('btn-registrar-oferta'),
    overlay = document.getElementById('overlay'),
    popup = document.getElementById('popup'),
    cerrarpopup = document.getElementById('cerrar'),
    imgoferta=document.getElementById('#image_preview'),
    agregar=document.getElementById('#boton_subir_imagen');

   
  btnRegistraroferta.addEventListener('click', function(){
    overlay.classList.add('active');
    popup.classList.add('active');
});

cerrarpopup.addEventListener('click', function () {
    overlay.classList.remove('active');
    popup.classList.add('remove');

});
 let validar =(pimgoferta) => {
if (pimgoferta == '') {
    error = true;
    imgoferta.classList.add('input_error');
} else {
    imgoferta.classList.remove('input_error');
    registrarOferta(pimgoferta);
    
return error;
}


let saludar = () => {
let imagen= imgoferta.src;

let error=validar(imagen)

if (error == false) {
    registrarOferta(imagen);
    Swal.fire({
            type: 'success',
            title: 'El libro se ha registrado exitosamente'
        })
} else {
    Swal.fire({
            type: 'warning',
            title: 'No se ha podido registrar el libro',
            text: 'Revise los campos resaltados e inténtelo de nuevo'
        })
}

};
const agregar=document.querySelector('#boton_subir_imagen');
agregar.addEventListener('click', function(){
    overlay.classList.add('active');
    popup.classList.add('active');
});

 }
 
