
const name= document.querySelector('#nombrePerfil');

let getName = () =>{
    let nombre=sessionStorage.getItem('nombreUsuario');
    nombre=nombre.charAt(0).toUpperCase()+nombre.slice(1);
    name.innerHTML=nombre;
}

const optionGenero=document.querySelector('#optionNavGenero');
const optionUsuarios=document.querySelector('#optionNavUsuarios');
const optionCategorias=document.querySelector('#optionNavCategoria');
const optionIntercambios=document.querySelector('#optionIntercambio');
const optionAutores=document.querySelector('#optionNavAutores');

let hideOptions = () =>{
    let tipoUsuarioConectado=sessionStorage.getItem('tipoUsuario');
    

    if(tipoUsuarioConectado==0){
        optionGenero.style.display="inline";
        optionUsuarios.style.display="inline";
        optionCategorias.style.display="inline";
        optionAutores.style.display="inline";
    }else{
        if (tipoUsuarioConectado==1) {
            
        } else {
            
        }
    }

    
}

window.addEventListener('load',getName);
window.addEventListener('load',hideOptions);