'use strict';

let registroEnLinea = (pnombre1, pnombre2, papellido1, papellido2, psexo, pidentificacion, pcorreo, pdireccion, pnombreUsuario) => {

    axios({

        method: 'post',
        url: 'http://localhost:4000/api/registrar_cliente',
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

