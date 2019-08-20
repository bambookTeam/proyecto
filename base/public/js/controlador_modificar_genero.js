'use strict';

let usuario = JSON.parse(localStorage.getItem("usuario"));
let lista_genero = [];
let idGenero=localStorage.getItem('_idgenero');

let modificarGenero = async (id) => {
    var input_genero = document.getElementById('txt-genero');
    console.log(id);
    
    modifgenero(id, input_genero)

}

document.getElementById("modificar").addEventListener("click", function () {
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




let modifgenero = async(id) => {
   
}

document.getElementById("modificar").addEventListener("click", function () {
    modificarLibro(idGenero);
});

let llenarFormulario = async () => {

    lista_genero=await listarGenero();


    for (let index = 0; index < lista_genero.length; index++) {
        if (idGenero==lista_genero[index]._id) {
    document.getElementById('txt-genero').value = lista_genero[index].genero;

        }
        
    }
    limpiar();
};


let limpiar = () => {
    localStorage.removeItem("usuario");
}

llenarFormulario();
