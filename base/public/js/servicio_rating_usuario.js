'use strict'

let registrar_rating_usuario = (pidUserRated,pidRater,pidIntercambio,prating) => {
    axios({
        method: 'post',
        url: 'http://localhost:4000/api/registrar_rating',
        responseType: 'json',
        data: {
            idUserRated:pidUserRated,
            idRater:pidRater,
            idIntercambio:pidIntercambio,
            rating:prating
        }
    });
};

 let obtener_ratings = async() =>{
    try {
        // fetch data from an url endpoint
        const response = await axios({
            method: 'get',
            url: 'http://localhost:4000/api/listar_ratings',
            responseType: 'json'
        });

        return response.data.lista_rating;
    } catch (error) {
        console.log(error);
    }
};
