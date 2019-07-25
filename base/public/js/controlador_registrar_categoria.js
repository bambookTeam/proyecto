'use strict'

const boton_registrar = document.querySelector('#btn_registrar');
const input_nombre_categoria = document.querySelector('#txt_nombre_categoria');


let validar = (pnombre_categoria) => {

    let error = false; 

    if(pnombre_categoria == '') {

        error = true;
        input_nombre_categoria.classList.add('input_error');
    } else {

        input_nombre_categoria.classList.remove('input_error');
    }

    return error;
}


let guardar = () => {

    let nombre_categoria = input_nombre_categoria.value;

    let error = validar(nombre_categoria);

    if (error ==false)
    {

        console.log(`Nombre Categoria : ${nombre_categoria}`);

        registrar_categoria(nombre_categoria);


        Swal.fire 
        (
            { //FORMATO JSON
                title: 'Se ha registrado exitosamente',
                type: 'succes',
                text: 'La categoría se ha registrado existosamente'

            }
        )     
    } else 
    {
        Swal.fire
        ( 
         {
             
             title: 'No se ha podido registrar la categoría',
             type: 'warnign',
             text: 'Revise el campo resaltado e inténtelo de nuevo'

         }

        )

    }
};


boton_registrar.addEventListener('click', guardar);