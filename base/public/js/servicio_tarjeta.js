'use strict';

let registrarTarjeta = (pnumerotarjeta, pfechavencimiento, pcodigocvv) => {
    let idUsuarioActivo = sessionStorage.getItem("id");
    axios({
        method: 'post',
        url: 'http://localhost:4000/api/registrar_tarjeta',
        responseType: 'json',
        data: {
            id: idUsuarioActivo,
            numerotarjeta: pnumerotarjeta,
            fechavencimiento: pfechavencimiento,
            codigocvv: pcodigocvv
        }
    });
};

let modificarTarjetaServicio = (idUsuarioActivo,pnumerotarjeta, pfechavencimiento, pcodigocvv) => {
    console.log(pfechavencimiento);
    axios({
        method: 'post',
        url: 'http://localhost:4000/api/modificar-tarjeta',
        responseType: 'json',
        data: {
            id: idUsuarioActivo,
            numerotarjeta: pnumerotarjeta,
            fechavencimiento: pfechavencimiento,
            codigocvv: pcodigocvv
        }
    });
};


let obtenerTarjetas = async () => {
    try {
        // fetch data from an url endpoint
        let idUsuarioActivo = sessionStorage.getItem("id");
        const response = await axios({
            method: 'post',
            url: 'http://localhost:4000/api/listar_tarjetas',
            responseType: 'json',
            data: {
                id: idUsuarioActivo
            }
        });

        return response.data.listar_tarjetas;
    } catch (error) {
        console.log(error);
    }
};

let habilitar = (pid, pestado) => {
    axios({
        method: 'post',
        url: 'http://localhost:4000/api/habilitar_tarjeta',
        responseType: 'json',
        data: {
            _id: pid,
            estado: pestado
        }
    });
};
let deshabilitar = (pid) => {
    axios({
        method: 'post',
        url: 'http://localhost:4000/api/deshabilitar_tarjeta',
        responseType: 'json',
        data: {
            _id: pid,
            estado: pestado


        }
    });
};
