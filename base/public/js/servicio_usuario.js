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
            contador: 0

        }
    });

};


let iniciar_Sesion = async(pidentificacion)=> {
    let respuesta = await axios({
        method:'post',
        url:'http://localhost:4000/api/validar_credenciales',
        responseType: 'json',
        data: {
            identificacion:pidentificacion
        }
    }).then(
        function(response){
            sessionStorage.setItem('conectado',response.data.success);
            sessionStorage.setItem('usuario',response.data.usuario._id);

            actualizar_contador(response.data._id, response.data.contador);

            return(response);
        }
    )
    return respuesta.data.success;

};

let actualizar_contador = (p_id, pcontador)=>{

    let nuevoContador = pcontador + 1;

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

let obtenerUsuarioId = async(_id) => {
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
