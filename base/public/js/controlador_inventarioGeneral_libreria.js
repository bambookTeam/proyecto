'use strict'


var lista_libros = [];
var lista_inventario = [];

const tbody = document.querySelector('#tbl_inventario tbody'); 
const cerrarpopup = document.querySelector('#cerrar');



let mostrar_inventario = async () => {

       

    let inventario_general = await crearInventario();
    
    inventario_general = inventario_general.reverse();
    
    for( let i = 0; i< inventario_general.length; i++){
        let fila = tbody.insertRow();


        fila.insertCell().innerHTML = inventario_general[i]['isbn'];
        fila.insertCell().innerHTML = inventario_general[i]['titulo'];
        fila.insertCell().innerHTML = inventario_general[i]['autor'];
        fila.insertCell().innerHTML = inventario_general[i]['precio'];
        fila.insertCell().innerHTML = inventario_general[i]['cant'];

        let celda_agregar = fila.insertCell();
        let boton_agregar = document.createElement('button');
            


        boton_agregar.type = 'button';
        boton_agregar.innerText = 'Agregar a inventario';
        
        celda_agregar.appendChild(boton_agregar);

        boton_agregar.addEventListener('click', function(){
        
            localStorage.setItem("inventario", JSON.stringify(inventario_general[i]));

                    
            
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


    // Este codigo puede generar problemas si se elimina una fila del inventario, por la variable cont. 
    let inventario_general = [];

    lista_inventario = await obtenerInventario();
    lista_libros = await obtenerLibros();

    
  
    
    let cont = 0;

    for( let i = 0; i < lista_libros.length; i++){

        for ( let j = 0; j< lista_inventario.length; j++){

            if(lista_libros[i]['isbn'] == lista_inventario[j]['isbn'] && lista_inventario[j]['cant'] > 0){

                inventario_general[cont] = {
                    "isbn" : lista_libros[i]['isbn'],
                    "titulo": lista_libros[i]['titulo'],
                    "autor": lista_libros[i]['autor'],
                    "precio": lista_libros[i]['precio'],
                    "cant": lista_inventario[j]['cant'],
                    "_id": lista_inventario[j]['_id']
                    
                }

                cont ++;
                
            }

        }
    

    }
    
    //Tener cuidado con el contador a la hora de crear el inventario 

    // Analizar donde debe de limpiarse el localStorage

    localStorage.clear();

    return inventario_general;


};

window.addEventListener('load', mostrar_inventario);


