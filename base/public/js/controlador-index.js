const input_usuario= document.querySelector('#txt-username');
const input_contrasena = document.querySelector('#txt-contrasena');
const div_rellene = document.querySelector('#rellene');

const btn_signin = document.querySelector('#btnSignIn');

let validarSignIn = (pusuario,pcontrasena)=>{
    let error = false;

    if (pusuario=='') {
        error=true;
        input_usuario.classList.add('input_error');
        

    } else {
        input_usuario.classList.remove('input_error');
        
    }

    if (pcontrasena == '') {
        error=true;
        input_contrasena.classList.add('input_error');
        
    } else {
        input_contrasena.classList.remove('input_error');
        
    }

    return error;
}

let saludar = () =>{
    let tusuario = input_usuario.value;
    let tcontrasena=input_contrasena.value;
    let error = validarSignIn(tusuario,tcontrasena);
    let errorCredenciales = iniciar_Sesion(tusuario);

    if (error == false && errorCredenciales==false) {
        console.log(errorCredenciales);
        
    } else {
        console.log('no existe pa');
        div_rellene.style.display="block";
        
    }
    
}

btn_signin.addEventListener('click',saludar);
