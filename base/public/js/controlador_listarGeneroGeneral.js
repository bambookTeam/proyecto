const tbody = document.querySelector('#tbl_generos tbody');
let lista_genero = [];
txt_filtro=document.querySelector('#txt_filtro');

let mostrarlista = async () => {
        lista_genero = await obtenerGeneros();
        lista_genero = lista_genero.reverse();
        tbody.innerHTML = '';

for (let index = 0; index < lista_genero.length; index++) {
    let fila = tbody.insertRow();
    fila.insertCell().innerHTML = lista_genero[index]['genero'];
}

}



    
    let filtrarlista = async () => {

        let filtro = txt_filtro.value.toLowerCase();
        tbody.innerHTML = '';
    
    
        for (let index = 0; index < lista_genero.length; index++) {
            if (lista_genero[index]['genero'].toLowerCase().includes(filtro)) {
                let fila = tbody.insertRow();
                fila.insertCell().innerHTML = lista_genero[index]['genero'];
      
        
    
    }

        }
    }


    window.addEventListener('load',mostrarlista);
    txt_filtro.addEventListener('keyup', filtrarlista);