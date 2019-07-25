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


}

