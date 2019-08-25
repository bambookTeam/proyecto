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