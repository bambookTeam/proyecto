'use strict';


let obtenerListaUsuarios = async () => {

    usuarios = await obtenerUsuarios();
};

var usuarios = [];
usuarios = obtenerListaUsuarios();

var _id; 


const input_correo = document.querySelector('#txt_correo');
const boton_recuperar = document.querySelector('#btn_recuperar');


let validarCorreo = (pcorreo) => {

    let error = false;

    for (let i = 0; i < usuarios.length; i++) {

        if (usuarios[i]['correo'] == pcorreo) {

            input_correo.classList.remove('input_error');
            _id = usuarios[i]['_id']; 

            error = false;

            i = usuarios.length;

        } else {

            error = true;
            input_correo.classList.add('input_error');
        }

    }

    return error;

};


let validar = (pcorreo) => {

    let error = false;

    if (pcorreo == '') {

        error = true;
        input_correo.classList.add('input_error');

    }else {

        input_correo.classList.remove('input_error');

        error = validarCorreo(pcorreo);

        if ( error == true){

            input_correo.classList.add('input_error');

        }else {

            input_correo.classList.remove('input_error');
        }

    }

    return error;


};


let restablecer = () => {

    let correo = input_correo.value;
    let error = validar(correo); 

    if( error == true){
        
       // div_rellene.style.display="block";
        Swal.fire({ //formato json
            title: 'Por favor revise los campos en rojo',
            type: 'warning'
        })    
        
        
    }else {

        recuperarContrasena(_id, correo);
        Swal.fire({ //formato json
            title: 'se ha restablecido la contraseña',
            type: 'success'
           })
        


    }

};

boton_recuperar.addEventListener('click', restablecer);