'use strict';

let usuario = JSON.parse(localStorage.getItem("usuario"));
let listar_tarjetas = [];
let idTarjeta = localStorage.getItem('_idTarjeta');

let modificarTarjeta = async (id) => {
    console.log(id);
    const  input_numerotarjeta = document.getElementById('txt-numerotarjeta'),
    input_fechavencimiento = document.getElementById('txt-fechadevencimiento'),
    input_codigocvv = document.getElementById('txt-codigocvv');
    modificar_tarjeta(id, input_numerotarjeta, input_fechavencimiento, input_codigocvv);
}
document.getElementById('btn-agregar').addEventListener("click", function () {
    modificarTarjeta(idTarjeta);

    window.location.href = 'listar_tarjetas.html'
});

let llenarFormulario = async () => {

    listar_tarjetas = await obtenerTarjetas();

    for (let index = 0; index < listar_tarjetas.length; index++) {
        if (idTarjeta == listar_tarjetas[index]._id) {
            document.getElementById('txt-numerotarjeta').value = listar_tarjetas[index].numerotarjeta;
            document.getElementById('txt-fechadevencimiento').value = listar_tarjetas[index].fechavencimiento;
            document.getElementById('txt-codigocvv').value = listar_tarjetas[index].codigocvv;
        }
    }
    limpiar();
};

let limpiar = () => {
    localStorage.removeItem("usuario");
}

llenarFormulario();
