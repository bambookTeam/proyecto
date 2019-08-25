'use strict';

let registrarSucursal = (pnombre, ptelefono, pcorreo, pdireccion) => {
    let idUsuarioActivo = localStorage.getItem("idLibreria");

    console.log(idUsuarioActivo,pnombre,ptelefono,pcorreo,pdireccion);
    axios({
        method: 'post',
        url: 'http://localhost:4000/api/registrar-sucursal',
        responseType: 'json',
        data: {
            idLibreria: idUsuarioActivo,
            nombre: pnombre,
            telefono: ptelefono,
            correo: pcorreo,
            direccion: pdireccion,
            estado:1
        }
    });
};

let obtenerSucursales = async () => {
    try {
        // fetch data from a url endpoint
        let idUsuarioActivo = sessionStorage.getItem("id");
        const response = await axios({
            method: 'get',
            url: 'http://localhost:4000/api/listar-sucursales',
            responseType: 'json',
            data: {
                id: idUsuarioActivo
            }
        });

        return response.data.lista_sucursales;
    } catch (error) {
        console.log(error);
    }
};

// Tratar de no llamar el metodo obtenerIdLiberia desde aca, hacerlo desde un controlador 
let obtenerSucursalesLibreria = async () => {

    let sucursales = [];
    let sucursalesLibreria = [];

    let idLibreria = await obtenerIdLibreria(sessionStorage.getItem('identificacion'));

    let cont = 0;

    sucursales = await obtenerSucursales();

    for (let i = 0; i < sucursales.length; i++) {

        if (sucursales[i]['idLibreria'] == idLibreria) {

            sucursalesLibreria[cont] = sucursales[i];

            cont++;

        }


    }

    return sucursalesLibreria;


};

let obtenerSucursalId = async (_id) => {
    try {
        // fetch data from an url endpoint
        const response = await axios({
            method: 'get',
            url: `http://localhost:4000/api/buscar-sucursal-id/${_id}`,
            responseType: 'json'
        });

        return response.data.sucursal;
    } catch (error) {
        console.log(error);
    }
};

let modificar_sucursal = (pid, pnombre, ptelefono, pcorreo, pdireccion) => {
    axios({
        method: 'post',
        url: 'http://localhost:4000/api/modificar-sucursal',
        responseType: 'json',
        data: {
            _id: pid,
            nombre: pnombre,
            telefono: ptelefono,
            correo: pcorreo,
            direccion: pdireccion
        }
    });
};

let habilitar_sucursal = (pid) => {
    axios({
        method: 'post',
        url: 'http://localhost:4000/api/habilitar-sucursal',
        responseType: 'json',
        data: {
            _id: pid
        }
    });
};

let deshabilitar_sucursal = (pid) => {
    axios({
        method: 'post',
        url: 'http://localhost:4000/api/deshabilitar-sucursal',
        responseType: 'json',
        data: {
            _id: pid
        }
    });
};

let eliminar = (pid) => {
    axios({
        method: 'post',
        url: 'http://localhost:4000/api/eliminar_sucursal',
        responseType: 'json',
        data: {
            _id: pid

        }
    });
};