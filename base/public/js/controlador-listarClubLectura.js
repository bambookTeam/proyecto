let buscar_Club_input = document.querySelector('#buscarClub');
let btn_misClubes = document.querySelector('#btnListarMisClubes');
let btn = document.getElementById("btnRegistrarClub");
let btnClubes = document.getElementById("btnListarTodosLosClubes");

let listarClubes = async () => {
    let listaClubes = [];
    listaClubes = await obtenerClubes();

    let listaMiembrosClubes = [];
    listaMiembrosClubes = await obtenerListaMiembros();



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
        img.setAttribute('src', 'https://img.icons8.com/ios/100/000000/book-shelf.png');

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
        let pidMiembro = sessionStorage.getItem('id');

        let alreadyMember = false;




        for (let x = 0; x < listaMiembrosClubes.length; x++) {
            if (listaMiembrosClubes[x].idClub == listaClubes[i]._id && listaMiembrosClubes[x].idUsuario == pidMiembro) {
                alreadyMember = true;
            }
        }

        if (listaClubes[i].idAdmin == pidMiembro) {
            alreadyMember = true;

        }

        if (alreadyMember == true) {
            btnUnirseClub.innerText = "Ver Perfil";
            btnUnirseClub.addEventListener('click', function () {
                localStorage.setItem('idClub', listaClubes[i]._id);
                location.replace('ver_perfilClubLectura.html');
            });
        } else {
            btnUnirseClub.addEventListener('click', function () {
                let pidClub = listaClubes[i]._id;

                registrarMiembro_Club(pidClub, pidMiembro);


                Swal.fire({
                    title: 'Se ha unido al Club con exito',
                    text: 'Se redirigirá al Perfil del Club',
                    imageUrl: 'http://www.mywebshelf.com/images/icons/book.gif',
                    imageWidth: 300,
                    imageHeight: 200,
                    imageAlt: 'Custom image',
                    animation: false,
                    showCancelButton: false,
                    showConfirmButton: false,
                    allowOutsideClick: false
                });
                localStorage.setItem('idClub', listaClubes[i]._id);
                setTimeout(function () {
                    location.replace('ver_perfilClubLectura.html');
                }, 2000);


            });
        }

        clubInfoDiv.appendChild(h1);
        clubInfoDiv.appendChild(modalidadLinea);
        clubInfoDiv.appendChild(fechaLinea);
        clubInfoDiv.appendChild(horaLinea);
        clubInfoDiv.appendChild(temaGenerolinea);
        clubInfoDiv.appendChild(libreriaSucursal);
        clubInfoDiv.appendChild(categorialinea);
        div.appendChild(btnUnirseClub);


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
            img.setAttribute('src', 'https://img.icons8.com/ios/100/000000/book-shelf.png');

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

            clubInfoDiv.appendChild(h1);
            clubInfoDiv.appendChild(modalidadLinea);
            clubInfoDiv.appendChild(fechaLinea);
            clubInfoDiv.appendChild(horaLinea);
            clubInfoDiv.appendChild(temaGenerolinea);
            clubInfoDiv.appendChild(libreriaSucursal);
            clubInfoDiv.appendChild(categorialinea);
            div.appendChild(btnUnirseClub);





        }




    }


};

