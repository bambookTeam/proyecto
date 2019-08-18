'use strict';

let usuario = JSON.parse(localStorage.getItem("usuario"));
let lista_autores = [];
let idAutor = localStorage.getItem('_idAutor');

let modificarAutor = async(id) =>{
    console.log(id);
    const input_nombre = document.querySelector('#txt-nombre-autor').value;
    const input_nombre_artistico = document.querySelector('#txt-nombre-artistico-autor').value;
    const input_fecha_nacimiento = document.querySelector('#txt-nacimiento-autor').value;
    const input_fecha_muerte = document.querySelector('#txt-muerte-autor').value;
    const input_nacionalidad = document.querySelector('#txt-nacionalidad-autor').value;
    const input_biografia = document.querySelector('#txt-biografia-autor').value;
    const input_premios = document.querySelector('#txt-premios-autor').value;
    const input_foto = document.querySelector('#foto').value;

    modificar_autor(id, input_nombre, input_nombre_artistico, input_fecha_nacimiento, input_fecha_muerte, input_nacionalidad, input_biografia, input_premios, input_foto);
}
document.querySelector("#btn-registrar-autor").addEventListener("click", function () {
   modificarAutor(idAutor); 
});

let llenarFormulario = async () => {
    lista_autores = await obtenerAutores();

    for (let i = 0; i < lista_autores.length; i++) {
        if (idAutor==lista_autores[i]._id) {
            document.querySelector('#txt-nombre-autor').value = lista_autores[i].nombre;
            document.querySelector('#txt-nombre-artistico-autor').value = lista_autores[i].nombre_artistico;
            document.querySelector('#txt-nacimiento-autor').value = lista_autores[i].nacimiento;
            document.querySelector('#txt-muerte-autor').value = lista_autores[i].muerte;
            document.querySelector('#txt-nacionalidad-autor').value = lista_autores[i].nacionalidad;
            document.querySelector('#txt-biografia-autor').value = lista_autores[i].biografia;
            document.querySelector('#txt-premios-autor').value = lista_autores[i].premios;
            document.querySelector('#foto').value = lista_autores[i].foto;
        }
        
    }
    let validarDatos = (date)

    limpiar();
};

let limpiar = () =>{
    localStorage.removeItem("usario");
}
llenarFormulario();