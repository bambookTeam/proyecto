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


let modificar_tarjeta = (pid, pnumerotarjeta, pfechavencimiento, pcodigocvv) => {
    axios({
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
};

let habilitar = (pid) => {
    axios({
        method: 'post',
        url: 'http://localhost:4000/api/habilitar_tarjeta',
        responseType: 'json',
        data: {
            _id: pid,
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


        }
    });
};

let eliminar = (pid) => {
    axios({
        method: 'post',
        url: 'http://localhost:4000/api/eliminar_tarjeta',
        responseType: 'json',
        data: {
            _id: pid

        }
    });
};