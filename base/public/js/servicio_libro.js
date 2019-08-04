'use strict'

// import { type } from "os";

let registrarLibro = (ptitulo, pedicion, peditorial, pautor, panno, pidioma, pisbn, pimagen, pgenero, ptipo, pcantiddad, pprecio) => {
    axios({
        method: 'post',
        url: 'http://localhost:4000/api/registrar_libro',
        responseType: 'json',


        data: {
            titulo: ptitulo,
            edicion: pedicion,
            editorial: peditorial,
            autor: pautor,
            anno: panno,
            idioma: pidioma,
            isbn: pisbn,
            genero: pgenero,
            tipo: ptipo,
            cantidad: pcantiddad,
            precio: pprecio,
            imagen: pimagen
        }


    });

};

let listar_Libros = async () => {
    try {
        //fetch data from a url endpoint
        const response = axios({
            method: 'get',
            url: 'http://localhost:4000/api/listar_libros',
            responseType: 'json'
        });
        const result = await response;
        return result.data.lista_libros;
    } catch (error) {
        //console.log(error);
    }
}

//funcion para ver el perfil del libro
let obtener_libroID = async () => {
    try {
        //fetch data from a url endpoint
        const response = await axios({
            method: 'get',
            url: `http://localhost:4000/api/listar_libro_id/${_id}`,
            responseType: 'json'
        });
        
        return response.data.librosBD;
    } catch (error) {
        console.log(error);
    }
}