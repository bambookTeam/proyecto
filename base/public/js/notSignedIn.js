

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

let hide= () =>{
    let div = document.querySelector('#nav-containers');
    let div2 = document.querySelector('#optionsNavs');
    let logoRedirect=document.querySelector('#logoRedirect');

    if(sessionStorage.length==0){
        div.style.display="none";
        div2.style.display="none";
        logoRedirect.setAttribute('href','index.html')

    }else{
        logoRedirect.setAttribute('href','inicioCliente.html')
        div.style.display="inline";
        div2.style.display="inline";
        getName();
        hideOptions();

        
    }
}

window.addEventListener('load',hide);