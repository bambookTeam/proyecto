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
let obtenerTarjetaId = async (_id) => {
    try {
        // fetch data from an url endpoint
        const response = await axios({
            method: 'get',
            url: `http://localhost:4000/api/buscar_tarjeta-id/${_id}`,
            responseType: 'json'
        });

        return response.data.tarjeta;
    } catch (error) {
        console.log(error);
    }
};


let obtenerIdTarjeta = async (pnumerotarjeta) => {

    let tarjetas = await obtenerTarjetas();

    let idTarjeta;

    for (let i = 0; i < tarjetas.length; i++) {

        if (pnumerotarjeta == tarjetas[i]['numerotarjeta']) {

            idTarjeta = tarjetas[i]['_id'];
        }
    }


    return idTarjeta;
};

/*
let modificarTarjeta = async(pid, pnumerotarjeta, pfechavencimiento, pcodigocvv) => {
    try{
        const response = await axios({
        method: 'post',
        url: 'http://localhost:4000/api/modificar_tarjeta',
        responseType: 'json',
        data: {
            _id: pid,
            numerotarjeta: pnumerotarjeta,
            fechavencimiento: pfechavencimiento,
            codigocvv: pcodigocvv
        }
    });

    return response.data.success;
    } catch (error) {
        console.log(error);
    }
};

    */


let habilitar = (pid) => {
    axios({
        method: 'post',
        url: 'http://localhost:4000/api/habilitar_tarjeta',
        responseType: 'json',
        data: {
            _id: pId,
        }
    });
};
let deshabilitar = (pId) => {
    axios({
        method: 'post',
        url: 'http://localhost:4000/api/deshabilitar_tarjeta',
        responseType: 'json',
        data: {
            _id: pId,


        }
    });
};

let eliminarTarjeta = (pId) => {
    axios({
        method: 'post',
        url: 'http://localhost:4000/api/eliminar_tarjeta',
        responseType: 'json',
        data: {
            _id: pId

        }
    });
};