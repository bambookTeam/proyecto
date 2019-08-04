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

//funsión listar libros
let obtenerLibros = async () => {
    try {
        //fetch data from a url endpoint
        const response = await axios({
            method: 'get',
            url: 'http://localhost:4000/api/listar_libros',
            responseType: 'json'
        });
        
        return result.data.lista_libros;
    } catch (error) {
        console.log(error);
    }
}

//funsion para ver el perfil del libro
let obtener_libroId = async (_id) => {
    try {
        //fetch data from a url endpoint
        const response = await axios({
            method: 'get',
            url: `http://localhost:4000/api/listar_libro_id/${_id}`,
            responseType: 'json'
        });
        
        return response.data.libros;  //sino funciona condata.libros, procaar con data.librosBD
    } catch (error) {
        console.log(error);
    }
}