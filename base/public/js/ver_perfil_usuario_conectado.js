/*
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


*/