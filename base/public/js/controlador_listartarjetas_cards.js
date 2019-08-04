const tbody = document.querySelector('#tbl_tarjetas tbody');
let listar_tarjetas = [];
const sct_tarjetas = document.querySelector('#tbl_tarjetas');



let mostrar_cards = async() => {

    listar_tarjetas = await obtenerTarjetas();
    for (let index = 0; index < listar_tarjetas; index++) {

        let numerotarjeta = document.createElement('p');
        let fechavencimiento = document.createElement('p');
        let codigocvv = document.createElement('p');


        numerotarjeta.innerText = lista_libros [i]['numerotarjeta'];
        fechavencimiento.innerText = lista_libros[i]['fechavencimiento'];
        codigocvv.innerText = lista_libros[i]['codigocvv'];

        window.addEventListener('load',mostrar_cards);

    }


}