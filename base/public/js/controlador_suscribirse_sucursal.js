'use strict';


let getClubes = async (idSucursal) => {
    let listaClubesSucursal = []
    let listaClubes = [];
    let listaSucursales = [];
    let nombreSucursal = "";

    listaSucursales = await obtenerSucursales();
    listaClubes = await obtenerClubes();

    for (let x = 0; x < listaSucursales.length; x++) {
        if (idSucursal == listaSucursales[x]._id) {
            nombreSucursal = listaSucursales[x].nombre;

        }
    }

    for (let index = 0; index < listaClubes.length; index++) {
        if (listaClubes[index].sucursal == nombreSucursal) {
            listaClubesSucursal.push(listaClubes[index]);
        }

    }


    return listaClubesSucursal
}
let getCorreo=async()=>{
    let listaUsers=[];
    let correo="";
    listaUsers=await obtenerUsuarios();

    let usuarioActivo = sessionStorage.getItem('id')
    for (let index = 0; index < listaUsers.length; index++) {
        if (usuarioActivo==listaUsers[index]._id) {
            correo=listaUsers[index].correo;
        }
        
    }

    return correo;
}


let sub_sucursal = async () => {
    let listaSucursales = [];
    listaSucursales = await obtenerSucursales();
    
    let text = "";
    let clubExist = [];
    let offerExist=[];
    let listaSent="";
    let nombre_Sucursal="";

    let idSucursal = localStorage.getItem('idSucursal');
    let idLibreria = localStorage.getItem('idLibreria');

    for (let i = 0; i < listaSucursales.length; i++) {
        if (listaSucursales[i]._id==idSucursal) {
            nombre_Sucursal=listaSucursales[i].nombre
        }         
    }

    clubExist = await getClubes(idSucursal);
    offerExist = await obtenerOfertas(idLibreria);

    let listaSourceImages=[];
    for (let i = 0; i < offerExist.length; i++) {
        listaSourceImages.push(offerExist[i].imagen)
    }
    listaSent=listaSourceImages.toString();
    console.log(clubExist)
    let pcorreo=await getCorreo();
    let listaOfertaExists="true";


    if (clubExist.length==0) {
        if (offerExist.length==0) {
            text="¡Gracias por suscribirte a la Sucursal: "+nombre_Sucursal+"! \n "
        +"Lamentablemente en este momento no hay ofertas en la librería, ni Clubes de Lectura en curso.  \n"
        +"Vas a recibir nuestras ofertas y clubes semanalmente";
        listaOfertaExists="false";
        } else {
            text="¡Gracias por suscribirte a la Sucursal: "+nombre_Sucursal+"! \n "
        +"Lamentablemente en este momento no hay Clubes de Lectura en curso.  \n"
        +"Encuentre nuestras ofertas adjuntas";
        }
    } else {
        if (offerExist.length==0) {
            listaOfertaExists="false";
            text="¡Gracias por suscribirte a la Sucursal: +"+nombre_Sucursal+"! \n "
        +"Lamentablemente en este momento no hay ofertas en la librería,encuentre a continuación la información de los clubes de Lectura: \n"
        for (let index = 0; index < clubExist.length; index++) {
            console.log('entra?')
            let nombre_Club_line = '\n Nombre: '+clubExist[index].nombre_Club+'\n';
             text=text.concat(nombre_Club_line);
             let modalidad_line='\n Modalidad: '+clubExist[index].modalidad+'\n';
             text=text.concat(modalidad_line);
             let frecuencia_line = '\n Frecuencia: '+clubExist[index].frecuencia+'\n';
             text=text.concat(frecuencia_line);
 
             let fecha_line = '\n Fecha Inicio: '+clubExist[index].fechaInicio.substr(0,10)+'\n'+'\n Fecha Fin: '+clubExist[index].fechaFin.substr(0,10)+'\n';
             text=text.concat(fecha_line);
 
             let genero_line = '\n Genero: '+clubExist[index].genero+'\n';
             text=text.concat(genero_line);
 
             let hora_line = '\n Frecuencia: '+clubExist[index].hora+'\n';
             text=text.concat(hora_line);
 
             let tema_line = '\n Frecuencia: '+clubExist[index].tema+'\n';
             text=text.concat(tema_line);
            
        }
        } else {
            text="¡Gracias por suscribirte a la Sucursal "+nombre_Sucursal+"! \n "
        +"Encuentre adjuntas las ofertas de la Librería y a continuación la información de los clubes de Lectura: \n";
        console.log(clubExist)
       for (let index = 0; index < clubExist.length; index++) {
           console.log('entra?')
           let nombre_Club_line = '\n Nombre: '+clubExist[index].nombre_Club+'\n';
            text=text.concat(nombre_Club_line);
            let modalidad_line='\n Modalidad: '+clubExist[index].modalidad+'\n';
            text=text.concat(modalidad_line);
            let frecuencia_line = '\n Frecuencia: '+clubExist[index].frecuencia+'\n';
            text=text.concat(frecuencia_line);

            let fecha_line = '\n Fecha Inicio: '+clubExist[index].fechaInicio.substr(0,10)+'\n'+'\n Fecha Fin: '+clubExist[index].fechaFin.substr(0,10)+'\n';
            text=text.concat(fecha_line);

            let genero_line = '\n Genero: '+clubExist[index].genero+'\n';
            text=text.concat(genero_line);

            let hora_line = '\n Frecuencia: '+clubExist[index].hora+'\n';
            text=text.concat(hora_line);

            let tema_line = '\n Frecuencia: '+clubExist[index].tema+'\n';
            text=text.concat(tema_line);
           
       }
       
       
       
    }

       
        
    }
    console.log(pcorreo); 
    suscribirse_a_sucursal(pcorreo, listaSent,text,listaOfertaExists);

}