let misClubes = async () => {
    document.querySelector('#joinedClubs_h1').display = "block";
    let listaClubes = [];
    listaClubes = await obtenerClubes();
    let parentClubes = document.getElementById('clubes');
    parentClubes.innerHTML = "";
    listaClubes = listaClubes.reverse();
    let usuarioActivo = sessionStorage.getItem('id');
    for (let i = 0; i < listaClubes.length; i++) {

        if (listaClubes[i].idAdmin == usuarioActivo) {
            let div = document.createElement('div');
            div.classList.add('mi-club');

            let clubInfoDiv = document.createElement('div');
            clubInfoDiv.classList.add('club-info');

            parentClubes.appendChild(div);

            let img = document.createElement('img');
            img.setAttribute('src', 'https://img.icons8.com/ios/100/000000/book-shelf.png');

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

            let verClub = document.createElement('button');
            verClub.innerText = "Ver Club";
            verClub.setAttribute('class', 'unirse_Club');
            verClub.dataset._id = listaClubes[i]._id;

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
            div.appendChild(verClub);
            div.appendChild(btnCrearEvento);

            btnCrearEvento.addEventListener('click', function () {
                localStorage.setItem('idClub', listaClubes[i]._id);
                location.replace('registrar-evento.html');
                //location.replace('registrar-evento.html');
            });


            verClub.addEventListener('click', function () {
                localStorage.setItem('idClub', listaClubes[i]._id);
                location.replace('ver_perfilClubLectura.html');
            });
        }



    }


    let listaMiembros = [];
    listaMiembros = await obtenerListaMiembros();

    for (let i = 0; i < listaClubes.length; i++) {

        for (let index = 0; index < listaMiembros.length; index++) {
            if (listaMiembros[index].idUsuario == usuarioActivo && listaMiembros[index].idClub == listaClubes[i]._id) {

                let titleJoined = document.querySelector('#joinedClubs_h1');
                titleJoined.style.display = 'block';

                let div = document.createElement('div');
                div.classList.add('mi-club');

                let clubInfoDiv = document.createElement('div');
                clubInfoDiv.classList.add('club-info');


                let parentMisClubes = document.getElementById('joined_Clubes');
                parentMisClubes.appendChild(div);

                let img = document.createElement('img');
                img.setAttribute('src', 'https://img.icons8.com/ios/100/000000/book-shelf.png');

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

                let verClub = document.createElement('button');
                verClub.innerText = "Ver Club";
                verClub.setAttribute('class', 'unirse_Club');
                verClub.dataset._id = listaClubes[i]._id;

                let btnCrearEvento = document.createElement('button');
                btnCrearEvento.innerText = "Salirme";
                btnCrearEvento.setAttribute('class', 'crear_Evento');
                btnCrearEvento.dataset._id = listaClubes[i]._id;

                clubInfoDiv.appendChild(h1);
                clubInfoDiv.appendChild(modalidadLinea);
                clubInfoDiv.appendChild(fechaLinea);
                clubInfoDiv.appendChild(horaLinea);
                clubInfoDiv.appendChild(temaGenerolinea);
                clubInfoDiv.appendChild(categorialinea);
                div.appendChild(verClub);
                div.appendChild(btnCrearEvento);

                btnCrearEvento.addEventListener('click', async function () {
                    let listaMiembrosClubes = [];
                    listaMiembrosClubes = await obtenerListaMiembros();
                    let getIdUnion = "";


                    let usuarioActivoClub = sessionStorage.getItem('id');
                    let clubActivo = localStorage.getItem('idClub')
                    for (let x = 0; x < listaMiembrosClubes.length; x++) {

                        if (usuarioActivoClub == listaMiembrosClubes[x].idUsuario && listaMiembrosClubes[x].idClub == listaClubes[i]._id) {
                            getIdUnion = listaMiembrosClubes[x]._id;

                        }
                    }


                    Swal.fire({
                        title: '¿Está seguro que desea salirse de este Club de Lectura?',
                        showCancelButton: true,
                        imageUrl: 'https://static.thenounproject.com/png/158488-200.png',
                        imageWidth: 50,
                        imageHeight: 50,
                        imageAlt: 'Custom image',
                        confirmButtonColor: '#f6b93b',
                        cancelButtonColor: '#000',
                        confirmButtonText: 'Yes, delete it!'

                    }).then((result) => {
                        if (result.value) {
                            setTimeout(function () {

                                location.replace('%20clubesLectura.html');
                            }, 1500);

                            expulsar_miembro(getIdUnion);

                            Swal.fire({
                                title: 'Te has salido del Club de Lectura',
                                text: 'Se redireccionará a la página de Clubes',
                                type: 'success',
                                showCancelButton: false,
                                showConfirmButton: false,
                                allowOutsideClick: false
                            })

                        }
                    })






                });


                verClub.addEventListener('click', function () {
                    localStorage.setItem('idClub', listaClubes[i]._id);
                    location.replace('ver_perfilClubLectura.html');
                });

            } else {

            }

        }



    }
};

btn.onclick = function () {
    location.replace('registrar_clubLectura.html');
}

let redirigir_perfil_club = () => {
    location.replace('ver_perfilClubLectura.html');
}

window.addEventListener('load', listarClubes);
btnClubes.addEventListener('click', listarClubes);
buscar_Club_input.addEventListener('keyup', filtrar_Clubes);
btn_misClubes.addEventListener('click', misClubes);


