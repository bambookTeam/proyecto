'use strict'

const tbody = document.querySelector('#tbl_generos tbody');
let listar_generos = [];
let txt_filtro = document.querySelector('#txt_filtro');

let redireccionar = (genero) => {
    localStorage.setItem("generoModificar", JSON.stringify(genero));
    window.location.href = 'modificar_genero.html';
}

let mostrarlista = async () => {

    listar_generos = await obtenerGeneros();
    listar_generos = listar_generos.reverse();
    tbody.innerHTML = " ";

    for (let index = 0; index < listar_generos.length; index++) {


        let fila = tbody.insertRow();
        fila.insertCell().innerHTML = listar_generos[index]['genero'];


        let estilos_modificar = document.createElement('img');
        estilos_modificar.setAttribute('src', './imgs/edit-icon.png')

        let celda_modificar = fila.insertCell();
        let modificar = document.createElement('button');
        modificar.type = 'button';

        modificar.dataset._id = listar_generos[index]['_id'];

        celda_modificar.appendChild(modificar);
        modificar.appendChild(estilos_modificar);

        modificar.addEventListener('click', function () {
            redireccionar(listar_generos[index]);
        })


        let celda_estado = fila.insertCell();


        let enlace_habilitado = document.createElement('a');
        if (listar_generos[index]["estado"] == "Habilitado") {
            enlace_habilitado.innerText = "Habilitado";
        } else {
            enlace_habilitado.innerText = "Deshabilitado";
        }
        enlace_habilitado.href = 'listar_genero.html';
        enlace_habilitado.addEventListener('click', function () {
            if (listar_generos[index]["estado"] == "Habilitado") {
                habilitar(listar_generos[index]['_id'], "Desabilitado");
            } else {
                habilitar(listar_generos[index]['_id'], "Habilitado");
            }

            mostrarlista();
        });
        celda_estado.appendChild(enlace_habilitado);


    


    let celda_eliminar = fila.insertCell();
    let enlace_eliminar = document.createElement('img');
    enlace_eliminar.setAttribute('src', './imgs/delete-icon.png')
    enlace_eliminar.href = '#';

    enlace_eliminar.addEventListener('click', function () {
        Swal.fire({
            title: '?Está seguro que desea eliminar el género?',
            text: "Ésta acción no se puede revertir",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sí, estoy seguro'
        }).then((result) => {
            if (result.value) {
                eliminar(listar_generos[i]['_id']);

                Swal.fire(
                    'Contacto eliminado!',
                    'success'
                ).then((result) => {
                    if (result.value) {
                        window.location.href = 'listar_genero.html';
                    }
                });
            }
        })

    })

    celda_eliminar.appendChild(enlace_eliminar);


}

}

let filtrarlista = async () => {

    let filtro = txt_filtro.value.toLowerCase();
    tbody.innerHTML = '';


    for (let index = 0; index < listar_generos.length; index++) {
        if (listar_generos[index]['genero'].toLowerCase().includes(filtro)) {
            let fila = tbody.insertRow();
            fila.insertCell().innerHTML = listar_generos[index]['genero'];
        }
    }
};

mostrarlista();
txt_filtro.addEventListener('keyup', filtrarlista);