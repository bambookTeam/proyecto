'use strict';

let registrarTarjeta = (libro, fecha, idSolicitante, sucursal) => {
    let duenno = libro.idCliente;
    let isbn = libro.isbn;
    axios({
        method: 'post',
        url: 'http://localhost:4000/api/solicitud_intercambio',
        responseType: 'json',
        data: {
            idOwner: duenno,
            idLibroSender: isbn,
            idSender: idSolicitante,
            fecha: fecha,
            sucursal: sucursal,
            estado: 0
        }
    });
};