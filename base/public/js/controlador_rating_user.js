'use strict';

let rating1=document.querySelector('#rating-1');
let rating2=document.querySelector('#rating-2');
let rating3=document.querySelector('#rating-3');
let rating4=document.querySelector('#rating-4');
let rating5=document.querySelector('#rating-5');
let valueRating=1;

let ratear1estrella = () =>{

    rating2.setAttribute('src',"https://img.icons8.com/wired/28/000000/book.png");
    rating3.setAttribute('src',"https://img.icons8.com/wired/28/000000/book.png");
    rating4.setAttribute('src',"https://img.icons8.com/wired/28/000000/book.png");
    rating5.setAttribute('src',"https://img.icons8.com/wired/28/000000/book.png");
}

let ratear2estrellas = () =>{

    rating2.setAttribute('src',"https://img.icons8.com/dusk/28/000000/book.png");
    rating3.setAttribute('src',"https://img.icons8.com/wired/28/000000/book.png");
    rating4.setAttribute('src',"https://img.icons8.com/wired/28/000000/book.png");
    rating5.setAttribute('src',"https://img.icons8.com/wired/28/000000/book.png");
    valueRating=2;
}

let ratear3estrellas = () =>{

    rating2.setAttribute('src',"https://img.icons8.com/dusk/28/000000/book.png");
    rating3.setAttribute('src',"https://img.icons8.com/dusk/28/000000/book.png");
    rating4.setAttribute('src',"https://img.icons8.com/wired/28/000000/book.png");
    rating5.setAttribute('src',"https://img.icons8.com/wired/28/000000/book.png");
    valueRating=3;
}

let ratear4estrellas = () =>{

    rating2.setAttribute('src',"https://img.icons8.com/dusk/28/000000/book.png");
    rating3.setAttribute('src',"https://img.icons8.com/dusk/28/000000/book.png");
    rating4.setAttribute('src',"https://img.icons8.com/dusk/28/000000/book.png");
    rating5.setAttribute('src',"https://img.icons8.com/wired/28/000000/book.png");
    valueRating=4;
}

let ratear5estrellas = () =>{

    rating2.setAttribute('src',"https://img.icons8.com/dusk/28/000000/book.png");
    rating3.setAttribute('src',"https://img.icons8.com/dusk/28/000000/book.png");
    rating4.setAttribute('src',"https://img.icons8.com/dusk/28/000000/book.png");
    rating5.setAttribute('src',"https://img.icons8.com/dusk/28/000000/book.png");
    valueRating=5;
}

let getRatingUsuario = async (idUser) =>{
    let listaRatings=[];
    let rating=0;
    let counter=0;

    listaRatings=await obtener_ratings();
    console.log(listaRatings);
    for (let index = 0; index < listaRatings.length; index++) {
        if (listaRatings[index].idUserRated==idUser) {
            rating=listaRatings[index].rating+rating;
            counter=counter+1;
        } 
    }

    if (counter>=2) {
        rating=rating/counter;
    } else {
        rating=undefined
    }

    return rating
}

let owo=async()=>{
    let x=await getRatingUsuario("1assaddsa1");

    console.log(x)
}

let ratear_Usuario=async()=>{
    let idRater=sessionStorage.getItem('id');
    let idRateado='1assaddsa1';
    let idIntercambio="";



    registrar_rating_usuario (idRateado,idRater,pidIntercambio,prating);
}
window.addEventListener('load',owo);
