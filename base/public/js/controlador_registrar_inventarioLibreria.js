'use strict'

var inventarioGeneral ;

const boton_agregar_inventario = document.querySelector('#btn-agregar-inventario');
const input_existencias = document.querySelector('#txt-existencias');

let validar = (pexistencias) => {


    let error = false; 

    if( pexistencias == null) {
        
        error = true; 
        input_existencias.classList.add('input_error') ;   

    } else {

     

        if(pexistencias <= inventarioGeneral.cant){

            input_existencias.classList.remove('input_error');
            
        }else {

            error = true;
            input_existencias.classList.add('input_error')
        }
    }


    return error;

};

let agregar = () => {

    inventarioGeneral = JSON.parse(localStorage.getItem("inventario"));
    let existencias = parseInt(input_existencias.value);

  //  let inventario = JSON.parse(localStorage.getItem("inventario"));
    
    let error = validar(existencias);

    if(error == false){

        //registrarInventarioLibreria(inventarioGeneral.isbn, sessionStorage.getItem('identificacion'), inventarioGeneral.cant + existencias);
    
       // verificarInventario(inventarioGeneral.isbn, sessionStorage.getItem('identificacion'), existencias, inventarioGeneral.precio);

        registrarInventarioLibreria(inventarioGeneral.isbn, sessionStorage.getItem('identificacion'), existencias, inventarioGeneral.precio);


        disminuirInventario(inventarioGeneral._id, inventarioGeneral.cant - existencias );

        
       
        
        Swal.fire ({
            title: 'Se ha agregado con éxito ',
            type: 'success',
            text: 'Se ha registrado el inventario'
            
        })


        location.replace('inventario_libreria.html');
    }else {

        Swal.fire({
            title: 'No se pudo registrar el inventario',
            type: 'warning',
            text: 'No se agrego el inventario'
        })


    }

};

boton_agregar_inventario.addEventListener('click', agregar );