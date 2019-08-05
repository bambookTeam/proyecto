//'use strict';
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
    registrarNuevaOferta();   
};

 
let registrarNuevaOferta = () => {

let error=false;

if (error == false) {
    registrarOferta();
    
    setTimeout(function(){ parent.innerHtml = ""; 
    addNew() 
    alert("Hello");

}, 3000);

    Swal.fire({
            type: 'success',
            title: 'La oferta se ha registrado exitosamente'
        })
} else {
    Swal.fire({
            type: 'warning',
            title: 'No se ha podido registrar la oferta',
            text: 'Revise los campos resaltados e inténtelo de nuevo'
        })
}

};



 
