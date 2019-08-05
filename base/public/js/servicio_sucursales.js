'use strict';

let registrarSucursal = (pnombre, ptelefono, pcorreo, pdireccion) => {
    let idUsuarioActivo = localStorage.getItem("idLibreria");
    axios({
        method: 'post',
        url: 'http://localhost:4000/api/registrar-sucursal',
        responseType: 'json',
        data: {
            idLibreria: idUsuarioActivo,
            nombre: pnombre,
            telefono : ptelefono,
            correo: pcorreo,
            direccion : pdireccion
        }
    });
};

let obtenerSucursales = async() => {
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