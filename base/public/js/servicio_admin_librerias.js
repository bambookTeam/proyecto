'use strict';

let registrarAdminLibreria = (pidentificacion, pprimer_nombre, psegundo_nombre, pprimer_apellido, psegundo_apellido, psexo, pcorreo) => {
    axios({
        method: 'post',
        url: 'http://localhost:4000/api/registrar_cliente',
        responseType: 'json',
        data: {

            identificacion: pidentificacion,
            primer_nombre: pprimer_nombre,
            segundo_nombre: psegundo_nombre,
            primer_apellido: pprimer_apellido,
            segundo_apellido: psegundo_apellido,
            sexo: psexo,
            correo: pcorreo
        }
    });
};
