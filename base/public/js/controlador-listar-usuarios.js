'use strict';

const tbody = document.querySelector('#tbl-usuarios tbody');
let lista_usuarios = [];
let txt_filtro = document.querySelector('#txt_filtro');


let mostrar_tabla = async () => {

    lista_usuarios = await obtenerUsuarios();
    tbody.innerHTML = '';

    lista_usuarios = lista_usuarios.reverse();


    for (let i = 0; i < lista_usuarios.length; i++) {
        let fila = tbody.insertRow();
        fila.insertCell().innerHTML = lista_usuarios[i]['tipo'];
        fila.insertCell().innerHTML = lista_usuarios[i]['primerNombre'];
        fila.insertCell().innerHTML = lista_usuarios[i]['primerApellido'];
        fila.insertCell().innerHTML = lista_usuarios[i]['correo'];
        fila.insertCell().innerHTML = lista_usuarios[i]['identificacion'];
        fila.insertCell().innerHTML = lista_usuarios[i]['sexo'];

        if (lista_usuarios[i]['tipo'] == "2") {

            let celda_perfil = fila.insertCell();
            let boton_perfil = document.createElement('button');
            boton_perfil.type = 'button';
            boton_perfil.innerText = 'Ver perfil';
            boton_perfil.dataset._id = lista_usuarios[i]['_id'];

            celda_perfil.appendChild(boton_perfil);

            boton_perfil.addEventListener('click', function () {
                //console.log(this.dataset._id);
                window.location.href = `ver-perfil-usuario.html?_id=${this.dataset._id}`
            });

            let celda_estado = fila.insertCell();
            let enlace_habilitado = document.createElement('a');
            enlace_habilitado.innerText = 'Habilitar';
            enlace_habilitado.href = 'listar-usuarios.html';
            enlace_habilitado.addEventListener('click', function() {
                habilitar(lista_usuarios[i]['_id']);
                mostrar_tabla();
            });
    
    
            let enlace_deshabilitado = document.createElement('a');
            enlace_deshabilitado.innerText = 'Deshabilitar';
            enlace_deshabilitado.href = 'listar-usuarios.html';;
            enlace_deshabilitado.addEventListener('click', function() {
                deshabilitar(lista_usuarios[i]['_id']);
                mostrar_tabla();
            });
    
            if (lista_usuarios[i]['estado'] == 1) {
                celda_estado.appendChild(enlace_deshabilitado);
            } else {
    
                celda_estado.appendChild(enlace_habilitado);
                fila.classList.add('deshabilitado');
            }
    
            let celda_editar = fila.insertCell();
            let enlace_editar = document.createElement('a');
            enlace_editar.innerText = 'Editar';
            enlace_editar.href = `editar-usuario.html?_id=${lista_usuarios[i]['_id']}`;
    
            celda_editar.appendChild(enlace_editar);

        }
        if (lista_usuarios[i]['tipo'] == "1") {
            let celda_perfil = fila.insertCell();
            let boton_perfil = document.createElement('button');
            boton_perfil.type = 'button';
            boton_perfil.innerText = 'Ver perfil';
            boton_perfil.dataset._id = lista_usuarios[i]['_id'];

            celda_perfil.appendChild(boton_perfil);

            boton_perfil.addEventListener('click', function () {
                //console.log(this.dataset._id);
                window.location.href = `visualizar_perfil_admin_libreria.html?_id=${this.dataset._id}`
            });

            let celda_estado = fila.insertCell();
            let enlace_habilitado = document.createElement('a');
            enlace_habilitado.innerText = 'Habilitar';
            enlace_habilitado.href = 'listar-usuarios.html';
            enlace_habilitado.addEventListener('click', function() {
                habilitar(lista_usuarios[i]['_id']);
                mostrar_tabla();
            });
    
    
            let enlace_deshabilitado = document.createElement('a');
            enlace_deshabilitado.innerText = 'Deshabilitar';
            enlace_deshabilitado.href = 'listar-usuarios.html';;
            enlace_deshabilitado.addEventListener('click', function() {
                deshabilitar(lista_usuarios[i]['_id']);
                mostrar_tabla();
            });
    
            if (lista_usuarios[i]['estado'] == 1) {
                celda_estado.appendChild(enlace_deshabilitado);
            } else {
    
                celda_estado.appendChild(enlace_habilitado);
                fila.classList.add('deshabilitado');
            }
    
            let celda_editar = fila.insertCell();
            let enlace_editar = document.createElement('a');
            enlace_editar.innerText = 'Editar';
            enlace_editar.href = `editar-usuario.html?_id=${lista_usuarios[i]['_id']}`;
    
            celda_editar.appendChild(enlace_editar);

        }
        if (lista_usuarios[i]['tipo'] == "0") {
            let celda_perfil = fila.insertCell();
            let boton_perfil = document.createElement('button');
            boton_perfil.type = 'button';
            boton_perfil.innerText = 'Ver perfil';
            boton_perfil.dataset._id = lista_usuarios[i]['_id'];

            celda_perfil.appendChild(boton_perfil);

            boton_perfil.addEventListener('click', function () {
                //console.log(this.dataset._id);
                window.location.href = `visualizarperfil_admingeneral.html?_id=${this.dataset._id}`
            });

            let celda_estado = fila.insertCell();
            let enlace_habilitado = document.createElement('a');
            enlace_habilitado.innerText = 'Habilitar';
            enlace_habilitado.href = 'listar-usuarios.html';
            enlace_habilitado.addEventListener('click', function() {
                habilitar(lista_usuarios[i]['_id']);
                mostrar_tabla();
            });
    
    
            let enlace_deshabilitado = document.createElement('a');
            enlace_deshabilitado.innerText = 'Deshabilitar';
            enlace_deshabilitado.href = 'listar-usuarios.html';;
            enlace_deshabilitado.addEventListener('click', function() {
                deshabilitar(lista_usuarios[i]['_id']);
                mostrar_tabla();
            });
    
            if (lista_usuarios[i]['estado'] == 1) {
                celda_estado.appendChild(enlace_deshabilitado);
            } else {
    
                celda_estado.appendChild(enlace_habilitado);
                fila.classList.add('deshabilitado');
            }
    
            let celda_editar = fila.insertCell();
            let enlace_editar = document.createElement('a');
            enlace_editar.innerText = 'Editar';
            enlace_editar.href = `editar-usuario.html?_id=${lista_usuarios[i]['_id']}`;
    
            celda_editar.appendChild(enlace_editar);

        }
    };



};

