'use strict';

let usuario = JSON.parse(localStorage.getItem("usuario"));
let listar_generos = [];

let genero;

let llamarModicarGenero = async (id) => {
    let response = await modificarGenero(genero._id, document.getElementById("txt-genero").value);
    console.log(response);
    if(response) {
      window.location.href = 'listar_genero.html'
    }

}



let llenarFormulario = async () => {
    genero = JSON.parse(localStorage.getItem('generoModificar'));

    console.log(genero);

    document.getElementById('txt-genero').value = genero.genero;

    limpiar();
};

document.getElementById("btn-agregar").addEventListener("click", llamarModicarGenero);


let limpiar = () => {
    localStorage.removeItem("_idGenero");
}

llenarFormulario();

//         input_numerotarjeta.value = contacto['numerotarjeta'];
//         input_codigocvv.value = tarjeta['codigocvv'];
//         let fecha_original = new Date(tarjeta['fechavencimiento']);

//         let mes = fecha_original.getUTCMonth() + 1;
//         if (mes < 10) {
//             mes = '0' + mes;
//         }

//         let dia = fecha_original.getDate();
//         if (dia < 10) {
//             dia = '0' + dia;
//         }


//         input_fechavencimiento.value = fecha_original.getFullYear() + '-' + mes + '-' + dia;
//     }
// };
