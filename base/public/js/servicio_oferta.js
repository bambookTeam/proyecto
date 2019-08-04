'use strict';

let registrarOferta = () => {
    let idUsuarioActivo = sessionStorage.getItem("id");
    axios({
        method: 'post',
        url: 'http://localhost:4000/api/registrar_oferta',
        responseType: 'json',
        data: {
            id: idUsuarioActivo,
            imagen:imagenUrl
            
        }
    });
};
