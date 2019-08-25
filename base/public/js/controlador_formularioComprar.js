'use strict'



let  contruirOpciones  = (idSelect, valor) =>  {
    var x = document.getElementById(idSelect);
    var option = document.createElement("option");
    option.text = valor;
    option.value = valor;
    x.add(option);
};


let showSelects = async (pidLibreria, pisbn) => {

    let sucursales = [];
    let tarjetas = [];

    

    let idSucursales = await obtenerSucursalesComprables(pidLibreria,pisbn);

    


    tarjetas = await obtenerTarjetas();
    sucursales = await obtenerSucursalesLibro(idSucursales);


    for( let i = 0; i < tarjetas.length; i++){
        contruirOpciones('txt_tarjeta', tarjetas[i].numerotarjeta);
    }

    for ( let i = 0; i < sucursales.length; i++){
        contruirOpciones('txt_sucursales', sucursales[i]);
    }




};

const boton_comprar = document.querySelector('#btn-comprar');

boton_comprar.addEventListener('click', showSelects);
