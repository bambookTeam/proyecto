'use strict'
 

const tbody = document.querySelector('#tbl_categorias tbody');
let lista_categorias = [];
let txt_filtrar = document.querySelector('#txt_filtrar'); 


let mostrar_tabla = async() => {
    
    lista_categorias = await obtenerCategorias();
    tbody.innerHTML = " ";

    for(let i = 0; i < lista_categorias.length; i++){
        let fila = tbody.insertRow();
        fila.insertCell().innerHTML = lista_categorias[i]['nombre'];

    }

};


let filtrar_tabla = async() => {

    let filtro = txt_filtrar.value.toLocaleLowerCase();
    tbody.innerHTML ='';

    for( let i = 0; i < lista_categorias.length; i++)
    {

        if(lista_categorias[i]['nombre'].toLocaleLowerCase().includes(filtro) )
        {
            let fila = tbody.insertRow();
            fila.insertCell().innerHTML = lista_categorias[i]['nombre'];
        }

    }


};


mostrar_tabla();
txt_filtrar.addEventListener('keyup', filtrar_tabla);