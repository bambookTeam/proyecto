'use strict';

let registrar_categoria = (pnombre) => {
    axios({
        method: 'post',
        url: 'http://localhost:4000/api/registrar_categoria',
        responseType: 'json',
        data: {
            nombre: pnombre
        }       

    });
    
};

let obtenerCategorias = async() => {
    try{
        
        const response = await axios({
            method: 'get',
            url: 'http://localhost:4000/api/listar_categorias',
            responseType: 'json'

        });

        return response.data.lista_categorias;

    }catch(error){
        console.log(error);
    }

};

/*
let obtenerCategoriaId = async(_id) => {
    try {

        const response = await axios ({
            method: 'get',
            url: `http://localhost:4000/api/buscar_categoria_id/${_id}`,
            responseType: 'json'

        });

        return response.data.contacto;
    }catch(error){

        console.log(error);
    }

}; 

*/

