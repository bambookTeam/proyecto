'use strict'

var usuarios = [];
var lista_sucursales = [];



const tbody = document.querySelector('#tbl_libros tbody');


function contruirOpciones(idSelect, valor) {
    var x = document.getElementById(idSelect);
    var option = document.createElement("option");
    option.text = valor;
    option.value = valor;
    x.add(option);
}

let llenarSucursales = async () => {

    lista_sucursales = await obtenerSucursales();

    for (let i = 0; i < lista_sucursales.length; i++) {
        contruirOpciones("slt-sucursal", lista_sucursales[i].nombre);
    }

}

llenarSucursales();

let mostrar_tabla = async () => {

    let librosComprados = JSON.parse(localStorage.getItem("libroIntercambio"));
    tbody.innerHTML = '';

    usuarios = await obtenerUsuarios();


    let usuario = usuarios.find(usuarios => usuarios._id === librosComprados.idCliente);

    let fila = tbody.insertRow();
    fila.insertCell().innerHTML = librosComprados.titulo;
    fila.insertCell().innerHTML = librosComprados.isbn;
    fila.insertCell().innerHTML = usuario.primerNombre + " " + usuario.primerApellido;

}


let registrarSolicitud = () => {

    let libro = JSON.parse(localStorage.getItem("libroIntercambio"));;
    let fecha = document.querySelector('#txt-fecha').value;
    let sucursal = document.querySelector('#slt-sucursal').value;

    // let  error = validar();
    let error = false;

    if (error == false) {
        Swal.fire({ //formato json
            title: 'Se ha realizado la solicitud exitosamente',
            type: 'success'
        })
        registrarTarjeta(libro, fecha, sessionStorage.getItem("id"), sucursal)
        // limpiarForm();
        // cerrar();
    } else {
        Swal.fire({ //formato json
            title: 'No se ha podido registrar su tarjeta',
            type: 'warning',
            text: 'Revise los campos resaltados e inténtelo de nuevo'
        })
    }

}
document.querySelector("#btn-agregar").addEventListener("click", registrarSolicitud);


mostrar_tabla();