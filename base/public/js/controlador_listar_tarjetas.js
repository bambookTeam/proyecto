const tbody = document.querySelector('#tbl_tarjetas tbody');
let listar_tarjetas = [];

let mostrarlista = async () => {
        listar_tarjetas = await obtenerTarjetas();
        listar_tarjetas = listar_tarjetas.reverse();


//         for (let index = 0; index < listar_tarjetas.length; index++) {

        
//         let cardContainer = document.querySelector("#card-container");

//        let cardDiv =  document.createElement("div") ;
//        cardDiv.classList.add("card-style");

//        let title = document.createElement("h6");
//        title.innerText = listar_tarjetas[index]['numerotarjeta'];


//        cardDiv.appendChild(title);
//        cardContainer.appendChild(cardDiv);
tbody.innerHTML = '';

for (let index = 0; index < listar_tarjetas.length; index++) {
    let fila = tbody.insertRow();
    fila.insertCell().innerHTML = listar_tarjetas[index]['numerotarjeta'];
    fila.insertCell().innerHTML = listar_tarjetas[index]['fechavencimiento'];
    fila.insertCell().innerHTML = "***";
           
 }
}
//     listar_tarjetas = await obtenerTarjetas();


    




mostrarlista();

