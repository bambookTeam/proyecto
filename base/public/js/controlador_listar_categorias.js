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

        //Botón eliminar

        let estilos_btn_eliminar = document.createElement('img');
        estilos_btn_eliminar.setAttribute('src', './imgs/delete-icon.png')

        let celda_btn_eliminar = fila.insertCell();
        let btn_eliminar = document.createElement('button', 'a');
        btn_eliminar.innerText = 'Eliminar';
        btn_eliminar.href = '#';
        btn_eliminar.type = 'button';

        btn_eliminar.addEventListener('click', function () {
            Swal.fire({
                title: '¿Está seguro que desea eliminar la categoría?',
                text: "Ésta acción no se puede revertir",
                type: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Sí, estoy seguro'
            }).then((result) => {
                if (result.value) {
                    eliminar(lista_categorias[i]._id);

                    Swal.fire(
                        'Categoría eliminada exitosamente!',
                        //'success'
                    ).then((result) => {
                        if (result.value) {
                            window.location.href = 'listar_categoría.html';
                        }
                    });
                }
            })
            localStorage.setItem("eliminarCategoría", JSON.stringify(lista_categorias[i]));
        })
        celda_btn_eliminar.appendChild(btn_eliminar);
        btn_eliminar.appendChild(estilos_btn_eliminar);


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