const tbody = document.querySelector('#tbl_tarjetas tbody');
let listar_tarjetas = [];

let mostrarlista = async () => {
        listar_tarjetas = await obtenerTarjetas();
        listar_tarjetas = listar_tarjetas.reverse();



tbody.innerHTML = '';

for (let index = 0; index < listar_tarjetas.length; index++) {
    let fila = tbody.insertRow();
    fila.insertCell().innerHTML = listar_tarjetas[index]['numerotarjeta'];
    fila.insertCell().innerHTML = listar_tarjetas[index]['fechavencimiento'];
    fila.insertCell().innerHTML = "***";
    
           


//     listar_tarjetas = await obtenerTarjetas();

let estilos_modificar = document.createElement('img');
        estilos_modificar.setAttribute('src', './imgs/edit-icon.png')

        let celda_modificar = fila.insertCell();
        let modificar = document.createElement('button');
        modificar.type = 'button';

        modificar.dataset._id = listar_tarjetas[index]['_id'];

        celda_modificar.appendChild(modificar);
        modificar.appendChild(estilos_modificar);

        modificar.addEventListener('click', function () {
            localStorage.setItem("modificarTarjeta", JSON.stringify(listar_tarjetas[index]));
            window.location.href = 'modificar_tarjeta.html'
        })
    
        
}

}


        window.addEventListener('load', mostrarlista);

