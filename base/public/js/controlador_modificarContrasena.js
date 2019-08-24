'use strict'

const boton_modificar = document.querySelector('#btn_modificar_contrasenna');
const input_contrasenna = document.querySelector('#txt_contrasenna')
const input_contrasennaNueva =  document.querySelector('#txt_contrasenna_nueva');
const input_verificacion =  document.querySelector('#txt_verificacion');


let validar = (pcontrasenna,pcontrasennaNueva,pverificacion)=> {

    let error = false;

    

    if(pcontrasenna ==''){

        error = true;
        input_contrasenna.classList.add('input_error');

    }else {

        input_contrasenna.classList.remove('input_error');


    }

    if(pcontrasennaNueva ==''){

        error = true;
        input_contrasennaNueva.classList.add('input_error');

    }else {

        input_contrasennaNueva.classList.remove('input_error');


    }

    if(pverificacion ==''){

        error = true;
        input_verificacion.classList.add('input_error');

    }else {

        input_verificacion.classList.remove('input_error');


    }

    if ( pcontrasennaNueva == pverificacion){
        
        input_contrasennaNueva.classList.remove('input_error');
        input_verificacion.classList.remove('input_error');


    }else {

        error = true;

        input_contrasennaNueva.classList.add('input_error');
        input_verificacion.classList.add('input_error');


    }

    return error;


};



let guardar = () => {

    let contrasenna = input_contrasenna.value;
    let contrasennaNueva = input_contrasennaNueva.value;
    let verificacion = input_verificacion.value;

    let error = validar(contrasenna,contrasennaNueva,verificacion);
    let errorPin = validarPin (contrasenna, contrasennaNueva);
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

boton_modificar.addEventListener('click', guardar);