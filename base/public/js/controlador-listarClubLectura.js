let buscar_Club_input = document.querySelector('#buscarClub');
let btn_misClubes = document.querySelector('#btnListarMisClubes');

let listarClubes = async () => {
    let listaClubes = [];
    listaClubes = await obtenerClubes();
    let parentClubes = document.getElementById('clubes');
    parentClubes.innerHTML = "";
    listaClubes = listaClubes.reverse();
    for (let i = 0; i < listaClubes.length; i++) {

        let div = document.createElement('div');
        div.classList.add('club');

        let clubInfoDiv = document.createElement('div');
        clubInfoDiv.classList.add('club-info');

        parentClubes.appendChild(div);

        let img = document.createElement('img');
        img.setAttribute('src', 'https://res.cloudinary.com/dc8k6i5xm/image/upload/v1563223101/pandauser_sw7weq.png');

        div.appendChild(img);
        div.appendChild(clubInfoDiv);


        let h1 = document.createElement('h1');
        h1.innerHTML = listaClubes[i].nombre_Club;
        let modalidadLinea = document.createElement('p');
        modalidadLinea.innerHTML = listaClubes[i].modalidad;
        let fechaLinea = document.createElement('p');
        fechaLinea.innerHTML = 'Inicio: ' + listaClubes[i].fechaInicio.substring(0, 10) + '- Fin: ' + listaClubes[i].fechaFin.substring(0, 10);
        let horaLinea = document.createElement('p');
        if (listaClubes[i].modalidad == "Virtual") {
            horaLinea.innerHTML = "00:00";
        } else {
            horaLinea.innerHTML = listaClubes[i].hora + "-" + listaClubes[i].frecuencia;
        }
        let temaGenerolinea = document.createElement('p');
        temaGenerolinea.innerHTML = listaClubes[i].tema + ' - ' + listaClubes[i].genero;

        let libreriaSucursal = document.createElement('p');
        libreriaSucursal.innerHTML = listaClubes[i].libreria;

        let categorialinea = document.createElement('p');
        categorialinea.innerHTML = listaClubes[i].categoria;

        let btnUnirseClub = document.createElement('button');
        btnUnirseClub.innerText = "Unirse";
        btnUnirseClub.setAttribute('class', 'unirse_Club');
        btnUnirseClub.dataset._id = listaClubes[i]._id;

        let btnCrearEvento = document.createElement('button');
        btnCrearEvento.innerText = "Agregar Evento";
        btnCrearEvento.setAttribute('class', 'crear_Evento');
        btnCrearEvento.dataset._id = listaClubes[i]._id;

        clubInfoDiv.appendChild(h1);
        clubInfoDiv.appendChild(modalidadLinea);
        clubInfoDiv.appendChild(fechaLinea);
        clubInfoDiv.appendChild(horaLinea);
        clubInfoDiv.appendChild(temaGenerolinea);
        clubInfoDiv.appendChild(libreriaSucursal);
        clubInfoDiv.appendChild(categorialinea);
        div.appendChild(btnUnirseClub);
        div.appendChild(btnCrearEvento);

        btnCrearEvento.addEventListener('click', function () {
            localStorage.setItem('idClub', listaClubes[i]._id);
            location.replace('registrar-evento.html');
            //location.replace('registrar-evento.html');

        });


    }

}



