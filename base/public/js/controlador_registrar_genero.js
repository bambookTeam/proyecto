'use strict';
var btnRegistrargenero = document.getElementById('btn-registrar-genero'),
    overlay = document.getElementById('overlay'),
    popup = document.getElementById('popup'),
    cerrarpopup = document.getElementById('cerrar'),
    input_genero = document.getElementById('txt-genero'),
    lista_genero=[],
    txt_filtro=document.querySelector('#txt_filtro');
   

  btnRegistrargenero.addEventListener('click', function(){
    overlay.classList.add('active');
    popup.classList.add('active');
});

cerrarpopup.addEventListener('click', function () {
    overlay.classList.remove('active');
    popup.classList.add('remove');
    cleanupFormTarjetas();

});

let cleanupFormGenero = () => {

    document.getElementById('txt-genero').reset();
    var h2Elements = document.getElementsByClassName("error");

    for (var i = 0; i < h2Elements.length; i++) {
        h2Elements[i].style.display = "none"
    }

    input_genero.classList.remove('input_error');
   
}


let validar = (pgenero) => {
    let error = false;

    if (pgenero == '') {
        error = true;
        input_genero.classList.add('input_error');
    } else {
        input_genero.classList.remove('input_error');
        registrarGenero(pgenero);
        mostrarlista();
        cleanupFormGenero();
        document.location.reload();
    }

    return error;
};

let mostrarlista=async() =>{
    lista_genero = await listarGenero();
    lista_genero= lista_genero.reverse();


    let section=document.getElementById('generos_lista');
    section.innerHTML=" ";

    for (let index = 0; index < lista_genero.length; index++) {
       let parrafo=document.createElement('p');
       parrafo.innerHTML= lista_genero[index]['genero'];
       section.appendChild(parrafo);
        
    }

    
    

}

let filtrarlista=async() =>{
let filtro=txt_filtro.value.toLowerCase();
let section=document.getElementById('generos_lista');

    section.innerHTML=" ";

    for (let index = 0; index < lista_genero.length; index++) {
      if(lista_genero[index]['genero'].toLowerCase().includes(filtro)){
        let parrafo=document.createElement('p');
       parrafo.innerHTML= lista_genero[index]['genero'];
       section.appendChild(parrafo);
        
    }

}

    
    

}
let saludar =() =>{
   

    
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
txt_filtro.addEventListener('keyup' , filtrarlista);




