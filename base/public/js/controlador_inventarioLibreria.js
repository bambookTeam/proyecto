'use strict'

const tbody = document.querySelector('#tbl_inventario tbody');
const cerrarpopup = document.querySelector('#cerrar');
const boton_agregarLibro = document.querySelector('#btn-agregar-libro');

let mostrar_inventario = async() =>{

    let inventario_libreria = await crearInventario(); 

    inventraio_libreria = inventraio_libreria.reverse();

    for ( let i = 0; i< inventraio_libreria.length; i++){

        let fila = tbody.insertRow();
        

        //SE PODRIA AGREGAR LA SUCURSAL EN LA QUE SE ENCUENTRAN LOS LIBROS PARA QUE
        //SEA MAS FACIL LA BUSQUEDA PARA EL USUARIO

        fila.insertCell().innerHTML = inventario_libreria[i]['isbn'];
        fila.insertCell().innerHTML = inventario_libreria[i]['titulo'];
        fila.insertCell().innerHTML = inventario_libreria[i]['autor'];
        fila.insertCell().innerHTML = inventario_libreria[i]['precio'];
        fila.insertCell().innerHTML = inventario_libreria[i]['cant'];
        
        
    
    }

};


let crearInventario = async() => {

    let inventario_libreria = [];

    lsita_inventarioLibreria = await obtenerInventarioLibreria();
    lista_libros = await obtenerLibros ();


    for( let i = 0; i < lista_libros.length; i++){

        for ( let j = 0; j< lista_inventarioLibreria.length; j++){

            if(lista_libros[i]['isbn'] == lista_inventarioLibreria[j]['isbn']){

                inventario_general[cont] = {
                    "isbn" : lista_libros[i]['isbn'],
                    "titulo": lista_libros[i]['titulo'],
                    "autor": lista_libros[i]['autor'],
                    "precio": lista_libros[i]['precio'],
                    "cant": lista_inventarioLibreria[j]['cant'],
                    "_id": lista_inventarioLibreria[j]['_id']
                    
                }

                cont ++;
                
            }

        }
    

    }

    localStorage.clear




};


boton_agregarLibro.addEventListener('click', function() {
    
    window.location.href = 'agregar_inventario_libreria.html'; 


});