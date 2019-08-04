
const name= document.querySelector('#nombrePerfil');

let getName = () =>{
    let nombre=sessionStorage.getItem('nombreUsuario');
    nombre=nombre.charAt(0).toUpperCase()+nombre.slice(1);
    name.innerHTML=nombre;
}

window.addEventListener('load',getName);