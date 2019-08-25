'use strict' 

const tbody = document.querySelector('#tbl_carrito tbody');
const cerrarpopup = document.querySelector('#cerrar');

let carrito = [];
let txt_filtro = document.querySelector('#txt_filtro');


let mostrar_carrito = async () => {

    carrito = await listarCarrito(sessionStorage.getItem('id'));

    carrito = carrito.reverse();
    tbody.innerHTML = '';

for ( let i = 0; i<carrito.length; i++) {

    let fila = tbody.insertRow();
    fila.insertCell().innerHTML = carrito[i]['isbn'];
    fila.insertCell().innerHTML = carrito[i]['titulo'];
    fila.insertCell().innerHTML = carrito[i]['precio'];
    fila.insertCell();


    let celda_comprar = fila.insertCell();
    let boton_comprar = document.createElement('button');

    boton_comprar.type = 'button';
    boton_comprar.innerText = 'Comprar';
    boton_comprar.setAttribute('id', 'btn-comprar')

    celda_comprar.appendChild(boton_comprar);

    boton_comprar.addEventListener('click', function(){

        overlay.classList.add('active');
        popup.classList.add('active');
     
        localStorage.setItem("carrito", JSON.stringify(carrito[i]));
        
        showSelects(carrito[i]['idLibreria'], carrito[i]['isbn']);

                
    });

    cerrarpopup.addEventListener('click', function () {
        overlay.classList.remove('active');
        popup.classList.add('remove');
    
    });


}

};


window.addEventListener('load', mostrar_carrito);
