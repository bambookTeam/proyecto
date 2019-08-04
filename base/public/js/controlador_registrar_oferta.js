'use strict';
var btnRegistraroferta = document.getElementById('btn-registrar-oferta'),
    overlay = document.getElementById('overlay'),
    popup = document.getElementById('popup'),
    cerrarpopup = document.getElementById('cerrar'),
    imgoferta=document.getElementById('#image_preview'),
    btn_subir_oferta=document.querySelector('#subir_oferta');
   
   
  btnRegistraroferta.addEventListener('click', function(){
    overlay.classList.add('active');
    popup.classList.add('active');
});

cerrarpopup.addEventListener('click', function () {
    overlay.classList.remove('active');
    popup.classList.add('remove');



});

btn_subir_oferta.onclick= function(){
    overlay.classList.remove('active');
    popup.classList.add('remove');
   
};

 
let saludar = () => {
let imagen= imgoferta.src;
let error=false;

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



 
