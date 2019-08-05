'use strict';

const boton_crear = document.querySelector('#btn_crear_contrasenna');
const input_pin = document.querySelector('#txt_pin')
const input_contrasenna =  document.querySelector('#txt_contrasenna');
const input_verificacion =  document.querySelector('#txt_verificacion');



let validar = (ppin,pcontrasenna,pverificacion)=> {

    let error = false;

    

    if(ppin ==''){

        error = true;
        input_pin.classList.add('input_error');

    }else {

        input_pin.classList.remove('input_error');


    }

    if(pcontrasenna ==''){

        error = true;
        input_contrasenna.classList.add('input_error');

    }else {

        input_contrasenna.classList.remove('input_error');


    }

    if(pverificacion ==''){

        error = true;
        input_verificacion.classList.add('input_error');

    }else {

        input_verificacion.classList.remove('input_error');


    }

    if ( pcontrasenna == pverificacion){
        
        input_contrasenna.classList.remove('input_error');
        input_verificacion.classList.remove('input_error');


    }else {

        error = true;

        input_contrasenna.classList.add('input_error');
        input_verificacion.classList.add('input_error');


    }

    return error;


};

let guardar = () => {

    let pin = input_pin.value;
    let contrasena = input_contrasenna.value;
    let verificacion = input_verificacion.value;

    let error = validar(pin,contrasena,verificacion);
    let errorPin = validarPin (pin, contrasena);
     console.log(errorPin);


    if (error == true){

        // falta agregar el div rellene a html y css
        div_rellene.style.display="block";
        Swal.fire({ //formato json
            title: 'Por favor revise los campos en rojo',
            type: 'warning'
        })        

    }else {

        if( errorPin == false) {

            
        location.replace('inicioCliente.html');
             
        Swal.fire({ //formato json
            title: 'La creacion de contraseña fue exitosa',
            type: 'success'
           
        })
            
        } else {

            //div_rellene.style.display="block";
           Swal.fire({ //formato json
            title: 'El pin esta incorrecto',
            type: 'warning'
           })
        }
    }

}

boton_crear.addEventListener('click', guardar);