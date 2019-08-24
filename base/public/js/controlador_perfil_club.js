let btnSend = document.querySelector('#btnSendMsg');
let msgtoSend = document.querySelector('#chattextInput');



let llenarChat = async () => {
    let listaChats = await listarChats();
    let clubId = localStorage.getItem('idClub');
    let usuarioConectado = sessionStorage.getItem('id');
    let listausuarios = await obtenerUsuarios();

    for (let i = 0; i < listaChats.length; i++) {

        if (listaChats[i].idClub == clubId) {
            localStorage.setItem('idChat', listaChats[i]._id);
            let listaMensajes = listaChats[i].mensajes;
            for (let x = 0; x < listaMensajes.length; x++) {

                let div = document.createElement('div');
                let img = document.createElement('img');
                let divText = document.createElement('div');

                if (listaMensajes[x].idSender == usuarioConectado) {
                    div.classList.add('msgSender');
                    divText.classList.add('textSender');
                } else {
                    div.classList.add('msgVisitor');
                    divText.classList.add('textVisitor');

                }

                let senderName = document.createElement('h3');

                for (let y = 0; y < listausuarios.length; y++) {

                    if (listaMensajes[x].idSender == listausuarios[y]._id) {

                        let avatar = listausuarios[y].avatar;
                        img.src = avatar;

                        let nombre = listausuarios[y].nombreUsuario;
                        senderName.innerHTML = nombre;

                    }

                }

                let timeMsg = document.createElement('span');
                let time = listaMensajes[x].hora;
                timeMsg.innerHTML = "[" + time + "]";

                senderName.appendChild(timeMsg);

                let p = document.createElement('p');
                p.innerHTML = listaMensajes[x].descripcion;

                div.appendChild(img);
                div.appendChild(divText);

                divText.appendChild(senderName);
                divText.appendChild(p);

                let parent = document.querySelector('#chatArea');

                parent.appendChild(div);
            }
        }
    }

}

let sendMsg = () => {
    let usuarioConectado = sessionStorage.getItem('id');
    let activeChat = localStorage.getItem('idChat');
    if (msgtoSend.value == "") {


    } else {
        let div = document.createElement('div');
        div.classList.add('msgSender')
        let img = document.createElement('img');
        let imgSrc = sessionStorage.getItem('avatar');
        img.setAttribute('src', imgSrc);
        let textContent = document.createElement('div');
        textContent.classList.add('textSender');

        let senderName = document.createElement('h3');
        nombreUsuarioActivo=sessionStorage.getItem('nombreUsuario');
        senderName.innerHTML = nombreUsuarioActivo;
        let timeMsg = document.createElement('span');
        var today = new Date();

        if (today.getMinutes() < 10) {
            var time = today.getHours() + ":0" + today.getMinutes();
        } else {
            var time = today.getHours() + ":" + today.getMinutes();
        }
        timeMsg.innerHTML = "[" + time + "]";

        let p = document.createElement('p');
        p.innerHTML = msgtoSend.value;

        senderName.appendChild(timeMsg);
        textContent.appendChild(senderName);
        textContent.appendChild(p);

        div.appendChild(img);
        div.appendChild(textContent);

        let parent = document.querySelector('#chatArea');

        parent.appendChild(div);


        addMensaje(activeChat, usuarioConectado, msgtoSend.value, time);
        msgtoSend.value = "";


    }
}
let llenarperfilClub = async () => {
    let parentSection = document.querySelector('#info');

    let activeClub = localStorage.getItem('idClub');
    let listaMiembros = await listarChats();

    let listaClubes = await obtenerClubes();

    for (let i = 0; i < listaClubes.length; i++) {
        if (listaClubes[i]._id == activeClub) {
            let div = document.createElement('div');
            div.classList.add('club');

            let clubInfoDiv = document.createElement('div');
            clubInfoDiv.classList.add('club-info');

            parentSection.appendChild(div);

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
                document.querySelector('#chatSection').style.display = "block";

                let chatExists = false;
                for (let x = 0; x < listaMiembros.length; x++) {
                    if (listaMiembros[x].idClub == activeClub) {
                        chatExists = true;
                        console.log('ya tiene');
                    }
                }

                if (chatExists == false) {
                    registrarChat(activeClub, "5d4797b01c9d440000f1d408", "Bievenido al Chat de " + listaClubes[i].nombre_Club, "00:00");
                    location.reload();
                }
            } else {
                horaLinea.innerHTML = listaClubes[i].hora + "-" + listaClubes[i].frecuencia;
            }
            let temaGenerolinea = document.createElement('p');
            temaGenerolinea.innerHTML = listaClubes[i].tema + ' - ' + listaClubes[i].genero;

            let libreriaSucursal = document.createElement('p');
            libreriaSucursal.innerHTML = listaClubes[i].libreria;

            let categorialinea = document.createElement('p');
            categorialinea.innerHTML = listaClubes[i].categoria;

            let btnModificarClub = document.createElement('button');
            btnModificarClub.innerText = "Modificar";

            let btnSalirseClub = document.createElement('button');
            btnSalirseClub.innerText = "Salirme"

            let btnEliminarClub = document.createElement('button');
            btnEliminarClub.innerText = "Eliminar";

            let btnCambiarEstadoClub = document.createElement('button');
            if (listaClubes[i].estado == 0) {
                btnCambiarEstadoClub.innerText = "Activar";
                btnCambiarEstadoClub.addEventListener('click', function () {
                    habilitar_Club(listaClubes[i]._id);

                    location.reload();

                });

            } else {
                btnCambiarEstadoClub.innerText = "Desactivar";
                btnCambiarEstadoClub.addEventListener('click', function () {
                    deshabilitar_Club(listaClubes[i]._id);

                    location.reload();
                });
                
            }

            clubInfoDiv.appendChild(h1);
            clubInfoDiv.appendChild(modalidadLinea);
            clubInfoDiv.appendChild(fechaLinea);
            clubInfoDiv.appendChild(horaLinea);
            clubInfoDiv.appendChild(temaGenerolinea);
            clubInfoDiv.appendChild(libreriaSucursal);
            clubInfoDiv.appendChild(categorialinea);

            let activeUser = sessionStorage.getItem('id');
            if (listaClubes[i].idAdmin == activeUser) {
                clubInfoDiv.appendChild(btnModificarClub);
                clubInfoDiv.appendChild(btnEliminarClub);
                clubInfoDiv.appendChild(btnCambiarEstadoClub);
            } else {
                clubInfoDiv.appendChild(btnSalirseClub)
            }

            btnModificarClub.addEventListener('click', function () {
                localStorage.setItem('idClub', listaClubes[i]._id);
                location.replace('modificarClub.html');
            });

            btnSalirseClub.addEventListener('click', async function () {
                let listaMiembrosClubes = [];
                listaMiembrosClubes = await obtenerListaMiembros();
                let getIdUnion = "";


                for (let x = 0; x < listaMiembrosClubes.length; x++) {

                    if (activeUser == listaMiembrosClubes[x].idUsuario && listaMiembrosClubes[x].idClub == activeClub) {
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
                        }, 2000);

                        expulsar_miembro(getIdUnion);

                        Swal.fire(
                            'Te has salido del Club de Lectura',
                            'Se redireccionará a la página de Clubes',
                            'success'
                        )

                    }
                })






            });


        }

    }



}
btnTest = document.querySelector('#test');

