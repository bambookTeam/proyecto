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

let obtenerSolicitudes = async () => {
    try {
        // fetch data from an url endpoint
        const response = await axios({
            method: 'get',
            url: 'http://localhost:4000/api/listar_solicitudes_intercambios',
            responseType: 'json',
        });

        return response.data.lista_solicitudes;
    } catch (error) {
        console.log(error);
    }
};

let cambiarEstado = (pId, estado) => {
    axios({
        method: 'post',
        url: 'http://localhost:4000/api/cambiarEstado',
        responseType: 'json',
        data: {
            _id: pId,
            estado: estado
        }
    });
};