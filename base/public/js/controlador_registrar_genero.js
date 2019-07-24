'use strict';
var btnRegistrargenero = document.getElementById('btn-registrar-genero'),
    overlay = document.getElementById('overlay'),
    popup = document.getElementById('popup'),
    cerrarpopup = document.getElementById('cerrar'),
    input_genero = document.getElementById('txt-genero'),
    lista_genero=[];


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
        document.location.reload();
        mostrarlista();
    }

    return error;
};

let mostrarlista=async() =>{
    lista_genero=[];
    lista_genero= await listarGenero();

    let section=document.getElementById('generos_lista');
    section.innerHTML=" ";

    for (let index = 0; index < lista_genero.length; index++) {
       let parrafo=document.createElement('p');
       parrafo.innerHTML= lista_genero[index]['genero'];
       section.appendChild(parrafo);
        
    }

    
    

}
let saludar =() =>{
    console.log('Hola');

    
let genero = input_genero.value;
let error = validar(genero);

if (error == false) {
    Swal.fire({ //formato json
        title: 'Se ha agregado su género exitosamente',
        type: 'success'
       
    })
} else {
    Swal.fire({ //formato json
        title: 'No se ha podido registrar el género',
        type: 'warning',
        text: 'Revise los campos resaltados e inténtelo de nuevo'
    })
}}
const agregar=document.querySelector('#btn-agregar');
agregar.addEventListener('click',saludar);
window.addEventListener('load',mostrarlista);
agregar.addEventListener('click',mostrarlista);



