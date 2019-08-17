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
        

        let celda_estado = fila.insertCell();


        let enlace_habilitado = document.createElement('a');
        if (listar_tarjetas[index]["estado"] == "Habilitado") {
            enlace_habilitado.innerText = "Habilitado";
        } else {
            enlace_habilitado.innerText = "Deshabilitado";
        }
        enlace_habilitado.href = 'listar_tarjetas.html';
        enlace_habilitado.addEventListener('click', function () {
            if (listar_tarjetas[index]["estado"] == "Habilitado") {
                habilitar(listar_tarjetas[index]['_id'], "Desabilitado");
            } else {
                habilitar(listar_tarjetas[index]['_id'], "Habilitado");
            }

            mostrar_tabla();
        });
        celda_estado.appendChild(enlace_habilitado);
}
};
        



        window.addEventListener('load', mostrarlista);

