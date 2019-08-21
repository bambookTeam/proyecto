'use strict'

var inventarioLibreria ; 

const boton_agregar_inventario = document.querySelector('#btn-agregar-inventario');
const input_existencias = document.querySelector('#txt-existencias');

let validar = (pexistencias) => {


    let error = false; 


    if( pexistencias == null) {
        
        error = true; 
        input_existencias.classList.add('input_error') ;   

    } else {

     

        if(pexistencias <= inventarioLibreria.cant){

            input_existencias.classList.remove('input_error');
            
        }else {

            error = true;
            input_existencias.classList.add('input_error')
        }
    }


    return error;



};




let agregar = async () => {

    inventarioLibreria = JSON.parse(localStorage.getItem("inventarioLibreria"));
    let existencias = parseInt(input_existencias.value);
    let idLibreria ;
    idLibreria = await obtenerIdLibreria(inventarioLibreria.idAdminLibreria);

    let error = validar(existencias);

    if(error == false){

        verificarInventarioSucursal(inventarioLibreria.isbn, idLibreria, localStorage.getItem("_idSucursal") ,existencias);

        disminuirInventarioLibreria(inventarioLibreria._id, inventarioLibreria.cant - existencias);

        localStorage.removeItem("inventarioLibreria");
        
        Swal.fire ({
            title: 'Se ha agregado con éxito ',
            type: 'success',
            text: 'Se ha registrado el inventario'
            
        })
        
        
    }else {

        Swal.fire({
            title: 'No se pudo registrar el inventario',
            type: 'warning',
            text: 'No se agrego el inventario'
        })



    }

  //  localStorage.clear(); 
    // borra el id de la sucursal 
};


boton_agregar_inventario.addEventListener('click', agregar);