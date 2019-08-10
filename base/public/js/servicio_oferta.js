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


let obtenerOfertas = async () => {
    try {
        // fetch data from an url endpoint
        let idUsuarioActivo = sessionStorage.getItem("id");
        const response = await axios({
            method: 'post',
            url: 'http://localhost:4000/api/listar_ofertas',
            responseType: 'json',
            data: {
                id: idUsuarioActivo
            }
        });

        return response.data.listar_ofertas;
    } catch (error) {
        console.log(error);
    }
};
