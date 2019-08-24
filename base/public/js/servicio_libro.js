'use strict'

// import { type } from "os";

let registrarLibro = (ptitulo, pedicion, peditorial, pautor, panno, pidioma, pisbn, pportada, pcontraportada, pgenero, ptipo, pcantidad, pprecio) => {
    let pestado=1;
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
            cantidad: pcantidad,
            precio: pprecio,
            portada: pportada,
            contraportada: pcontraportada,
            estado:pestado
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

        return response.data.lista_libros;
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

        return response.data.librosBD
    } catch (error) {
        // console.log(error);
    }
}

let modificar_libro = (pid, ptitulo, pedicion, peditorial, pautor, panno, pidioma, pisbn, pportada, pcontraportada,  pgenero, ptipo, pcantidad, pprecio) => {
    let pestado=1;
    axios({
        method: 'post',
        url: 'http://localhost:4000/api/modificar_libro',
        responseType: 'json',
        

        data: {
            _id: pid,
            titulo: ptitulo,
            edicion: pedicion,
            editorial: peditorial,
            autor: pautor, 
            anno: panno,
            idioma: pidioma,
            isbn: pisbn,
            genero: pgenero,
            tipo: ptipo,
            cantidad: pcantidad,
            precio: pprecio,
            portada: pportada,
            contraportada: pcontraportada,
            estado: pestado
        }
    });
};

let habilitar_Libro = (pid) => {
    console.log(pid)
    axios({
        method: 'post',
        url: 'http://localhost:4000/api/habilitar_libro',
        responseType: 'json',
        data: {
            _id: pid
        }
    });
};
let deshabilitar_Libro= (pid) => {
    console.log(pid)
    axios({
        method: 'post',
        url: 'http://localhost:4000/api/deshabilitar_libro',
        responseType: 'json',
        data: {
            _id: pid
        }
    });
};


let eliminarLibro = (pid) => {
    axios({
        method: 'post',
        url: 'http://localhost:4000/api/eliminar_libro',
        responseType: 'json',
        data: {
            _id: pid

        }
    });
};
