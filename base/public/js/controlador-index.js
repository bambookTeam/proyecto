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

        // CREAR CONTRASE;A
        /*
        if( JSON.parse(sessionStorage.getItem('usuario')).contador == 1){

        let tipoUsuario=sessionStorage.getItem('tipoUsuario');
        console.log(tipoUsuario)
        if (tipoUsuario=='2')//cliente
             {
            location.replace('inicioCliente.html');
        } else {
            location.replace('%20clubesLectura.html')
        }
        // CREAR CONTRASE;A
          if( JSON.parse(sessionStorage.getItem('usuario')).contador == 1){

            location.replace('crear_contrasenna')
        // CREAR CONTRASE;A 
          if( sessionStorage.getItem('contador') == '0'){
              
            location.replace('crear_contrasenna.html')

           } else {

            location.replace('inicioCliente.html');
           }

        */
        let tipoUsuario=sessionStorage.getItem('tipoUsuario');
        console.log(tipoUsuario)
        if (tipoUsuario=='2')//cliente
             {
            location.replace('inicioCliente.html');
        } else {
            location.replace('%20clubesLectura.html')
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

btn_signin.addEventListener('click',inicioSesion);
