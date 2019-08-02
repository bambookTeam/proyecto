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

let saludar =  async () =>{
    let tusuario = input_usuario.value;
    let tcontrasena=input_contrasena.value;
    let error =  validarSignIn(tusuario,tcontrasena);
    let errorCredenciales = await iniciar_Sesion(tusuario,tcontrasena);
    console.log(errorCredenciales);
    
    if (error==true) {
        div_rellene.style.display="block";
        Swal.fire({ //formato json
            title: 'Por favor revise los campos en rojo',
            type: 'warning'
           
        })
    } else {
        
       if (errorCredenciales==true) {
        
        Swal.fire({ //formato json
            title: 'El inicio de sesión fue exitoso',
            type: 'success'
           
        })

        location.replace('inicioCliente.html');
       
       } else {
        

        div_rellene.style.display="block";
        Swal.fire({ //formato json
            title: 'Los credenciales estan incorrectos',
            type: 'warning'
           
        })
        
       }
    }
    
}

btn_signin.addEventListener('click',saludar);
