'use strict';

let registrarMiembro_Club = (pidClub,pidMiembro) => {
    axios({
        method: 'post',
        url: 'http://localhost:4000/api/unirse-Club',
        responseType: 'json',
        data: {
            idClub: pidClub,
            idUsuario: pidMiembro
        }
    });
};

 let obtenerListaMiembros = async() =>{
    try {
        // fetch data from an url endpoint
        const response = await axios({
            method: 'get',
            url: 'http://localhost:4000/api/listar-miembros',
            responseType: 'json'
        });

        return response.data.lista_miembros;
    } catch (error) {
        console.log(error);
    }
};
