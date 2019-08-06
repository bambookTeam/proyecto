'use strict';

let registrarGenero = (pgenero) => {
    axios({
        method: 'post',
        url: 'http://localhost:4000/api/registrar_genero',
        responseType: 'json',
        data: {
            genero:pgenero
        }
    });
};

let listarGenero = async() =>{
    try {
        const response=await axios({
            method: 'get',
            url:'http://localhost:4000/api/listar-generos',
            responseType: 'json'
            
        });

        return response.data.listar_generos;
    } catch (error) {
        console.log(error);
    }
}
