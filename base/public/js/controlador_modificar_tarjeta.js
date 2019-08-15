'use strict';

let modificarTarjeta = (id) => {
    console.log(id);
    let numerotarjeta = document.getElementById('txt-numerotarjeta').value;
    let fechavencimiento = document.getElementById('txt-fechadevencimiento').value;
    let codigocvv = document.getElementById('txt-codigocvv').value;
    modificarTarjetaServicio(id, numerotarjeta, fechavencimiento, codigocvv);

    
}
document.getElementById("modificar").addEventListener("click", function () {
    modificarTarjeta(usuario._id);
});

let llenarFormulario = () => {

    document.getElementById('txt-numerotarjeta').value = tarjeta.numerotarjeta;
    // document.querySelector('').value = new Date(usuario.fecha);
    document.getElementById('txt-fechadevencimiento').value = tarjeta.fechavencimiento;
    document.getElementById('txt-codigocvv').value = tarjeta.codigocvv;
    limpiar();
};


let limpiar = () => {
    localStorage.removeItem("usuario");
}

llenarFormulario();