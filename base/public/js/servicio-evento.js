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