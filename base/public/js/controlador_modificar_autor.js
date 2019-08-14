'use strict';

const boton_modificar = document.querySelector('#btn-registrar-autor');
const input_nombre = document.querySelector('#txt-nombre-autor');
const input_nombre_artistico = document.querySelector('#txt-nombre-artistico-autor');
const input_fecha_nacimiento = document.querySelector('#txt-nacimiento-autor');
const input_fecha_muerte = document.querySelector('#txt-muerte-autor');
const input_nacionalidad = document.querySelector('#txt-nacionalidad-autor');
const input_biografia = document.querySelector('#txt-biografia-autor');
const input_premios = document.querySelector('#txt-premios-autor');
const input_foto = document.querySelector('#foto');

const urlParams = new URLSearchParams(window.location.search);
let _id = urlParams.get('_id');

let cargar_formulario = async () => {
    let autor = await obtenerAutorId(_id);
    if (autor) {
        input_nombre.value = autor['nombre'];
        input_nombre_artistico.value = autor['nombre_artistico'];
        input_fecha_nacimiento.value = autor['nacimiento'];
        input_fecha_muerte.value = autor['muerte'];
        input_nacionalidad.value = autor['nacionalidad'];
        input_biografia.value = autor['biografia'];
        input_premios.value = autor['premios'];
        input_foto.value = autor['foto'];
    }
}
let editar_autor = () =>{
    modificar_autor(pid, pnombre, pnombre_artistico, pfecha_nacimiento, pfecha_muerte, pnacionalidad, pbiografia, ppremios, pfoto)
};

cargar_formulario();
boton_modificar.addEventListener('click', editar_autor);