'use strict';

let registroEnLinea = (pnombre1, pnombre2, papellido1, papellido2, psexo, pidentificacion, pcorreo, pdireccion, pnombreUsuario, pcontrasena) => {

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
            contrasena: pcontrasena,
            // avatar: pavatar

        }
    });

};

let iniciar_Sesion = async (pidentificacion, pcontrasena) => {
    let respuesta = await axios({
        method: 'post',
        url: 'http://localhost:4000/api/validar_credenciales',
        responseType: 'json',
        data: {
            identificacion: pidentificacion,
            contrasena: pcontrasena
        }
    }).then(
        function (response) {

            if (response.data.success == true) {
                if (response.contrasena == pcontrasena) {
                    sessionStorage.setItem('conectado', response.data.success);
                    sessionStorage.setItem('usuario', response.data.usuario._id);
                    sessionStorage.setItem('tipoUsuario',response.data.usuario.tipo);
                } else {

                }
            } else {

            }

            return (response);
        }
    )
    return respuesta.data.success;




};
let obtenerUsuarios = async () => {
    try {
        // fetch data from an url endpoint
        const response = await axios({
            method: 'get',
            url: 'http://localhost:4000/api/listar-usuarios',
            responseType: 'json'
        });

        return response.data.lista_usuarios;
    } catch (error) {
        console.log(error);
    }
};

let obtenerUsuarioId = async (_id) => {
    try {
        // fetch data from an url endpoint
        const response = await axios({
            method: 'get',
            url: `http://localhost:4000/api/buscar-usuario-id/${_id}`,
            responseType: 'json'
        });

        return response.data.usuario;
    } catch (error) {
        console.log(error);
    }
};
