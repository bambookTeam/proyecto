const tbody = document.querySelector('#tbl_tarjetas tbody');
let listar_tarjetas = [];

let mostrarlista = async () => {
        listar_tarjetas = await obtenerTarjetas();

        for (let index = 0; index < listar_tarjetas.length; index++) {

        
        let cardContainer = document.querySelector("#card-container");

       let cardDiv =  document.createElement("div") ;
       cardDiv.classList.add("card-style");

       let title = document.createElement("h6");
       title.innerText = listar_tarjetas[index]['numerotarjeta'];
       title.innerText =listar_tarjetas[index]['fechavencimiento'];
       title.innerText =listar_tarjetas[index]['codigocvv'];



       cardDiv.appendChild(title);
       cardContainer.appendChild(cardDiv);
        
    }

    mostrarlista();