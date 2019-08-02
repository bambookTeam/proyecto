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
            provincia: provincia,
            canton: canton,
            distrito: distrito,
            direccion: pdireccion,
            nombreUsuario: pnombreUsuario,
            contrasena: pcontrasenna,
            tipo: ptipo,
            contador: 0,
            avatar: imagenUrl 

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
            let r=false;
            if (response.data.success == true) {
                console.log(response);
                if (response.data.usuario.contrasena == pcontrasena) {
                    sessionStorage.setItem('conectado','true');
                    sessionStorage.setItem('id',response.data.usuario._id);
                    sessionStorage.setItem('tipoUsuario',response.data.usuario.tipo);
                    actualizar_contador( JSON.parse(sessionStorage.getItem('usuario'))._id,  JSON.parse(sessionStorage.getItem('usuario')).contador);
                } else {
                
                }
            } else {

            }

            return (r);
        }
    )
    return respuesta;

};

let actualizar_contador = (p_id, pcontador)=>{

    
    
    axios ({

        method: 'post',
        url: 'http://localhost:4000/api/actualizar-contador',
        responseType: 'json',
        data: {
            _id: p_id,
            contador: pcontador+1
        }


    });

}
let obtenerUsuarios = async() => {
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



function generarContrasenna()
{
  let caracteres = "abcdefghijkmnpqrtuvwxyzABCDEFGHIJKLMNPQRTUVWXYZ2346789";
  let contraseña = "";
  for (let i=0; i<9; i++){
   contraseña += caracteres.charAt(Math.floor(Math.random()*caracteres.length));
  }
  return contraseña;
}
