
let showSelectEvento = async()=>{
    let listaLibros=[];
    listaLibros=await obtenerLibros();
    
    for (let i = 0; i < listaLibros.length; i++) {
        console.log(listaLibros[i].titulo); 
    }
}
let crearEvento = () =>{
    
    //registrarEvento(pnombre_Evento,pidClub,pLibro);
}

window.addEventListener('load',showSelectEvento);