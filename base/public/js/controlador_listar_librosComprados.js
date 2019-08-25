'use strict'

const tbody = document.querySelector('#tbl_librosComprados tbody');

let txt_filtro = document.querySelector('#txt_filtro');


let mostrar_librosComprados = async () => {

    let librosComprados = await listarLibrosCliente(sessionStorage.getItem('id'));

    for( let i = 0; i < librosComprados.length; i++){

        let fila = tbody.insertRow();
        fila.insertCell().innerHTML = librosComprados[i]['titulo'];
        fila.insertCell().innerHTML = librosComprados[i]['precio'];
        fila.insertCell().innerHTML = librosComprados[i]['cant']
    }


}; 



let filtrar_tabla = async () => {

    let filtro = txt_filtro.value.toLowerCase();
    tbody.innerHTML = '';


        for (let i = 0; i < librosComprados.length; i++) {
            if (librosComprados[i]['titulo'].toLowerCase().includes(filtro)) {
                let fila = tbody.insertRow();
            
                
                fila.insertCell().innerHTML = librosComprados[i]['titulo'];
                fila.insertCell().innerHTML = librosComprados[i]['precio'];
                fila.insertCell().innerHTML = librosComprados[i]['cant']
              
            

            }

        }
               

    

};

window.addEventListener('load', mostrar_librosComprados);