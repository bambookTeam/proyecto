const  btn_RegistarLibro=document.querySelector('#btnNuevoLibro');
let tipoUser=sessionStorage.getItem('tipoUsuario');

let hidenombre = () =>{
    if(tipoUser==0){
        btn_RegistarLibro.style.display="block";
    }else{
        btn_RegistarLibro.style.display="none";
    }
}

window.addEventListener('load',hidenombre);