const input_usuario= document.querySelector('#txt-username');
const input_contrasena = document.querySelector('#txt-contrasena');
const div_rellene = document.querySelector('#rellene');

const btn_signin = document.querySelector('#btnSignIn');

const input_usuariofooter=document.querySelector('#footerUser');
const input_contrasenafooter=document.querySelector('#footerPw');
const footer_error=document.querySelector('#input_error_footer');

const btn_signinFoot = document.querySelector('#signinfooter');

const btn_registroLibreria = document.querySelector('#btn_registroLibreria')
const btn_registroenLinea  = document.querySelector('#btn_registroenLinea')


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



let inicioSesion =  async () =>{
    let tusuario = input_usuario.value;
    let tcontrasena=input_contrasena.value;
    let error =  validarSignIn(tusuario,tcontrasena);
    let errorCredenciales = await iniciar_Sesion(tusuario,tcontrasena);
    let modalContent=document.querySelector('#signinpopup');
    console.log(errorCredenciales);

    if (error==true) {
        div_rellene.style.display="block";
        modalContent.style.height="470px";

        Swal.fire({ //formato json
            title: 'Por favor revise los campos en rojo',
            type: 'warning'

        })
    } else {

       if (errorCredenciales==true) {

    
       if(sessionStorage.getItem('contador') == '0' ){
           
        location.replace('crear_contrasenna.html')        

       }else {

        let tipoUsuario=sessionStorage.getItem('tipoUsuario');

        location.replace('inicioCliente.html');

       }
        



       } else {


        div_rellene.style.display="block";
        Swal.fire({ //formato json
            title: 'Los credenciales estan incorrectos',
            type: 'warning'

        })

       }
    }

}



let redirectRegistroLibreria = () =>{
    location.replace('registrar_libreria.html')
}

let redirectRegistroUsuario = () =>{
    location.replace('registrar_cliente.html')
}

btn_signin.addEventListener('click',inicioSesion);


