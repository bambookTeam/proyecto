'use strict';

let usuario = JSON.parse(localStorage.getItem("usuario"));

let lista_sucursales = [];
let idSucursal = localStorage.getItem('_idSucursal');

let modificarSucursal = async (id) => {
    console.log(id);

    const input_nombre = document.querySelector('#txt_nombre').value;
    const input_telefono = document.querySelector('#txt_telefono').value;
    const input_correo = document.querySelector('#txt_correo').value;
    const input_direccion = document.querySelector('#txt_direccion').value;

    modificar_sucursal(id, input_nombre, input_telefono, input_correo, input_direccion);
}

document.querySelector("#btn_modificar").addEventListener("click", function () {
    modificarSucursal(idSucursal);

    window.location.href = 'listar_sucursales.html'
});

let llenarFormulario = async () => {

    lista_sucursales = await obtenerSucursales();

    for (let i = 0; i < lista_sucursales.length; i++) {
        if (idSucursal == lista_sucursales[i]._id) {
            document.querySelector('#txt_nombre').value = lista_sucursales[i].nombre;
            document.querySelector('#txt_telefono').value = lista_sucursales[i].telefono;
            document.querySelector('#txt_correo').value = lista_sucursales[i].correo;
            document.querySelector('#txt_direccion').value = lista_sucursales[i].direccion;
        }
    }
    limpiar();
};

let limpiar = () => {
    localStorage.removeItem("usuario");
}

llenarFormulario();