'use strict';

let registrarOferta = () => {
    let idUsuarioActivo = localStorage.getItem("idLibreria");
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


let obtenerOfertas = async (pid) => {
    try {
        // fetch data from an url endpoint
       
        const response = await axios({
            method: 'post',
            url: 'http://localhost:4000/api/listar_ofertas',
            responseType: 'json',
            data: {
                id: pid
            }
        });

        return response.data.listar_ofertas;
    } catch (error) {
        console.log(error);
    }
};
