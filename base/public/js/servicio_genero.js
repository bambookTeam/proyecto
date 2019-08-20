'use strict'

let agregarGenero = (pgenero) => {
    axios({
        method: 'post',
        url: 'http://localhost:4000/api/registrar_genero',
        responseType: 'json',
        data: {
            genero:pgenero
        }
    });
};

let obtener_generoId = async (_id) => {
    try {
        //fetch data from a url endpoint
        const response = await axios({
            method: 'get',
            url: `http://localhost:4000/api/listar-generos_id/${_id}`,
            responseType: 'json'
        });
        
        return response.data.generosBD
    } catch (error) {
        // console.log(error);
    }
}
//let modificarGeneroServicio = (idContacto, pgenero) => {
  //  axios({
    //    method: 'post',
      //  url: 'http://localhost:4000/api/modificar_genero',
        //responseType: 'json',
        //data: {
          //  _id: idContacto,
            //genero: pgenero
       
     //   }
   // });
//};

let listarGeneros = async() =>{
    try {
        const response=await axios({
            method: 'get',
            url:'http://localhost:4000/api/listar-generos',
            responseType: 'json'
            
        });

        return response.data.listar_generos;
    } catch (error) {
        console.log(error);
    }
};

let modificarGenero = (pid,pgenero) => {
    axios({
        method: 'post',
        url: 'http://localhost:4000/api/modificar_genero',
        responseType: 'json',


        data: {
            _id:pid,
           genero:pgenero
        }
    });
};

let habilitar = (pid, pestado) => {
    axios({
        method: 'post',
        url: 'http://localhost:4000/api/habilitar_genero',
        responseType: 'json',
        data: {
            _id: pid,
            estado: pestado
        }
    });
};
let deshabilitar = (pid) => {
    axios({
        method: 'post',
        url: 'http://localhost:4000/api/deshabilitar_genero',
        responseType: 'json',
        data: {
            _id: pid

        }
    });
};

let eliminar = (pid) => {
    axios({
        method: 'post',
        url: 'http://localhost:4000/api/eliminar_genero',
        responseType: 'json',
        data: {
            _id: pid

        }
    });
};
