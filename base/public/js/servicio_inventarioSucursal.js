'use strict'

let listaInventarioSucursal = []; 
// se declara aca para poder verificar la existencia o no de un libro en una sucursal, se usa en el metodo verificarLibro, se inicializa
// al ingresar al metodo verificarInventarioSucursal

let registrarInventarioSucursal = (pisbn, pidLibreria, pidSucursal, pcant) => {

    axios({
        method: 'post',
        url: 'http://localhost:4000/api/regsitrar_inventarioSucursal',
        responseType: 'json',
        data: {

            isbn: pisbn,
            idLibreria: pidLibreria,
            idSucursal: pidSucursal,
            cant: pcant
        }
    });

};

let agregarInventarioSucursal = (p_id, pcant) => {


    axios({
        method: 'post',
        url: 'http://localhost:4000/api/agregar-inventarioSucursal',
        responseType: 'json',
        data: {
            _id: p_id,
            cant: pcant
        }

    });
};

let obtenerInventarioSucursal = async () => {

    
    try{

        const response = await axios ({

            method: 'get',
            url: 'http://localhost:4000/api/listar_inventarioSucursal',
            responseType: 'json'
        });

        return response.data.lista_inventario; 
    }catch(error) {

        console.log(error);
    }

};

let obtenerIdInventario = async ( pidSucursal, pisbn) => {

    let inventarioSucursal =  await obtenerInventarioSucursal();

    let _idInventarioSucursal ;

    for ( let i = 0; i < inventarioSucursal.length; i++){

        if( pidSucursal == inventarioSucursal[i]['idSucursal'] && pisbn == inventarioSucursal[i]['isbn']){


            _idInventarioSucursal = `{"_idInventarioSucursal": "${inventarioSucursal[i]['_id']}","cant":"${inventarioSucursal[i]['cant']}"}`;
        }
    }

    return _idInventarioSucursal;
};


let disminuirInventarioSucursal = async (pidSucursal, pisbn, pcantidad) => {

    let infoSucursal = await obtenerIdInventario(pidSucursal, pisbn);

    infoSucursal = JSON.parse(infoSucursal);

    axios({
        method: 'post',
        url: 'http://localhost:4000/api/agregar-inventarioSucursal',
        responseType: 'json',
        data: {
            _id: infoSucursal._idInventarioSucursal,
            cant: parseInt(infoSucursal.cant) - pcantidad
        }

    })
    
    
   
};


let inventarioSucursal = async (pidSucursal) => {

    // da el inventario de la Sucursal seleccionada 

    let lista_inventario = [];
    let inventarios = await obtenerInventarioSucursal();

    let cont = 0; 

    for ( let i = 0; i< inventarios.length; i++){

        if( inventarios[i]['idSucursal'] == pidSucursal){

            lista_inventario[cont] = inventarios[i];
            cont ++
        }
    }

    return lista_inventario;

};

let verificarInventarioSucursal =  async ( pisbn, pidLibreria, pidSucursal, pcant) => {
    
    //let listaInventarioSucursal = [];
     listaInventarioSucursal = await inventarioSucursal(pidSucursal);
     let existe = verificarLibro(pisbn);

     /*
    if( listaInventarioSucursal.length == 0){

        registrarInventarioSucursal(pisbn, pidLibreria, pidSucursal, pcant);


    }else {

        if( existe == 0){
            
            registrarInventarioSucursal(pisbn, pidLibreria, pidSucursal, pcant);

        }else {

            for( let i = 0; i< listaInventarioSucursal.length; i++){ 
                
                if()


            }

            agregarInventarioSucursal(listaInventarioSucursal[i]['_id'], listaInventarioSucursal[i])

        }
    }
    */

    if( existe == 0 || listaInventarioSucursal.length == 0){

        registrarInventarioSucursal(pisbn, pidLibreria, pidSucursal, pcant);
        
    }else {

        for( let i = 0; i < listaInventarioSucursal.length; i++){

        if( pisbn == listaInventarioSucursal[i]['isbn']){

            agregarInventarioSucursal(listaInventarioSucursal[i]['_id'], listaInventarioSucursal[i]['cant'] + pcant);
        }
            
        }    

    }

}; 


let obtenerLibrosComprables =  async ( pidLibreria) => {


  
    let librosComprables = [];
    let inventarios = await obtenerInventarioSucursal();

    let cont = 0;

   for ( let i = 0; i < inventarios.length; i ++){

    
      if(pidLibreria == inventarios[i]['idLibreria']){

        
        librosComprables[cont] = inventarios[i];
        cont++;

      }    


   }

   return librosComprables;
    

};



let obtenerSucursalesComprables = async (pidLibreria, pisbn) => {

    // devuelve un arreglo con los ids de las sucursales de la libreria seleccionada por el cliente que contienen el libro a comprar

    let inventarios = await obtenerInventarioSucursal();
    let sucursalesConLibro = [];

    let cont = 0;

    for( let i = 0; i < inventarios.length; i++){

        if( pidLibreria == inventarios[i]['idLibreria'] && pisbn == inventarios[i]['isbn']){

            sucursalesConLibro[cont] = inventarios[i]['idSucursal'];
            
            cont ++;
        }

    }

    return sucursalesConLibro;    

};


let verificarLibro = (pisbn) => {

    //Retorna 0 si el libro no existe en el inventario y 1 si el libro ya existe
    let existe = 0;
    
    for ( let i = 0; i < listaInventarioSucursal.length; i++){

        if(pisbn == listaInventarioSucursal[i]['isbn']){
            
            existe = 1;

        }
    }

    return existe;    

};