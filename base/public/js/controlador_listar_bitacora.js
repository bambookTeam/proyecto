'use strict';


const tbody = document.querySelector('#tbl-bitacora tbody');
let lista_bitacora = [];
let usuario = [];
let txt_filtro = document.querySelector('#txt_filtro');


let mostrar_tabla = async () => {

    lista_bitacora = await obtener_Bitacora();
    tbody.innerHTML = '';

    lista_bitacora = lista_bitacora.reverse();



    for (let i = 0; i < lista_bitacora.length; i++) {

        let usuario = await obtenerUsuarioId(lista_bitacora[i]["usuarioRegistrado"]);
        if (usuario) {
        let fila = tbody.insertRow();
        fila.insertCell().innerHTML = usuario['primerNombre'];
        fila.insertCell().innerHTML = lista_bitacora[i]['descripcion'];

        let fecha = new Date(lista_bitacora[i]['fecha']);
        let anno= fecha.getFullYear();
        let mes = Number(fecha.getUTCMonth() + 1);
        let dia = fecha.getUTCDate();
        let hora = fecha.getHours();
        let minutos = fecha.getMinutes();

        if(mes<10){
            mes= "0"+ mes;
        }
         
        if(anno<10){
            anno="0"+anno;
        }

if(hora<10){
    hora= "0" + hora;
}

if(minutos<10){
    minutos= "0" + minutos;
}






        let fecha_formateada =  dia + '-' + mes + '-' + anno + "  " + hora + ":" + minutos;



        fila.insertCell().innerHTML =fecha_formateada;
        }
    }


};

let filtrar_tabla = async () => {

    let filtro = txt_filtro.value.toLowerCase();

    tbody.innerHTML = '';



    for (let i = 0; i < lista_bitacora.length; i++) {
        if (lista_bitacora[i]['usuarioRegistrado'].toLowerCase().includes(filtro) || lista_bitacora[i]['fecha'].toLowerCase().includes(filtro)) {
            let usuario = await obtenerUsuarioId(lista_bitacora[i]["usuarioRegistrado"]);

            let fila = tbody.insertRow();
            fila.insertCell().innerHTML = usuario['nombreUsuario'];
            fila.insertCell().innerHTML = lista_bitacora[i]['descripcion'];
    
            let fecha = new Date(lista_bitacora[i]['fecha']);
            let fecha_formateada = fecha.getFullYear() + '-' + Number(fecha.getUTCMonth() + 1) + '-' + fecha.getUTCDate();
    
    
    
            fila.insertCell().innerHTML =fecha_formateada;
        }

    };

};


    mostrar_tabla();
    txt_filtro.addEventListener('keyup', filtrar_tabla);