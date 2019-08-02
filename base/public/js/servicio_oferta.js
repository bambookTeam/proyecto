'use strict';

let registrarOferta = (pimagen) => {
    axios({
        method: 'post',
        url: 'http://localhost:4000/api/registrar_oferta',
        responseType: 'json',
        data: {
            imagen:pimagen
        }
    });
};