let filtrar_tabla = async () => {

    let filtro = txt_filtro.value.toLowerCase();
    tbody.innerHTML = '';


    for (let i = 0; i < lista_usuarios.length; i++) {
        if (  lista_usuarios[i]['primerNombre'].toLowerCase().includes(filtro) || lista_usuarios[i]['primerApellido'].toLowerCase().includes(filtro) || lista_usuarios[i]['correo'].toLowerCase().includes(filtro) || lista_usuarios[i]['identificacion'].toLowerCase().includes(filtro)) {
            
            let fila = tbody.insertRow();
            fila.insertCell().innerHTML = lista_usuarios[i]['tipo'];
            fila.insertCell().innerHTML = lista_usuarios[i]['primerNombre'];
            fila.insertCell().innerHTML = lista_usuarios[i]['primerApellido'];
            fila.insertCell().innerHTML = lista_usuarios[i]['correo'];
            fila.insertCell().innerHTML = lista_usuarios[i]['identificacion'];
            fila.insertCell().innerHTML = lista_usuarios[i]['sexo'];

            let celda_perfil = fila.insertCell();
            let boton_perfil = document.createElement('button');
            boton_perfil.type = 'button';
            boton_perfil.innerText = 'Ver perfil';
            boton_perfil.dataset._id = lista_usuarios[i]['_id'];

            celda_perfil.appendChild(boton_perfil);

            boton_perfil.addEventListener('click', function () {
                //console.log(this.dataset._id);
                window.location.href = `ver-perfil-usuario.html?_id=${this.dataset._id}`
            });

            let celda_estado = fila.insertCell();
            let enlace_habilitado = document.createElement('a');
            enlace_habilitado.innerText = 'Habilitar';
            enlace_habilitado.href = 'listar-usuarios.html';
            enlace_habilitado.addEventListener('click', function() {
                habilitar(lista_usuarios[i]['_id']);
                mostrar_tabla();
            });
    
    
            let enlace_deshabilitado = document.createElement('a');
            enlace_deshabilitado.innerText = 'Deshabilitar';
            enlace_deshabilitado.href = 'listar-usuarios.html';;
            enlace_deshabilitado.addEventListener('click', function() {
                deshabilitar(lista_usuarios[i]['_id']);
                mostrar_tabla();
            });
    
            if (lista_usuarios[i]['estado'] == 1) {
                celda_estado.appendChild(enlace_deshabilitado);
            } else {
    
                celda_estado.appendChild(enlace_habilitado);
                fila.classList.add('deshabilitado');
            }
    
            let celda_editar = fila.insertCell();
            let enlace_editar = document.createElement('a');
            enlace_editar.innerText = 'Editar';
            enlace_editar.href = `editar-usuario.html?_id=${lista_usuarios[i]['_id']}`;
    
            celda_editar.appendChild(enlace_editar);
        }

    }


};


mostrar_tabla();
txt_filtro.addEventListener('keyup', filtrar_tabla);