btnSend.addEventListener('click', sendMsg);
msgtoSend.addEventListener('keydown', function (e) {
    if (e.keyCode === 13) {  //checks whether the pressed key is "Enter"
        if (msgtoSend.value == "" || msgtoSend.value == " ") {

        }
        else {
            sendMsg();
        }
    }
});

let lista_miembros_club = async () => {

    let tbody = document.querySelector('#tabla_usuarios tbody');

    tbody.innerHTML="";
    let clubActivo = localStorage.getItem('idClub');

    let listaMiembros = [];
    listaMiembros = await obtenerListaMiembros();

    let listaUsers = [];
    listaUsers = await obtenerUsuarios();

    let listaClubes=[];
    listaClubes=await obtenerClubes();

    let activeUser = sessionStorage.getItem('id');
    
    let idAdminClubActivo="";
    for (let y = 0; y < listaClubes.length; y++) {
        if (clubActivo==listaClubes[y]._id) {
            idAdminClubActivo=listaClubes[y].idAdmin;
        }
        
    }

    if (idAdminClubActivo==activeUser) {
        document.querySelector('#tabla_usuarios').style.display="block";
    } else {
        
    }

    for (let index = 0; index < listaMiembros.length; index++) {
       
        let fila = tbody.insertRow();


        for (let x = 0; x < listaUsers.length; x++) {
            if (listaMiembros[index].idUsuario == listaUsers[x]._id && listaMiembros[index].idClub == clubActivo) {
                fila.insertCell().innerHTML = listaUsers[x].nombreUsuario;

                
                let celda_perfil = fila.insertCell();

                let btnExpulsarMiembro = document.createElement('button');
                btnExpulsarMiembro.type = 'button';

                let img = document.createElement('img');
                btnExpulsarMiembro.appendChild(img);
                img.setAttribute('src', 'https://img.icons8.com/ios/25/000000/exit.png');
                

                if (listaUsers[x]._id==idAdminClubActivo) {
                    
                } else {
                    celda_perfil.appendChild(btnExpulsarMiembro);
                }


                btnExpulsarMiembro.addEventListener('click', async function () {
                    let listaMiembrosClubes = [];
                    listaMiembrosClubes = await obtenerListaMiembros();
                    let getIdUnion = "";
                    
                    
                    let usuarioActivoClub = listaUsers[x]._id;
                    let clubActivo = localStorage.getItem('idClub')
                    for (let x = 0; x < listaMiembrosClubes.length; x++) {
                        
                        if (usuarioActivoClub == listaMiembrosClubes[x].idUsuario && listaMiembrosClubes[x].idClub == clubActivo) {
                            getIdUnion = listaMiembrosClubes[x]._id;
                            
                        }
                    }
                    
                    console.log(getIdUnion);

                    Swal.fire({
                        title: '¿Está seguro que desea expulsar a este Usuario?',
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
                            }, 2000);

                            //expulsar_miembro(getIdUnion);

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
                
            }
        }


        

    }


}

window.addEventListener('load', llenarChat);
window.addEventListener('load', llenarperfilClub);
window.addEventListener('load', lista_miembros_club)

