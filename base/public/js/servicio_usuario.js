'use strict';

let registroEnLinea = (pnombre1, pnombre2, papellido1, papellido2, psexo, pidentificacion, pcorreo, pdireccion, pnombreUsuario) => {

    axios({

        method: 'post',
        url: 'http://localhost:4000/api/registrar_usuario',
        responseType: 'json',
        data: {
            primerNombre: pnombre1,
            segundoNombre: pnombre2,
            primerApellido: papellido1,
            segundoApellido: papellido2,
            sexo: psexo,
            identificacion: pidentificacion,
            correo: pcorreo,
            //distrito: pdistrito,
            direccion: pdireccion,
            nombreUsuario: pnombreUsuario,
            // avatar: pavatar

        }
    });

};

let iniciar_Sesion  =  (pidentificacion) => {
    let respuesta='';
    axios({
        method: 'post',
        url: 'http://localhost:4000/api/validar_credenciales',
        responseType: 'json',
        data: {
            identificacion: pidentificacion
        }
    }).then(
        function (response) {
            respuesta=response.data.success;
            console.log(response.data.success);
        } 
    )  
    return respuesta    
};

