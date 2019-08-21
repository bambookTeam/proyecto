'use strict'

var lista_libros = [];
var lista_inventarioLibreria = [];

const tbody = document.querySelector('#tbl_inventario tbody'); 
const cerrarpopup = document.querySelector('#cerrar');




let mostrar_inventario = async () => {

       

    let inventario_libreria = await crearInventario();
    
    inventario_libreria = inventario_libreria.reverse();
    
    for( let i = 0; i< inventario_libreria.length; i++){
        let fila = tbody.insertRow();


        fila.insertCell().innerHTML = inventario_libreria[i]['isbn'];
        fila.insertCell().innerHTML = inventario_libreria[i]['titulo'];
        fila.insertCell().innerHTML = inventario_libreria[i]['autor'];
        fila.insertCell().innerHTML = inventario_libreria[i]['precio'];
        fila.insertCell().innerHTML = inventario_libreria[i]['cant'];

        let celda_agregar = fila.insertCell();
        let boton_agregar = document.createElement('button');
            


        boton_agregar.type = 'button';
        boton_agregar.innerText = 'Agregar a inventario';
        
        celda_agregar.appendChild(boton_agregar);

        boton_agregar.addEventListener('click', function(){
        
            localStorage.setItem("inventarioLibreria", JSON.stringify(inventario_libreria[i]));

                    
            
            overlay.classList.add('active');
            popup.classList.add('active');
            

        });

        cerrarpopup.addEventListener('click', function () {
            overlay.classList.remove('active');
            popup.classList.add('remove');
        
        });

    }
    
    
};

let crearInventario = async() => {

    let inventario_libreria = [];

    lista_inventarioLibreria = await inventario();
    lista_libros = await obtenerLibros();

    let cont = 0; 

    for ( let i = 0; i < lista_libros.length; i++){

        for(let j = 0; j<lista_inventarioLibreria.length; j++){

            if(lista_libros[i]['isbn'] == lista_inventarioLibreria[j]['isbn']){

                inventario_libreria[cont] = {
                    "isbn" : lista_libros[i]['isbn'],
                    "titulo": lista_libros[i]['titulo'],
                    "autor": lista_libros[i]['autor'],
                    "precio": lista_libros[i]['precio'],
                    "cant": lista_inventarioLibreria[j]['cant'],
                    "idAdminLibreria": lista_inventarioLibreria[j]['idAdminLibreria'],
                    "_id": lista_inventarioLibreria[j]['_id']
                    
                }

                cont ++;
            }
        }
    }


    return inventario_libreria
};


window.addEventListener('load', mostrar_inventario);