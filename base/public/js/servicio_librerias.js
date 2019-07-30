'use strict';

let registrarLibreria = (pnombre_comercial, pnombre_fantasia, pdireccion) => {
    axios({
        method: 'post',
        url: 'http://localhost:4000/api/registrar-libreria',
        responseType: 'json',
        data: {
            nombre_comercial: pnombre_comercial,
            nombre_fantasia: pnombre_fantasia,
            direccion: pdireccion
        }
    });
};

let registrarAdminLibreria = (pidentificacion, pprimer_nombre, psegundo_nombre, pprimer_apellido, psegundo_apellido, psexo, pcorreo, pdireccion, pnombreUsuario) => {
    axios({
        method: 'post',
        url: 'http://localhost:4000/api/registrar_usuario',
        responseType: 'json',
        data: {

            identificacion: pidentificacion,
            primerNombre: pprimer_nombre,
            segundoNombre: psegundo_nombre,
            primerApellido: pprimer_apellido,
            segundoApellido: psegundo_apellido,
            sexo: psexo,
            correo: pcorreo,

            direccion: pdireccion,
            nombreUsuario: pnombreUsuario
        }
    });
};

let obtenerLibrerias = async() => {
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
