let txt_filtrar_libro_cards = document.querySelector('#txt_filtro');

let listarLibrosCards = async () => {
    //let listaLibrosCards = [];
    //listaLibrosCards = await obtenerLibros();
    let librosComprados = await listarLibrosCliente(sessionStorage.getItem('id'));
    Cards = document.getElementById('libros');
    Cards.innerHTML = "";
    //listaLibrosCards = listaLibrosCards.reverse();
    for (let i = 0; i < librosComprados.length; i++) {

        let div = document.createElement('div');
        div.classList.add('libro');

        let libroInfoDiv = document.createElement('div');
        libroInfoDiv.classList.add('libro-info');

        Cards.appendChild(div);

        let img = document.createElement('img');
        img.setAttribute('src', librosComprados[i].portada);

        div.appendChild(img);
        div.appendChild(libroInfoDiv);


        let h1 = document.createElement('h1');
        h1.innerHTML = librosComprados[i].titulo;

        let precio= document.createElement("p");
        precio.innerHTML=librosComprados[i].precio;

        let cant = document.createElement("p");
        cant.innerHTML=librosComprados[i].cant;

        let btn_perfil = document.createElement('button');
        btn_perfil.type = 'button';
        btn_perfil.innerHTML= "Ver Perfil";

        btn_perfil.dataset._id = librosComprados[i]['_id'];

        btn_perfil.addEventListener('click', function () {
            localStorage.setItem("infoLibro", JSON.stringify(librosComprados[i]));
            window.location.href = 'ver_perfil_libro.html'

        });

       

        libroInfoDiv.appendChild(h1);
        libroInfoDiv.appendChild(precio);
        libroInfoDiv.appendChild(cant);
        libroInfoDiv.appendChild(btn_perfil);

    }

}

let filtrar_LibrosCards = async () => {
    let listaLibrosCards = [];
    listaLibrosCards = await obtenerLibros();

    let Cards = document.getElementById('libros');
    Cards.innerHTML = "";
    listaLibrosCards = listaLibrosCards.reverse();
    let fitro = (txt_filtrar_libro_cards.value).toLowerCase();


    for (let i = 0; i < listaLibrosCards.length; i++) {

        if ((listaLibrosCards[i].titulo).toLowerCase().includes(fitro)) {


            let div = document.createElement('div');
        div.classList.add('libro');

        let libroInfoDiv = document.createElement('div');
        libroInfoDiv.classList.add('libro-info');

        Cards.appendChild(div);

        let img = document.createElement('img');
        img.setAttribute('src', listaLibrosCards[i].portada);

        div.appendChild(img);
        div.appendChild(libroInfoDiv);


        let h1 = document.createElement('h1');
        h1.innerHTML = listaLibrosCards[i].titulo;

        let tipo= document.createElement("p");
        tipo.innerHTML=listaLibrosCards[i].tipo;

        let anio = document.createElement("p");
        anio.innerHTML=listaLibrosCards[i].anno;

        let btn_perfil = document.createElement('button');
        btn_perfil.type = 'button';
        btn_perfil.innerHTML= "Ver Perfil";

        btn_perfil.dataset._id = listaLibrosCards[i]['_id'];

        btn_perfil.addEventListener('click', function () {
            localStorage.setItem("infoLibro", JSON.stringify(listaLibrosCards[i]));
            window.location.href = 'ver_perfil_libro.html'

        });

       

        libroInfoDiv.appendChild(h1);
        libroInfoDiv.appendChild(tipo);
        libroInfoDiv.appendChild(anio);
        libroInfoDiv.appendChild(btn_perfil);




        }




    }


};

window.addEventListener('load', listarLibrosCards);
txt_filtrar_libro_cards.addEventListener('keyup', filtrar_LibrosCards);

