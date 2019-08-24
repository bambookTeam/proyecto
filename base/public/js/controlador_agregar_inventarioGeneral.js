'use strict';

const boton_agregar = document.querySelector('#btn-agregar');
const input_existencias = document.querySelector('#txt-existencias');


let validar = (pexistencias) => {

    let error = false; 

    if(pexistencias <= 0){

        error = true; 
        input_existencias.classList.add('input_error');
    }else {

        input_existencias.classList.remove('input_error');
    }

    return error;

};


let agregar = () => {

    let existencias = input_existencias.value; 
    
    let inventario = JSON.parse(localStorage.getItem("inventario")); 
    console.log(inventario._id);
   
    let error = validar( existencias);

    

    if( error == false ){

        

        agregarInventario(inventario._id, inventario.cant + existencias);

        Swal.fire({ //formato Jason
            title: 'Se ha agregado con exito',
            type: 'success',
            text: 'Se ha registrado el inventario'
        })

    }else {

        Swal.fire({ //formato Jason
            title: 'No se pudo registrar el inventario',
            type: 'warning',
            text: 'Se agregó el inventario con éxito'

        })

    }

    
}; 


boton_agregar.addEventListener('click', agregar);

