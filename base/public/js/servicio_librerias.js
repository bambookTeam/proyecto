'use strict';

let registrarLibreria = (pnombre_comercial, identificacionUsuarioLibreria, pnombre_fantasia, pdireccion) => {
    axios({
        method: 'post',
        url: 'http://localhost:4000/api/registrar-libreria',
        responseType: 'json',
        data: {
            id: identificacionUsuarioLibreria,
            nombre_comercial: pnombre_comercial,
            nombre_fantasia: pnombre_fantasia,
            direccion: pdireccion,
            ubicacion: "{" + "lat:" + marker.position.lat() + "," + "lng:" + marker.position.lng() + "}"
        }
    });
};

let obtenerLibrerias = async () => {
    try {
        // fetch data from a url endpoint
        const response = await axios({
            method: 'get',
            url: 'http://localhost:4000/api/listar-librerias',
            responseType: 'json'
        });

        return response.data.lista_librerias;
    } catch (error) {
        console.log(error);
    }
};

let obtenerLibreriaId = async (_id) => {
    try {
        // fetch data from an url endpoint
        const response = await axios({
            method: 'get',
            url: `http://localhost:4000/api/buscar-libreria-id/${_id}`,
            responseType: 'json'
        });

        return response.data.libreria;
    } catch (error) {
        console.log(error);
    }
};

let eliminarLibreria = (pid) => {
    axios({
        method: 'post',
        url: 'http://localhost:4000/api/eliminar_libreria',
        responseType: 'json',
        data: {
            _id: pid

        }
    });
};

let modificar_libreria = (pid, input_nombre_comercial, input_nombre_fantasia, input_direccion) => {
    axios({
        method: 'post',
        url: 'http://localhost:4000/api/modificar-libreria',
        responseType: 'json',
        data: {
            _id: pid,
            nombre_comercial: input_nombre_comercial,
            nombre_fantasia: input_nombre_fantasia,
            direccion: input_direccion
        }
    });
};

let obtenerIdLibreria = async (identificacionAdmin) => {

    let librerias = await obtenerLibrerias();

    let idLibreria;

    for (let i = 0; i < librerias.length; i++) {

        if (identificacionAdmin == librerias[i]['id']) {


            idLibreria = librerias[i]['_id'];
        }
    }

    return idLibreria;

};
let modificar_libreria = (pid, input_nombre_comercial, input_nombre_fantasia, input_direccion) => {
    axios({
        method: 'post',
        url: 'http://localhost:4000/api/modificar-libreria',
        responseType: 'json',
        data: {
            _id: pid,
            nombre_comercial: input_nombre_comercial,
            nombre_fantasia: input_nombre_fantasia,
            direccion: input_direccion
        }
    });
};
