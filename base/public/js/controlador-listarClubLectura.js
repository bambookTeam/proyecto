
let listarClubes = async()=>{
    let listaClubes=[];
    listaClubes=await obtenerClubes();
    let parentClubes=document.getElementById('clubes');
    parentClubes.innerHTML="";
    listaClubes=listaClubes.reverse();
    for(let i=0;i<listaClubes.length;i++){
        
        let div= document.createElement('div');
        div.classList.add('club');

    let clubInfoDiv = document.createElement('div');
    clubInfoDiv.classList.add('club-info');

    parentClubes.appendChild(div);

    let img = document.createElement('img');
    img.setAttribute('src','https://res.cloudinary.com/dc8k6i5xm/image/upload/v1563223101/pandauser_sw7weq.png');

    div.appendChild(img);
    div.appendChild(clubInfoDiv);
    

    let h1 = document.createElement('h1');
    h1.innerHTML=listaClubes[i].nombre_Club;
    let modalidadLinea =document.createElement('p');
    modalidadLinea.innerHTML=listaClubes[i].modalidad;
    let fechaLinea = document.createElement('p');
    fechaLinea.innerHTML='Inicio: '+listaClubes[i].fechaInicio.substring(0,10) + '- Fin: '+listaClubes[i].fechaFin.substring(0,10);
    let horaLinea = document.createElement('p');
    if(listaClubes[i].modalidad=="Virtual"){
        horaLinea.innerHTML="00:00";
    }else{
        horaLinea.innerHTML=listaClubes[i].hora+ "-" + listaClubes[i].frecuencia;
    }
    let temaGenerolinea = document.createElement('p');
    temaGenerolinea.innerHTML=listaClubes[i].tema + ' - ' + listaClubes[i].genero;
    
    let btnUnirseClub = document.createElement('button');
    btnUnirseClub.innerText="Unirse";
    btnUnirseClub.setAttribute('class','unirse_Club');
    btnUnirseClub.dataset._id=listaClubes[i]._id;

    let btnCrearEvento = document.createElement('button');
    btnCrearEvento.innerText="Agregar Evento";
    btnCrearEvento.setAttribute('class','crear_Evento');
    btnCrearEvento.dataset._id=listaClubes[i]._id;

    clubInfoDiv.appendChild(h1);
    clubInfoDiv.appendChild(modalidadLinea);
    clubInfoDiv.appendChild(fechaLinea);
    clubInfoDiv.appendChild(horaLinea);
    clubInfoDiv.appendChild(temaGenerolinea);
    div.appendChild(btnUnirseClub);
    div.appendChild(btnCrearEvento);

    btnCrearEvento.addEventListener('click',function(){
        window.location.href=`registrar-evento.html?_id=${this.dataset._id}`
    });


    }

}

window.addEventListener('load',listarClubes);


