'use strict'


let registrarCarrito = (pidCliente, pisbn, ptitulo, pprecio, pidLibreria) => {

    axios({
        method: 'post',
        url: 'http://localhost:4000/api/registrar-carrito',
        responseType: 'json',
        data: {
            idCliente: pidCliente,
            isbn: pisbn,
            titulo: ptitulo,
            precio: pprecio,
            idLibreria: pidLibreria
        }
    }); 

};

let obtenerCarritos = async () => {

    try {

        const response = await axios ({
            method: 'get',
            url: 'http://localhost:4000/api/listar-carrito',
            responseType: 'json'
        });
        return response.data.lista_carrito;

    }catch {

        console.log(error);
          
    }

};

let eliminarCarrito = (p_id)=> {


    axios({
        method: 'post',
        url:'http://localhost:4000/api/eliminar-carrito',
        responseType: 'json',
        data: {
            _id: p_id
        }
    });

    location.replace('carrito.html');

};


let listarCarrito = async (pidCliente) => {

    let carritos = await obtenerCarritos();
    let carritoUsuario = [];

    let cont = 0;

    for( let i = 0; i< carritos.length; i ++){

        if( pidCliente == carritos[i]['idCliente']) {

            carritoUsuario[cont] = carritos[i];
        }

    }

    return carritoUsuario;

};

