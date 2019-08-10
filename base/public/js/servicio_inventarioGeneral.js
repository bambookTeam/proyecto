'use strict'

let registrarInventario = (pisbn ) => {

    axios({
        method: 'post',
        url: 'http://localhost:4000/api/registrar_inventario',
        responseType: 'json',
        data: {
            isbn: pisbn,
            cant: 0
        }


    });


};




let agregarInventario = ( pcant) => {

    

};