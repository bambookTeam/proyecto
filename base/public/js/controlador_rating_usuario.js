'use strict';

let getRatingUsuario = async (idUser) =>{
    let listaRatings=[];
    let rating=0;
    let counter=0;

    listaRatings=await obtener_ratings();

    for (let index = 0; index < listaRatings.length; index++) {
        if (idUserRated) {
            rating=idUserRated+rating;
            counter=counter+1;
        } 
    }

    if (counter>=2) {
        
    } else {
        rating=undefined
    }

    return rating
}

let owo=async()=>{
    let x=await getRatingUsuario("1assaddsa1");

    console.log(x)
}
window.addEventListener('load',owo);
