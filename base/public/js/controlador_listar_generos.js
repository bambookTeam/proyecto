const tbody = document.querySelector('#tbl_generos tbody');
let lista_genero = [];
txt_filtro=document.querySelector('#txt_filtro');

let mostrarlista = async () => {
        lista_genero = await listarGenero();
        lista_genero = lista_genero.reverse();



tbody.innerHTML = '';

for (let index = 0; index < lista_genero.length; index++) {
    let fila = tbody.insertRow();
    fila.insertCell().innerHTML = lista_genero[index]['genero'];

    
           
    let estilos_modificar = document.createElement('img');
    estilos_modificar.setAttribute('src', './imgs/edit-icon.png')

    let celda_modificar = fila.insertCell();
    let modificar = document.createElement('button');
    modificar.type = 'button';

    modificar.dataset._id = lista_genero[index]['_id'];

    celda_modificar.appendChild(modificar);
    modificar.appendChild(estilos_modificar);

    modificar.addEventListener('click', function () {
        localStorage.setItem("_idGenero",lista_genero[index]._id);
        window.location.href = 'modificar_genero.html'

    })

    
}

let celda_eliminar=fila.insertCell();
let enlace_eliminar=document.createElement('button');
eliminar.type = 'button';

eliminar.dataset._id=lista_genero[index]['_id'];

celda_eliminar.appendChild(modificar);
    modificar.appendChild(estilos_modificar);






let celda_estado = fila.insertCell();


        let enlace_habilitado = document.createElement('a');
        if (lista_genero[index]["estado"] == "Habilitado") {
            enlace_habilitado.innerText = "Habilitado";
        } else {
            enlace_habilitado.innerText = "Deshabilitado";
        }
        enlace_habilitado.href = 'listar_tarjetas.html';
        enlace_habilitado.addEventListener('click', function () {
            if (lista_genero[index]["estado"] == "Habilitado") {
                habilitar(lista_genero[index]['_id'], "Desabilitado");
            } else {
                habilitar(lista_genero[index]['_id'], "Habilitado");
            }

            mostrar_tabla();
        });
        celda_estado.appendChild(enlace_habilitado);

    }


    
    let filtrarlista = async () => {

        let filtro = txt_filtro.value.toLowerCase();
        tbody.innerHTML = '';
    
    
        for (let index = 0; index < lista_genero.length; index++) {
            if (lista_genero[index]['genero'].toLowerCase().includes(filtro)) {
                let fila = tbody.insertRow();
                fila.insertCell().innerHTML = lista_genero[index]['genero'];
      
        
    
    }

        }
    }

window.addEventListener('load', mostrarlista);
txt_filtro.addEventListener('keyup', filtrarlista);


    