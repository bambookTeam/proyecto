'use strict'

var lista_inventarioSucursal = [];
var lista_libros = [];

const tbody = document.querySelector('#tbl_inventario tbody');
const cerrarpopup = document.querySelector('#cerrar');
const boton_agregarLibro = document.querySelector('#btn-agregar-libro');


let mostrar_inventario = async() =>{

    let inventario_sucursal = await crearInventario(); 

    inventario_sucursal = inventario_sucursal.reverse();

    for ( let i = 0; i< inventario_sucursal.length; i++){

        let fila = tbody.insertRow();
        

        //SE PODRIA AGREGAR LA SUCURSAL EN LA QUE SE ENCUENTRAN LOS LIBROS PARA QUE
        //SEA MAS FACIL LA BUSQUEDA PARA EL USUARIO

        fila.insertCell().innerHTML = inventario_sucursal[i]['isbn'];
        fila.insertCell().innerHTML = inventario_sucursal[i]['titulo'];
        fila.insertCell().innerHTML = inventario_sucursal[i]['autor'];
        fila.insertCell().innerHTML = inventario_sucursal[i]['precio'];
        fila.insertCell().innerHTML = inventario_sucursal[i]['cant'];
        
        
    }

};


let crearInventario = async() => {

    let inventario_sucursal = [];

    // OJo con los metodos de los servicios

    
   // let idLibreria = await obtenerIdLibreria(sessionStorage.getItem('identificacion'));


    lista_inventarioSucursal = await inventarioSucursal(localStorage.getItem("_idSucursal"));
    lista_libros = await obtenerLibros ();
  

    let cont = 0; 

    //REVISAR EL USO DE CONT!!

    for( let i = 0; i < lista_libros.length; i++){

        for ( let j = 0; j< lista_inventarioSucursal.length; j++){

        
            
            if(lista_libros[i]['isbn'] == lista_inventarioSucursal[j]['isbn'] && localStorage.getItem('_idSucursal') == lista_inventarioSucursal[j]['idSucursal']){

                inventario_sucursal[cont] = {
                    "isbn" : lista_libros[i]['isbn'],
                    "titulo": lista_libros[i]['titulo'],
                    "autor": lista_libros[i]['autor'],
                    "precio": lista_libros[i]['precio'],
                    "cant": lista_inventarioSucursal[j]['cant'],
                    "_id": lista_inventarioSucursal[j]['_id']
                    
                }

                cont ++;
                
            }

            

        }
    

    }

// OJO CON EL LOCALStorage 

   // localStorage.clear();
    

    return inventario_sucursal;

};


boton_agregarLibro.addEventListener('click', function() {
    
    window.location.href = 'registrar_inventario_sucursal.html'; 


});

window.addEventListener('load', mostrar_inventario);