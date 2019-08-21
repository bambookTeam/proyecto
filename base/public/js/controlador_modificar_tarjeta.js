'use strict';

let usuario = JSON.parse(localStorage.getItem("usuario"));
let listar_tarjetas = [];


let modificarTarjeta = async (id) => {
    const  input_numerotarjeta = document.getElementById('txt-numerotarjeta').value;
   const input_fechavencimiento = document.getElementById('txt-fechadevencimiento').value;
    const input_codigocvv = document.getElementById('txt-codigocvv').value;
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

'use strict';


const boton_agregar = document.getElementById('btn-agregar');
const input_numerotarjeta = document.getElementById('txt-numerotarjeta');
const input_fechavencimiento = document.getElementById('txt-fechadevencimiento');
const input_codigocvv = document.getElementById('txt-codigocvv');

const urlParams = new URLSearchParams(window.location.search);
let _id = urlParams.get('_id');

let cargar_formulario = async() => {

    let tarjeta = await obtenerTarjetaId(_id);
    if (tarjeta) {
        input_numerotarjeta.value = contacto['numerotarjeta'];
        input_codigocvv.value = tarjeta['codigocvv'];
        let fecha_original = new Date(tarjeta['fechavencimiento']);

        let mes = fecha_original.getUTCMonth() + 1;
        if (mes < 10) {
            mes = '0' + mes;
        }

        let dia = fecha_original.getDate();
        if (dia < 10) {
            dia = '0' + dia;
        }


        input_fechavencimiento.value = fecha_original.getFullYear() + '-' + mes + '-' + dia;
    }
};
let editar = () => {

    modificar(_id, input_numerotarjeta.value, input_codigocvv.value, input_fechavencimiento.value,);
};


cargar_formulario();
boton_agregar.addEventListener('click', editar);