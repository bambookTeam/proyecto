'use strict'

var inventarioLibreria = [];

let registrarInventarioLibreria = (psibn, pIdAdminLibreria, pcant) => {

    axios({
        method: 'post',
        url: 'http://localhost:4000/api/registrar_inventarioLibreria',
        responseType: 'json',
        data: {

            isbn: psibn,
            idAdminLibreria: pIdAdminLibreria,
            cant: pcant
        }
    });


};

let agregarInventarioLibreria = (p_id, pcant) => {
    
    axios({
        method: 'post',
        url: 'http://localhost:4000/api/agregar-inventarioLibreria',
        responseType: 'json',
        data: {
            _id: p_id,
            cant: pcant

        }


    });

};

let inventario = async () => {

    //Devuelve el inventario del admin de libreria que hizo sesion

    let lista_inventario = [];
    let inventarios = await obtenerInventarioLibreria();
    let cont = 0;

    for ( let i = 0; i < inventarios.length; i++){

        if( inventarios[i]['idAdminLibreria'] == sessionStorage.getItem('identificacion')){

            lista_inventario[cont] = inventarios[i]; 

            cont ++;
        }


    }

    return lista_inventario;
};

let obtenerInventarioLibreria = async() => {

    try{

        const response = await axios ({

            method: 'get',
            url: 'http://localhost:4000/api/listar_inventarioLibreria',
            responseType: 'json'
        });

        return response.data.lista_inventario; 
    }catch(error) {

        console.log(error);
    }


};

let disminuirInventarioLibreria = (p_id, pexistencias) => {

    axios({
        method: 'post',
        url: 'http://localhost:4000/api/agregar-inventarioLibreria',
        responseType: 'json',
        data: {
            _id: p_id,
            cant: pexistencias
        }
    })

};

let verificarInventario = async ( pisbn, pIdAdminLibreria, pcant) => {

    //Se pdoria declarar inventarioLibreria aca y no tenerlo como una variable global
    

    inventarioLibreria = await inventario();

    if( inventarioLibreria.length == 0){
        

        registrarInventarioLibreria(pisbn, pIdAdminLibreria, pcant);


    }else {


      for( let i = 0; i < inventarioLibreria.length ; i++){

        if(inventarioLibreria[i]['isbn'] == pisbn){
            
            agregarInventarioLibreria(inventarioLibreria[i]['_id'], inventarioLibreria[i]['cant'] + pcant);

        }else {

            
            registrarInventarioLibreria(pisbn, pIdAdminLibreria, pcant);

        }

    }

}





};