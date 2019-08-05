let btn_registrar_evento=document.querySelector('#registrar-evento');
const nombre_evento_input = document.querySelector('#event_Name');
let showSelectEvento = async()=>{
 
    let listaLibros=[];
    listaLibros=await obtenerLibros();

    let parentTema = document.getElementById('lista_libros_evento');
    
    let selectTema = document.createElement('select');
    selectTema.setAttribute('id', 'temas_club');
    parentTema.appendChild(selectTema);

    for (let i = 0; i < listaLibros.length; i++) {
        let optionTema = document.createElement('option');
        optionTema.setAttribute('value', listaLibros[i].titulo);
        optionTema.innerHTML = listaLibros[i].titulo;
        optionTema.style.width = "300px"
        selectTema.appendChild(optionTema);
    }
}

let validarEvento = (pnombre) =>{
    let error=false;

    if (pnombre=="") {
        console.log('c mamut');
        error=true;
    } else {
        console.log('owo');
        
    }

    return error
    
}
let crearEvento = () =>{
    let nombreEvento=nombre_evento_input.value;
    let idClub=localStorage.getItem('idClub');
    let tema_input = document.querySelector("#temas_club");
    let error=validarEvento(nombreEvento);
    
    if (error==true) {
        
    } else {
        registrarEvento(nombreEvento,idClub,tema_input.value);
        
    }
    localStorage.removeItem('idClub');
    //registrarEvento(pnombre_Evento,pidClub,pLibro);
}

window.addEventListener('load',showSelectEvento);

btn_registrar_evento.addEventListener('click',crearEvento);
