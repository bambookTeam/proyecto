let btnSend = document.querySelector('#btnSendMsg');
let msgtoSend = document.querySelector('#chattextInput');


let sendMsg = () => {
    if (msgtoSend.value == "") {
        console.log('escriba pa')

    } else {
        let div = document.createElement('div');
        div.classList.add('msgVisitor')
        let img = document.createElement('img');
        img.setAttribute('src', 'https://img.icons8.com/bubbles/35/000000/lady-with-mail.png');
        let textContent = document.createElement('div');
        textContent.classList.add('textVisitor');

        let senderName = document.createElement('h3');
        senderName.innerHTML = "Le Sender";
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
        msgtoSend.value = "";
    }
}

let llenarperfilClub = async () => {
    let parentSection = document.querySelector('#info');

    let activeClub = localStorage.getItem('idClub');

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

            let btnEliminarClub = document.createElement('button');
            btnEliminarClub.innerText = "Eliminar";

            let btnCambiarEstadoClub = document.createElement('button');
            if (listaClubes[i].estado == 0) {
                btnCambiarEstadoClub.innerText = "Activar";
                btnCambiarEstadoClub.addEventListener('click', function () {
                    habilitar_Club(listaClubes[i]._id);
                    btnCambiarEstadoClub.innerText = "Desactivar";

                });

            } else {
                btnCambiarEstadoClub.innerText = "Desactivar";
                btnCambiarEstadoClub.addEventListener('click', function () {
                    deshabilitar_Club(listaClubes[i]._id);
                    btnCambiarEstadoClub.innerText = "Activar";
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
            }

            btnModificarClub.addEventListener('click', function () {
                localStorage.setItem('idClub', listaClubes[i]._id);
                location.replace('modificarClub.html');
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

window.addEventListener('load', llenarperfilClub);

