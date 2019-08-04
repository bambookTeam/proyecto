'use strict';

let registrarTarjeta = (pnumerotarjeta, pfechavencimiento, pcodigocvv) => {
    axios({
        method: 'post',
        url: 'http://localhost:4000/api/registrar_tarjeta',
        responseType: 'json',
        data: {
            numerotarjeta: pnumerotarjeta,
            fechavencimiento: pfechavencimiento,
            codigocvv: pcodigocvv
        }
    });
};



let obtenerTarjetas = async() => {
    try {
        // fetch data from an url endpoint
        const response = await axios({
            method: 'get',
            url: 'http://localhost:4000/api/listar_tarjetas',
            responseType: 'json'
        });

        return response.data.listar_tarjetas;
    } catch (error) {
        console.log(error);
    }
};
