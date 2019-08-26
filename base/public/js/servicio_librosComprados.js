'use strict'


let registrarCompra = (pidCliente, pisbn, pidSucursal, pidTarjeta, ptitulo, pcant, pprecio) => {


    axios({
        method: 'post',
        url: 'http://localhost:4000/api/registrar-compra',
        responseType: 'json',
        data: {

            idCliente: pidCliente,
            isbn: pisbn,
            idSucursal: pidSucursal,
            idTarjeta: pidTarjeta,
            titulo: ptitulo,
            cant: pcant,
            precio: pprecio
        }
    });

};


let obtenerLibrosComprados = async () => {

    try {

        const response = await axios({
            method: 'get',
            url: 'http://localhost:4000/api/listar_librosComprados',
            responseType: 'json'
        });

        return response.data.lista_librosComprados;

    } catch (error) {

        console.log(error);

    }

};

let listarLibrosCliente = async (pidCliente) => {

    let librosComprados = await obtenerLibrosComprados();

    let librosCliente = [];
    let cont = 0;

    for (let i = 0; i < librosComprados.length; i++) {

        if (librosComprados[i]['idCliente'] == pidCliente) {

            librosCliente[cont] = librosComprados[i];
            cont++;
        }

    }

    return librosCliente;
};


