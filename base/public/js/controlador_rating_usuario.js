'use strict';

let getRatingUsuario = async (idUser) =>{
    let listaRatings=[];
    let rating=0;
    let counter=0;

    listaRatings=await obtener_ratings();

    for (let index = 0; index < listaRatings.length; index++) {
        if (listaRatings[index].idUserRated==idUser) {
            rating=listaRatings[index].rating+rating;
            counter=counter+1;
        } 
    }

    if (counter>=2) {
        
    } else {
        rating=undefined
    }

    return rating/counter
}

let owo=async()=>{
    let x=await getRatingUsuario("1assaddsa1");

    console.log(x)
}
window.addEventListener('load',owo);
