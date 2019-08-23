'use strict'


const tbody = document.querySelector('#tbl_categorias tbody');
let lista_categorias = [];
let txt_filtrar = document.querySelector('#txt_filtrar');


let mostrar_tabla = async () => {

    lista_categorias = await obtenerCategorias();
    lista_categorias = lista_categorias.reverse();
    tbody.innerHTML = " ";

    for (let i = 0; i < lista_categorias.length; i++) {
        let fila = tbody.insertRow();
        fila.insertCell().innerHTML = lista_categorias[i]['nombre'];

        /*                    MODIFICAR SUCURSAL                   */
        let estilos_modificar = document.createElement('img');
        estilos_modificar.setAttribute('src', './imgs/edit-icon.png')

        let celda_modificar = fila.insertCell();
        let modificar = document.createElement('button');
        modificar.type = 'button';

        modificar.dataset._id = lista_categorias[i]['_id'];

        celda_modificar.appendChild(modificar);
        modificar.appendChild(estilos_modificar);

        modificar.addEventListener('click', function () {
            localStorage.setItem("_idCategoria", lista_categorias[i]._id);

            //   localStorage.setItem("modificarTarjeta", JSON.stringify(listar_sucursales[index]));
            window.location.href = 'modificar_categoria.html'
        })
        /*                    MODIFICAR SUCURSAL                   */


    }

};


let filtrar_tabla = async () => {

    let filtro = txt_filtrar.value.toLocaleLowerCase();
    tbody.innerHTML = '';

    for (let i = 0; i < lista_categorias.length; i++) {

        if (lista_categorias[i]['nombre'].toLocaleLowerCase().includes(filtro)) {
            let fila = tbody.insertRow();
            fila.insertCell().innerHTML = lista_categorias[i]['nombre'];
        }

    }


};



mostrar_tabla();
txt_filtrar.addEventListener('keyup', filtrar_tabla);