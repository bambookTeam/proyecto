'use strict';

let registrarContacto = (pnombre, pcorreo,pcontraseña,pavatar) => {
    axios({
        method: 'post',
        url: 'http://localhost:4000/api/registrar-contacto',
        responseType: 'json',
        data: {
            nombre: pnombre,
            correo: pcorreo,
            contraseña:pcontraseña,
            avatar: imagenUrl

            
        }
    });
};

let obtenerContactos = async() => {
    try {
        // fetch data from an url endpoint
        const response = await axios({
            method: 'get',
            url: 'http://localhost:4000/api/listar-contactos',
            responseType: 'json'
        });

        return response.data.lista_contactos;
    } catch (error) {
        console.log(error);
    }
};

let obtenerContactoId = async(_id) => {
    try {
        // fetch data from an url endpoint
        const response = await axios({
            method: 'get',
            url: `http://localhost:4000/api/buscar-contacto-id/${_id}`,
            responseType: 'json'
        });

        return response.data.contacto;
    } catch (error) {
        console.log(error);
    }
};