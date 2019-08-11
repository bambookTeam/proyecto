'use strict';

let registrarClub = (pnombre_Club, pmodalidad, pfechaInicio, pfechaFin, pHora, pFrecuencia, ptema, pgenero,pcategoria,plibreria,psucursal,pidAdmin) => {
    axios({
        method: 'post',
        url: 'http://localhost:4000/api/registrar-clubLectura',
        responseType: 'json',
        data: {
            nombre_Club: pnombre_Club,
            modalidad: pmodalidad,
            fechaInicio: pfechaInicio,
            fechaFin: pfechaFin,
            hora: pHora,
            frecuencia: pFrecuencia,
            tema: ptema,
            genero: pgenero,
            categoria: pcategoria,
            libreria: plibreria,
            sucursal: psucursal,
            idAdmin: pidAdmin
        }
    });
};

let obtenerClubes = async() =>{
    try {
        // fetch data from an url endpoint
        const response = await axios({
            method: 'get',
            url: 'http://localhost:4000/api/listar-clubesLectura',
            responseType: 'json'
        });

        return response.data.lista_clubes;
    } catch (error) {
        console.log(error);
    }
};


let obtenerClubId = async(_id) =>{
    try{
        const response=await axios({
            method:'get',
            url: `http://localhost:4000/api/buscar-clubLectura-id/${_id}`,
            responseType:JSON
        });
        return response.data.club;
    }catch (error){
        console.log(error);
    }
}
