const tbody = document.querySelector('#tbl_tarjetas tbody');
let listar_tarjetas = [];

let mostrarlista = async () => {

        listar_tarjetas = await obtenerTarjetas();
        tbody.innerHTML = '';

        for (let index = 0; index < listar_tarjetas.length; index++) {
                let fila = tbody.insertRow();
                fila.insertCell().innerHTML = listar_tarjetas[index]['numerotarjeta'];
                fila.insertCell().innerHTML = listar_tarjetas[index]['fechavencimiento'];
                fila.insertCell().innerHTML = listar_tarjetas[index]['codigocvv'];

        }

}

mostrarlista();
