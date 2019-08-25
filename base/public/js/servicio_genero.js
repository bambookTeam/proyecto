'use strict'



let agregarGenero = (pgenero) => {
    axios({
        method: 'post',
        url: 'http://localhost:4000/api/registrar_genero',
        responseType: 'json',
        data: {
            genero: pgenero
        }
    });
};

let obtenerGeneros = async () => {
    try {
        const response = await axios({
            method: 'get',
            url: 'http://localhost:4000/api/listar_generos',
            responseType: 'json'

        });

        return response.data.listar_generos;
    } catch (error) {
        console.log(error);
    }
};

let obtenerGeneroId = async (_id) => {
    try {
        //fetch data from a url endpoint
        const response = await axios({
            method: 'get',
            url: `http://localhost:4000/api/buscar_genero_id/${_id}`,
            responseType: 'json'
        });

        return response.data.genero;
    } catch (error) {
        // console.log(error);
    }
}

let modificarGenero = async (pId, nombre) => {
    try {
        //fetch data from a url endpoint
        const response = await axios({
            method: 'post',
            url: 'http://localhost:4000/api/modificar-genero',
            responseType: 'json',
            data: {
                _id: pId,
                genero: nombre
            }
        });

        return response.data.success;
    } catch (error) {
        console.log(error);
    }



};

let habilitar = (pId) => {
    axios({
        method: 'post',
        url: 'http://localhost:4000/api/habilitar_genero',
        responseType: 'json',
        data: {
            _id: pId
        }
    });
};
let deshabilitar = (pId) => {
    axios({
        method: 'post',
        url: 'http://localhost:4000/api/deshabilitar_genero',
        responseType: 'json',
        data: {
            _id: pId

        }
    });
};

let eliminarGenero = (pId) => {
    //fetch data from a url endpoint
    axios({
        method: 'post',
        url: 'http://localhost:4000/api/eliminar_genero',
        responseType: 'json',
        data: {
            _id: pId

        }
    });
};
