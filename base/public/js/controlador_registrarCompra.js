'use strict'

const boton_registrarCompra = document.querySelector('#btn-registrarCompra');
const input_cantidad = document.querySelector('#txt-existencias');
const select_tarjeta = document.querySelector('#txt_tarjeta');
const select_sucursal = document.querySelector('#txt_sucursales');


let validar = (pcantidad, ptarjeta, psucursal) => {

    let error = false; 

    if(pcantidad == ''){
        
        error = true; 
        input_cantidad.classList.add('input_error');

    }else {

        input_cantidad.classList.remove('input_error');

        if( pcantidad < 1) {

            error = true; 
            input_cantidad.classList.add('input_error');

        }else {

            input_cantidad.classList.remove('input_error');

        }

    }

    if( ptarjeta == ''){

        error = true; 
        select_tarjeta.classList.add('input_error');

    }else {

        select_tarjeta.classList.remove('input_error');

    }

    if( psucursal == ''){

        error = true; 
        select_sucursal.classList.add('input_error');

    }else {

        select_sucursal.classList.remove('input_error');

    }

    return error;
}; 


let guardarCompra =  async() => {

    let cantidad = parseInt(input_cantidad.value);
    let tarjeta = select_tarjeta.value;
    let sucursal = select_sucursal.value;


    let error = validar (cantidad, tarjeta, sucursal);


    let idSucursal = await obtenerIdSucursalNombre(sucursal);

    let idTarjeta = await obtenerIdTarjeta(tarjeta);
    


    let carrito = JSON.parse(localStorage.getItem("carrito"));
    

    

    if( error == false ){

        
    registrarCompra(sessionStorage.getItem("id"), carrito.isbn, idSucursal, idTarjeta, carrito.titulo, cantidad, parseInt(carrito.precio));

    disminuirInventarioSucursal(idSucursal, carrito.isbn, cantidad );

    eliminarCarrito(carrito._id);

  



        Swal.fire({
            title: 'Se ha concluido la compra efectivamente',
            type: 'success',
            text: ''
        })

       
    }else {

        
        Swal.fire({
            title: 'No se ha podido registrado la compra',
            type: 'warning',
            text: ''
        })

    }


};

boton_registrarCompra.addEventListener('click', guardarCompra );