'use strict';


const boton_modificar = document.querySelector('#btn_modificar');

const txt_nombre = document.querySelector('#txt_nombre');
const txt_telefono = document.querySelector('#txt_telefono');
const txt_correo = document.querySelector('#txt_correo');
const txt_direccion = document.querySelector('#txt_direccion');

const urlParams = new URLSearchParams(window.location.search);
let _id = urlParams.get('_id');

let cargar_formulario = async () => {

    let sucursal = await obtener_sucursalId(_id);
    if (sucursal) {
        txt_nombre.value = sucursal['nombre'];
        txt_telefono.value = sucursal['telefono'];
        txt_correo.value = sucursal['correo'];
        txt_direccion.value = sucursal['direccion'];
    }

}

let editar_sucursal = () => {

    modificar_sucursal(_id, nombre, telefono, correo, direccion);
};

cargar_formulario();
boton_modificar.addEventListener('click', editar_sucursal);