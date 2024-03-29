'use strict';

let registrarAutor = (pnombre, pnombre_artistico, pfecha_nacimiento, pfecha_muerte, pnacionalidad, pbiografia, ppremios, pfoto) => {
    let pestado = 1;
    axios({
        method: 'post',
        url: 'http://localhost:4000/api/registrar-autor',
        responseType: 'json',
        data: {
        nombre_autor: pnombre,
        nombre_artistico_autor: pnombre_artistico,
        fecha_nacimiento: pfecha_nacimiento,
        fecha_muerte: pfecha_muerte,
        nacionalidad_autor: pnacionalidad,
        biografia_autor: pbiografia,
        premios_autor: ppremios,
        foto_autor: pfoto,
        estado: pestado

        }
    });
};

let obtenerAutores = async() => {
    try {
        // fetch data from an url endpoint
        const response = await axios({
            method: 'get',
            url: 'http://localhost:4000/api/listar-autores',
            responseType: 'json'
        });

        return response.data.lista_autores;
    } catch (error) {
        //console.log(error);
    }
};

let obtenerAutorId = async(_id) => {
    try {
        // fetch data from an url endpoint
        const response = await axios({
            method: 'get',
            url: `http://localhost:4000/api/buscar-autor-id/${_id}`,
            responseType: 'json'
        });

        return response.data.autor;
    } catch (error) {
        // console.log(error);
    }
};

let modificar_autor = (pid, pnombre, pnombre_artistico, pfecha_nacimiento, pfecha_muerte, pnacionalidad, pbiografia, ppremios, pfoto) => {
    let pestado = 1;
    axios({
        method: 'post',
        url: 'http://localhost:4000/api/modificar_autor',
        responseType: 'json',
        
        data: {
        _id: pid,
        nombre_autor: pnombre,
        nombre_artistico_autor: pnombre_artistico,
        fecha_nacimiento: pfecha_nacimiento,
        fecha_muerte: pfecha_muerte,
        nacionalidad_autor: pnacionalidad,
        biografia_autor: pbiografia,
        premios_autor: ppremios,
        foto_autor: pfoto,
        estado: pestado
        }
    });
};

let habilitar_autor = (pid) => {
    axios({
        method: 'post',
        url: 'http://localhost:4000/api/habilitar_autor',
        responseType: 'json',
        data: {
            _id: pid,
            
        }
    });
};
let deshabilitar_autor = (pid) => {
    axios({
        method: 'post',
        url: 'http://localhost:4000/api/deshabilitar_autor',
        responseType: 'json',
        data: {
            _id: pid

        }
    });
};

let eliminarAutor= (pid) => {
    axios({
        method: 'post',
        url: 'http://localhost:4000/api/eliminar_autor',
        responseType: 'json',
        data: {
            _id: pid

        }
    });
};