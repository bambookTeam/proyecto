'use strict'

let obtenerLibrosIntercambiables = async() => {
    try {
        const response = await axios({
            method: 'get',
            url: 'http://localhost:4000/api/listar_intercambios',
            responseType: 'json'

        });

        return response.data.listar_intercambios;
    } catch (error) {
        console.log(error);
    }
};

let obtenerLibroIntercambiableId = async (_id) => {
    try {
        //fetch data from a url endpoint
        const response = await axios({
            method: 'get',
            url: `http://localhost:4000/api/buscar_librointercambiable_id/${_id}`,
            responseType: 'json'
        });

        return response.data.intercambio;
    } catch (error) {
        // console.log(error);
    }
}


let modificarIntercambio = async (pId, nombre) => {
    try {
        //fetch data from a url endpoint
        const response = await axios({
            method: 'post',
            url: 'http://localhost:4000/api/modificar-genero',
            responseType: 'json',
            data: {
                _id: pId,
                intercambio: nombre
            }
        });

        return response.data.success;
    } catch (error) {
        console.log(error);
    }



};