let filtrar_Clubes = async () => {
    let listaClubes = [];

    listaClubes = await obtenerClubes();
    let parentClubes = document.getElementById('clubes');
    parentClubes.innerHTML = "";
    listaClubes = listaClubes.reverse();
    let txt_filtrar_Club = (buscar_Club_input.value).toLowerCase();


    for (let i = 0; i < listaClubes.length; i++) {

        if ((listaClubes[i].nombre_Club).toLowerCase().includes(txt_filtrar_Club) || (listaClubes[i].genero).toLowerCase().includes(txt_filtrar_Club) || (listaClubes[i].categoria).toLowerCase().includes(txt_filtrar_Club)) {
            let div = document.createElement('div');
            div.classList.add('club');

            let clubInfoDiv = document.createElement('div');
            clubInfoDiv.classList.add('club-info');

            parentClubes.appendChild(div);

            let img = document.createElement('img');
            img.setAttribute('src', 'https://res.cloudinary.com/dc8k6i5xm/image/upload/v1563223101/pandauser_sw7weq.png');

            div.appendChild(img);
            div.appendChild(clubInfoDiv);


            let h1 = document.createElement('h1');
            h1.innerHTML = listaClubes[i].nombre_Club;
            let modalidadLinea = document.createElement('p');
            modalidadLinea.innerHTML = listaClubes[i].modalidad;
            let fechaLinea = document.createElement('p');
            fechaLinea.innerHTML = 'Inicio: ' + listaClubes[i].fechaInicio.substring(0, 10) + '- Fin: ' + listaClubes[i].fechaFin.substring(0, 10);
            let horaLinea = document.createElement('p');
            if (listaClubes[i].modalidad == "Virtual") {
                horaLinea.innerHTML = "00:00";
            } else {
                horaLinea.innerHTML = listaClubes[i].hora + "-" + listaClubes[i].frecuencia;
            }
            let temaGenerolinea = document.createElement('p');
            temaGenerolinea.innerHTML = listaClubes[i].tema + ' - ' + listaClubes[i].genero;

            let categorialinea = document.createElement('p');
            categorialinea.innerHTML = listaClubes[i].categoria;

            let btnUnirseClub = document.createElement('button');
            btnUnirseClub.innerText = "Unirse";
            btnUnirseClub.setAttribute('class', 'unirse_Club');
            btnUnirseClub.dataset._id = listaClubes[i]._id;

            let btnCrearEvento = document.createElement('button');
            btnCrearEvento.innerText = "Agregar Evento";
            btnCrearEvento.setAttribute('class', 'crear_Evento');
            btnCrearEvento.dataset._id = listaClubes[i]._id;

            clubInfoDiv.appendChild(h1);
            clubInfoDiv.appendChild(modalidadLinea);
            clubInfoDiv.appendChild(fechaLinea);
            clubInfoDiv.appendChild(horaLinea);
            clubInfoDiv.appendChild(temaGenerolinea);
            clubInfoDiv.appendChild(categorialinea);
            div.appendChild(btnUnirseClub);
            div.appendChild(btnCrearEvento);

            btnCrearEvento.addEventListener('click', function () {
                localStorage.setItem('idClub', listaClubes[i]._id);
                location.replace('registrar-evento.html');
                //location.replace('registrar-evento.html');

            });
        }



    }


};

let misClubes = async () => {
    let listaClubes = [];

    listaClubes = await obtenerClubes();
    let parentClubes = document.getElementById('clubes');
    parentClubes.innerHTML = "";
    listaClubes = listaClubes.reverse();
    let usuarioActivo=sessionStorage.getItem('id');
    
    console.log(usuarioActivo);
    


    for (let i = 0; i < listaClubes.length; i++) {
        
        if (listaClubes[i].idAdmin==usuarioActivo) {
            let div = document.createElement('div');
            div.classList.add('club');

            let clubInfoDiv = document.createElement('div');
            clubInfoDiv.classList.add('club-info');

            parentClubes.appendChild(div);

            let img = document.createElement('img');
            img.setAttribute('src', 'https://res.cloudinary.com/dc8k6i5xm/image/upload/v1563223101/pandauser_sw7weq.png');

            div.appendChild(img);
            div.appendChild(clubInfoDiv);


            let h1 = document.createElement('h1');
            h1.innerHTML = listaClubes[i].nombre_Club;
            let modalidadLinea = document.createElement('p');
            modalidadLinea.innerHTML = listaClubes[i].modalidad;
            let fechaLinea = document.createElement('p');
            fechaLinea.innerHTML = 'Inicio: ' + listaClubes[i].fechaInicio.substring(0, 10) + '- Fin: ' + listaClubes[i].fechaFin.substring(0, 10);
            let horaLinea = document.createElement('p');
            if (listaClubes[i].modalidad == "Virtual") {
                horaLinea.innerHTML = "00:00";
            } else {
                horaLinea.innerHTML = listaClubes[i].hora + "-" + listaClubes[i].frecuencia;
            }
            let temaGenerolinea = document.createElement('p');
            temaGenerolinea.innerHTML = listaClubes[i].tema + ' - ' + listaClubes[i].genero;

            let categorialinea = document.createElement('p');
            categorialinea.innerHTML = listaClubes[i].categoria;

            let btnUnirseClub = document.createElement('button');
            btnUnirseClub.innerText = "Unirse";
            btnUnirseClub.setAttribute('class', 'unirse_Club');
            btnUnirseClub.dataset._id = listaClubes[i]._id;

            let btnCrearEvento = document.createElement('button');
            btnCrearEvento.innerText = "Agregar Evento";
            btnCrearEvento.setAttribute('class', 'crear_Evento');
            btnCrearEvento.dataset._id = listaClubes[i]._id;

            clubInfoDiv.appendChild(h1);
            clubInfoDiv.appendChild(modalidadLinea);
            clubInfoDiv.appendChild(fechaLinea);
            clubInfoDiv.appendChild(horaLinea);
            clubInfoDiv.appendChild(temaGenerolinea);
            clubInfoDiv.appendChild(categorialinea);
            div.appendChild(btnUnirseClub);
            div.appendChild(btnCrearEvento);

            btnCrearEvento.addEventListener('click', function () {
                localStorage.setItem('idClub', listaClubes[i]._id);
                location.replace('registrar-evento.html');
                //location.replace('registrar-evento.html');

            });
        }



    }
};

window.addEventListener('load', listarClubes);
buscar_Club_input.addEventListener('keyup', filtrar_Clubes);
btn_misClubes.addEventListener('click',misClubes);


