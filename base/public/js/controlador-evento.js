
var modal = document.getElementById("registrar_Evento_screen");

let btn = document.getElementById("btnRegistrarEvento");
let btnRegistro_evento = document.getElementById("btnCrearEvento");
let btnCancelar_registro_evento = document.getElementById("btnCancelEvento")

let nombreEvento_input = document.querySelector('#txt-evento');
let id=1;

let span = document.getElementsByClassName("close")[0];

let showLibrosEvento = () =>{
    const parentLibro=document.querySelector('#lista_libros_evento');
    let arrayLibros_Eventos=["Cocori","Unica Mirando al Mar","1984"];
    let i=0;

    let selectLibro=document.createElement('select');
    selectLibro.setAttribute('id','libro_evento');
    parentLibro.appendChild(selectLibro);



    for(i=0;i<arrayLibros_Eventos.length;i++){
        let optionLibro = document.createElement('option');
        optionLibro.setAttribute('value',arrayLibros_Eventos[i]);

        optionLibro.innerHTML = arrayLibros_Eventos[i];
        optionLibro.style.width = "300px"
        selectLibro.appendChild(optionLibro);
    }
}

let crearEvento = () =>{

}

btn.onclick = function () {
    modal.style.display = "block";
}


btnCancelar_registro_evento.onclick = function () {
    modal.style.display = "none";

}

span.onclick = function () {
    modal.style.display = "none";
 
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
        
    }
}

window.addEventListener('load',showLibrosEvento);