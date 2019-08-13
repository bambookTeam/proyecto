'use strict';

let registroEnLinea = (pnombre1, pnombre2, papellido1, papellido2, psexo, pidentificacion, pcorreo, pprovincia, pcanton, pdistrito, pdireccion, pnombreUsuario, ptipo) => {

    let pcontrasenna = generarContrasenna();
    let provincia = "pprovincia";
    let canton = "pcanton";
    let distrito = "pdistrito";

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
            provincia: pprovincia,
            canton: pcanton,
            distrito: pdistrito,
            direccion: pdireccion,
            nombreUsuario: pnombreUsuario,
            contrasena: pcontrasenna,
            tipo: ptipo,
            avatar: imagenUrl,
            contador: 0

        }
    });

};

let registroAdminLibreria = (pnombre1, pnombre2, papellido1, papellido2, psexo, pidentificacion, pcorreo, pprovincia, pcanton, pdistrito, pdireccion, pnombreUsuario, ptipo) => {

    let pcontrasenna = generarContrasenna();
    let provincia = "pprovincia";
    let canton = "pcanton";
    let distrito = "pdistrito";

    axios({

        method: 'post',
        url: 'http://localhost:4000/api/registrar_admin_libreria',
        responseType: 'json',
        data: {
            primerNombre: pnombre1,
            segundoNombre: pnombre2,
            primerApellido: papellido1,
            segundoApellido: papellido2,
            sexo: psexo,
            identificacion: pidentificacion,
            correo: pcorreo,
            provincia: provincia,
            canton: canton,
            distrito: distrito,
            direccion: pdireccion,
            nombreUsuario: pnombreUsuario,
            contrasena: pcontrasenna,
            tipo: ptipo,
            contador: 0

        }
    });

};

let registroAdminGeneral = (pusuario, pcorreo, pcontrasena, ptipo,imagenUrl) => {



    axios({

        method: 'post',
        url: 'http://localhost:4000/api/registrar_',
        responseType: 'json',
        data: {
            usuario:pusuario,
            contrasena: pcontrasena,
            correo: pcorreo,
            tipo: ptipo,
            avatar: imagenUrl,
            contador: 0

        }
    });

};


let iniciar_Sesion = async (pusuario, pcontrasena) => {
    let respuesta = await axios({
        method: 'post',
        url: 'http://localhost:4000/api/validar_credenciales',
        responseType: 'json',
        data: {
            correo: pusuario,
            contrasena: pcontrasena
        }
    }).then(
        function (response) {
            sessionStorage.clear();
            let r = false;
            if (response.data.success == true) {
                console.log(response);
                if (response.data.usuario.contrasena == pcontrasena) {
                    r = true;
                    sessionStorage.setItem('conectado', 'true');
                    sessionStorage.setItem('id', response.data.usuario._id);
                    sessionStorage.setItem('tipoUsuario', response.data.usuario.tipo);
                    sessionStorage.setItem('contrasena', response.data.usuario.contrasena);
                    sessionStorage.setItem('contador', response.data.usuario.contador);
                    sessionStorage.setItem('nombreUsuario', response.data.usuario.nombreUsuario);
                    //actualizar_contador( JSON.parse(sessionStorage.getItem('usuario'))._id,  JSON.parse(sessionStorage.getItem('usuario')).data.contador);
                    actualizar_contador(sessionStorage.getItem('id'), sessionStorage.getItem('contador'));

                    //location.replace('crear_contrasenna.html');
                } else {

                }
            } else {

            }

            return (r);
        }
    )
    return respuesta;

};

/*
let validar_pin = async (ppin, pcontrasena) => {
    let respuesta = await axios({
        method: 'post',
        url: 'http://localhost:4000/api/validar_pin',
        responseType: 'json',
        data: {
            contrasena: ppin
        }
    }).then(
        function(response) {

            if(response.data.success == true){
               if(response.contrasena== ppin){

                crearContrasenna(JSON.parse(sessionStorage.getItem('usuario'))._id, pcontrasena );
                }else {

                }

            } else {


            }

            return (response);


        }


    )
    return respuesta.data.succes;
};
*/

let validarPin = (ppin, pcontrasena) => {

    let error = false;

    // if ( ppin == JSON.parse(sessionStorage.getItem('usuario')).contrasena) {

    if (ppin == sessionStorage.getItem('contrasena')) {

        // crearContrasenna( JSON.parse(sessionStorage.getItem('usuario'))._id, pcontrasena );

        crearContrasenna(sessionStorage.getItem('id'), pcontrasena);

       

    } else {

        error = true;
       
    }

    return error;
};

let crearContrasenna = async (p_id, pcontrasena) => {

    axios({
        method: 'post',
        url: 'http://localhost:4000/api/crear-contrasenna',
        responseType: 'json',
        data: {
            _id: p_id,
            contrasena: pcontrasena
        }


    });
};



let actualizar_contador = (p_id, pcontador) => {



    let nuevoContador = parseInt(pcontador) + 1;
    console.log(nuevoContador);

    axios({

        method: 'post',
        url: 'http://localhost:4000/api/actualizar-contador',
        responseType: 'json',
        data: {
            _id: p_id,
            contador: nuevoContador
        }

    });

};

let asociarTarjeta = (p_id, pnumeroTarjeta, pfechaVen, pcodigo) => {



    axios({
        method: 'post',
        url: 'http://localhost:4000/api/agregar-tarjeta',
        responseType: 'json',
        data: {
            // _id: sessionStorage.getItem('id'),
            _id: p_id,
            numerotarjeta: pnumeroTarjeta,
            fechavencimiento: pfechaVen,
            codigocvv: pcodigo
        }

    });



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

let obtenerUsuarioPerfil = async (idUsuario) => {
    try {
        // fetch data from an url endpoint
        const response = await axios({
            method: 'post',
            url: 'http://localhost:4000/api/buscar-usuario-perfil',
            responseType: 'json',
            data: {
                _id: idUsuario
            }
        });

        return response.data.usuario;
    } catch (error) {
        console.log(error);
    }
};

function generarContrasenna() {
    let caracteres = "abcdefghijkmnpqrtuvwxyzABCDEFGHIJKLMNPQRTUVWXYZ2346789";
    let contraseña = "";
    for (let i = 0; i < 9; i++) {
        contraseña += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
    }
    return contraseña;
}
