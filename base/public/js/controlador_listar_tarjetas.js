const tbody = document.querySelector('#tbl_tarjetas tbody');
let listar_tarjetas = [];

let mostrarlista = async () => {
    listar_tarjetas = await obtenerTarjetas();
    listar_tarjetas = listar_tarjetas.reverse();
     tbody.innerHTML = "";

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
            redireccionar(listar_tarjetas[index]);
        })


        let celda_estado = fila.insertCell();
        let enlace_habilitado = document.createElement('a');
        enlace_habilitado.innerText = 'Habilitar';
        enlace_habilitado.href = 'listar_tarjetas.html';
        enlace_habilitado.addEventListener('click', function() {
            habilitar(listar_tarjetas[index]['_id']);
            mostrarlista();
        });


        let enlace_deshabilitado = document.createElement('a');
        enlace_deshabilitado.innerText = 'Deshabilitar';
        enlace_deshabilitado.href = 'listar_tarjetas.html';;
        enlace_deshabilitado.addEventListener('click', function() {
            deshabilitar(listar_tarjetas[index]['_id']);
            mostrarlista();
        });

        if (listar_tarjetas[index]['estado'] == 'Habilitado') {
            celda_estado.appendChild(enlace_deshabilitado);
        } else {

            celda_estado.appendChild(enlace_habilitado);
            fila.classList.add('deshabilitado');
        }

        let estilos_eliminar = document.createElement('img');
        estilos_eliminar.setAttribute('src', './imgs/delete-icon.png')
    
        let celda_eliminar = fila.insertCell();
        let enlace_eliminar = document.createElement('button');
        enlace_eliminar.type = 'button';
    enlace_eliminar.addEventListener('click', function () {
        Swal.fire({
            title: 'Está seguro que desea eliminar la tarjeta?',
            text: "Ésta acción no se puede revertir",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sí, estoy seguro'
        }).then((result) => {
            if (result.value) {
                eliminar(listar_tarjetas[index]['_id']);

                Swal.fire(
                    'Tarjeta eliminada!',
                    'success'
                ).then((result) => {
                    if (result.value) {
                        window.location.href = 'listar_tarjetas.html';
                    }
                });
            }
        })
        localStorage.setItem("eliminar", JSON.stringify(listar_tarjetas[index]));

    })

    celda_eliminar.appendChild(enlace_eliminar);
    enlace_eliminar.appendChild(estilos_eliminar);



}

}




window.addEventListener('load', mostrarlista);

