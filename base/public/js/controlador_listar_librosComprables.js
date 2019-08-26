'use strict'

var lista_inventario = [];
var lista_libros = [];

const  urlParams = new URLSearchParams(window.location.search);
const tbody = document.querySelector('#tbl_libros tbody');

let txt_filtro = document.querySelector('#txt_filtro');

let idLibreria = urlParams.get('_id');


let mostrar_tabla = async () => {

    let lista_librosComprables = await crearTablaLibros();
    tbody.innerHTML = '';

   
    for (let i = 0; i < lista_librosComprables.length; i++) {
        let fila = tbody.insertRow();
        fila.insertCell().innerHTML = lista_librosComprables[i]['titulo'];
        fila.insertCell().innerHTML = lista_librosComprables[i]['autor'];
        fila.insertCell().innerHTML = lista_librosComprables[i]['edicion'];
        fila.insertCell().innerHTML = lista_librosComprables[i]['genero'];
        fila.insertCell().innerHTML = lista_librosComprables[i]['isbn'];
        fila.insertCell().innerHTML = lista_librosComprables[i]['precio'];
        




        

        //Cambiar a incono de carrito
       
       /* let estilos_btn_carrito = document.createElement('img');
        estilos_btn_carrito.setAttribute('src', './imgs/perfil-libro-icon.png');

        */

        let celda_btn_carrito = fila.insertCell();
        let btn_carrito = document.createElement('button');
        btn_carrito.type = 'button';

        btn_carrito.innerText = 'Agregar a carrito';

        btn_carrito.dataset._id = lista_libros[i]['_id'];

        celda_btn_carrito.appendChild(btn_carrito);
       // btn_carrito.appendChild(estilos_btn_carrito);

        btn_carrito.addEventListener('click', function () {
         
            
            registrarCarrito(sessionStorage.getItem('id'), lista_librosComprables[i]['isbn'], lista_librosComprables[i]['titulo'], lista_librosComprables[i]['precio'], idLibreria);

            
          Swal.fire({ //formato json
            title: 'El libro se ha agregado al carrito',
            type: 'success',
            text: ''
        })    
        
    

        });





    }
};


let filtrar_tabla = async () => {

    let filtro = txt_filtro.value.toLowerCase();
    tbody.innerHTML = '';


        for (let i = 0; i < lista_libros.length; i++) {
            if (lista_libros[i]['titulo'].toLowerCase().includes(filtro)) {
                let fila = tbody.insertRow();
            
                
                ///
                fila.insertCell().innerHTML = lista_librosComprables[i]['titulo'];
                fila.insertCell().innerHTML = lista_librosComprables[i]['autor'];
                fila.insertCell().innerHTML = lista_librosComprables[i]['edicion'];
                fila.insertCell().innerHTML = lista_librosComprables[i]['genero'];
                fila.insertCell().innerHTML = lista_librosComprables[i]['isbn'];
                fila.insertCell().innerHTML = lista_librosComprables[i]['precio'];

                /*
                let estilos_btn_carrito = document.createElement('img');
                estilos_btn_carrito.setAttribute('src', './imgs/perfil-libro-icon.png');

                */

                let celda_btn_carrito = fila.insertCell();
                let btn_carrito = document.createElement('button');
                btn_carrito.type = 'button';

                btn_carrito.innerText = 'Agregar a carrito';

                btn_carrito.dataset._id = lista_librosComprables[i]['_id'];

                celda_btn_carrito.appendChild(btn_carrito);
                btn_carrito.appendChild(estilos_btn_carrito);

                btn_carrito.addEventListener('click', function () {
                  
                    //Agregar a carrito

                    
            
            registrarCarrito(sessionStorage.getItem('id'), lista_librosComprables[i]['isbn'], lista_librosComprables[i]['titulo'], lista_librosComprables[i]['precio'], idLibreria);


          Swal.fire({ //formato json
                title: 'El libro se ha agregado al carrito',
                type: 'success',
                text: ''
            })    
            
        

                });


            }

        }
               

    

};


let crearTablaLibros = async() => {

    let librosComprables = [];

    lista_inventario = await obtenerLibrosComprables (idLibreria);
    lista_libros = await obtenerLibros(); 

    let cont = 0; 

    for( let i = 0; i < lista_libros.length; i++){

        for ( let j = 0; j< lista_inventario.length; j++){

        
            
            if(lista_libros[i]['isbn'] == lista_inventario[j]['isbn']){

                librosComprables[cont] = {
                    "isbn" : lista_libros[i]['isbn'],
                    "titulo": lista_libros[i]['titulo'],
                    "autor": lista_libros[i]['autor'],
                    "genero": lista_libros[i]['genero'],
                    "precio": lista_libros[i]['precio'], 
                    //"precio": lista_inventario[i]['precio'], 
                   // "edicion": lista_inventario[i]['edicion']
                    
                    
                }

                cont ++;
                
            }

            

        }
    

    }


    

    return librosComprables;

};


    


window.addEventListener('load', mostrar_tabla);
txt_filtro.addEventListener('keyup', filtrar_tabla);
