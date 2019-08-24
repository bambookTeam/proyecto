'use strict';

let registrarEnBitacora = (pusuario,pdescripcion,pfecha) => {
    axios({
        
        method: 'post',
        url: 'http://localhost:4000/api/registrar-bitacora',
        responseType: 'json',
        data: {
            usuarioRegistrado: pusuario,
            descripcion: pdescripcion,
            fecha: pfecha
        }       

    });
    
};

let obtener_Bitacora = async() => {
    try{
        
        const response = await axios({
            method: 'get',
            url: 'http://localhost:4000/api/listar-bitacora',
            responseType: 'json'

        });

        return response.data.lista_bitacora;

    }catch(error){
        console.log(error);
    }

};

let getBitacoraby_idUser = async()=>{
    
}