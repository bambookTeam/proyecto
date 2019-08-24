'use strict'

let registrarChat = (pidClub, pidSender, pdescripcion, phora) => {
    console.log(pidClub, pidSender, pdescripcion, phora);
    axios({
        method: 'post',
        url: 'http://localhost:4000/api/crear-chat',
        responseType: 'json',

        data: {
            idClub: pidClub,
            idSender: pidSender,
            descripcion: pdescripcion,
            hora: phora

        }


    });

};

let addMensaje = (pidClub, pidSender, pdescripcion, phora) => {
    console.log(pidClub, pidSender, pdescripcion, phora);
    axios({
        method: 'post',
        url: 'http://localhost:4000/api/agregar-mensaje',
        responseType: 'json',
        data: {
            _id: pidClub,
            idSender: pidSender,
            descripcion: pdescripcion,
            hora: phora
        }
    });
}

let listarChats = async () => {

    try {
        const response = await axios({
            method: 'get',
            url: 'http://localhost:4000/api/listar-chats',
            responseType: 'json'
        });

        return response.data.lista_chats;
    } catch (error) {
        console.log(error);
    }
}