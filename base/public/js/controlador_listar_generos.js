'use strict'

const tbody = document.querySelector('#tbl_generos tbody');
let listar_generos = [];
let txt_filtro = document.querySelector('#txt_filtro');

let mostrarlista = async () => {

    console.log(listar_generos);
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
            localStorage.setItem("idGenero", listar_generos[index]._id);
            window.location.href = 'modificar_genero.html'
        })


        // let celda_estado = fila.insertCell();


    //     let enlace_habilitado = document.createElement('a');
    //     if (listar_generos[index]["estado"] == "Habilitado") {
    //         enlace_habilitado.innerText = "Habilitado";
    //     } else {
    //         enlace_habilitado.innerText = "Deshabilitado";
    //     }
    //     enlace_habilitado.href = 'listar_genero.html';
    //     enlace_habilitado.addEventListener('click', function () {
    //         if (listar_generos[index]["estado"] == "Habilitado") {
    //             habilitar(listar_generos[index]['idGenero'], "Desabilitado");
    //         } else {
    //             habilitar(listar_generos[index]['idGenero'], "Habilitado");
    //         }

    //         mostrarlista();
    //     });
    //     celda_estado.appendChild(enlace_habilitado);


    };




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