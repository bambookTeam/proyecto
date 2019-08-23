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
        enlace_habilitado.innerText = 'Habilitar';
        enlace_habilitado.href = 'listar_genero.html';
        enlace_habilitado.addEventListener('click', function() {
            habilitar(listar_generos[index]['_id']);
            mostrarlista();
        });


        let enlace_deshabilitado = document.createElement('a');
        enlace_deshabilitado.innerText = 'Deshabilitar';
        enlace_deshabilitado.href = 'listar_genero.html';;
        enlace_deshabilitado.addEventListener('click', function() {
            deshabilitar(listar_generos[index]['_id']);
            mostrarlista();
        });

        if (listar_generos[index]['estado'] == 'Habilitado') {
            celda_estado.appendChild(enlace_deshabilitado);
        } else {

            celda_estado.appendChild(enlace_habilitado);
            fila.classList.add('deshabilitado');
        }

    let estilos_eliminar = document.createElement('img');
    estilos_eliminar.setAttribute('src', './imgs/delete-icon.png')

    let celda_eliminar = fila.insertCell();
        let eliminar = document.createElement('button');
        eliminar.type = 'button';

    eliminar.addEventListener('click', function () {
        Swal.fire({
            title: 'Está seguro que desea eliminar el género?',
            text: "Ésta acción no se puede revertir",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sí, estoy seguro'
        }).then((result) => {
            if (result.value) {
                eliminarGenero(listar_generos[index]['_id']);

                Swal.fire(
                    'Género eliminado!',
                    'listo'
                ).then((result) => {
                    if (result.value) {
                        window.location.href = 'listar_genero.html';
                    }
                });
            }
        })
        localStorage.setItem("eliminar", JSON.stringify(listar_generos[index]));

    })

    celda_eliminar.appendChild(eliminar);
    eliminar.appendChild(estilos_eliminar);


}

}

let filtrarlista = async () => {

    let filtro = txt_filtro.value.toLowerCase();
    tbody.innerHTML = '';


    for (let index = 0; index < listar_generos.length; index++) {
        if (listar_generos[index]['genero'].toLowerCase().includes(filtro)) {
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
        });


        let celda_estado = fila.insertCell();
        let enlace_habilitado = document.createElement('a');
        enlace_habilitado.innerText = 'Habilitar';
        enlace_habilitado.href = 'listar_genero.html';
        enlace_habilitado.addEventListener('click', function() {
            habilitar(listar_generos[index]['_id']);
            mostrarlista();
        });


        let enlace_deshabilitado = document.createElement('a');
        enlace_deshabilitado.innerText = 'Deshabilitar';
        enlace_deshabilitado.href = 'listar_genero.html';;
        enlace_deshabilitado.addEventListener('click', function() {
            deshabilitar(listar_generos[index]['_id']);
            mostrarlista();
        });

        if (listar_generos[index]['estado'] == 'Habilitado') {
            celda_estado.appendChild(enlace_deshabilitado);
        } else {

            celda_estado.appendChild(enlace_habilitado);
            fila.classList.add('deshabilitado');
        }

    let estilos_eliminar = document.createElement('img');
    estilos_eliminar.setAttribute('src', './imgs/delete-icon.png')

    let celda_eliminar = fila.insertCell();
        let eliminar = document.createElement('button');
        eliminar.type = 'button';

    eliminar.addEventListener('click', function () {
        Swal.fire({
            title: 'Está seguro que desea eliminar el género?',
            text: "Ésta acción no se puede revertir",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sí, estoy seguro'
        }).then((result) => {
            if (result.value) {
                eliminar(listar_generos[index]['_id']);

                Swal.fire(
                    'Género eliminado!',
                    'success'
                ).then((result) => {
                    if (result.value) {
                        window.location.href = 'listar_genero.html';
                    }
                });
            }
        })
        localStorage.setItem("eliminar", JSON.stringify(listar_generos[index]));

    })

    celda_eliminar.appendChild(eliminar);
    eliminar.appendChild(estilos_eliminar);


}
}

}

mostrarlista();
txt_filtro.addEventListener('keyup', filtrarlista);