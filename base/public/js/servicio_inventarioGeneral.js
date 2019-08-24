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

let disminuirInventario =(p_id,pexistencias) => {
    
    axios({
        method: 'post',
        url: 'http://localhost:4000/api/agregar_inventario',
        responseType: 'json',
        data: {
            _id: p_id,
            cant: pexistencias 
        }

    })

};


let obtenerInventario = async () => {

    try{

        const response = await axios ({
            method: 'get',
            url: 'http://localhost:4000/api/listar_inventario',
            responseType: 'json'

        });

        return response.data.lista_inventario;
    }catch(error) {
        
        console.log(error);
    }

};



let agregarInventario =  (p_id, pcant) => {

    
    axios({
        
        method: 'post',
        url: 'http://localhost:4000/api/agregar_inventario',
        responseType: 'json',
        data: {            
            _id: p_id,
            cant: pcant
            }

    });
        

};