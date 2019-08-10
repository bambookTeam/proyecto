const btnRegistrar = document.querySelector('#btnNuevaLibreria');
let tipoUser=sessionStorage.getItem('tipoUsuario');

let hidenombre = () =>{
    if(tipoUser==0){
        btnRegistrar.style.display="block";
    }else{
        if (tipoUser==2) {
            btnRegistrar.style.display="none";
        } else {
           
        }

        
        
    }
}



window.addEventListener('load',hidenombre);