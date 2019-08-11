'use strict';

let registrarEvento = (pnombre_Evento,pidClub,pLibro) => {
    axios({
        method: 'post',
        url: 'http://localhost:4000/api/registrar-evento',
        responseType: 'json',
        data: {
            nombre_Evento: pnombre_Evento,
            idClub: pidClub,
            libro: pLibro
        }
    });
};

let obtenerEventos = async() =>{
    try {
        // fetch data from an url endpoint
        const response = await axios({
            method: 'get',
            url: 'http://localhost:4000/api/listar-eventos',
            responseType: 'json'
        });

        return response.data.lista_eventos;
    } catch (error) {
        console.log(error);
    }
};