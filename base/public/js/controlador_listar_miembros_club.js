const tbody=document.querySelector('#tbl_miembros tbody');

let getNombreusuario= async(pidUsuario)=>{
    let nombre_usuario=undefined;
    let listaUsuarios=[];

    listaUsuarios=await obtenerUsuarios();

    for (let index = 0; index < listaUsuarios.length; index++) {
        if (listaUsuarios[index]._id==pidUsuario) {
            nombre_usuario=listaUsuarios[index].nombreUsuario
        }         
    }
    console.log(nombre_usuario)
    return nombre_usuario;
}

let fillTabla=async()=>{
    tbody.innerHTML='';
    let clubActivo=localStorage.getItem('idClub');
    let listaMiembros=[];
    listaMiembros=await obtenerListaMiembros();

    for (let index = 0; index < listaMiembros.length; index++) {
        if (listaMiembros[index].idClub==clubActivo) {
            let fila=tbody.insertRow();

            fila.innerHTML=await getNombreusuario(listaMiembros[index].idUsuario);
        
            let getIdUnion="";

        let btnExpulsar=document.createElement('button');
        btnExpulsar.classList.add('btn_expulsar');
        let celda=fila.insertCell();
        btnExpulsar.innerHTML="Expulsar";
        for (let x = 0; x < listaMiembros.length; x++) {

            if (listaMiembros[index].idUsuario == listaMiembros[x].idUsuario && listaMiembros[x].idClub ==clubActivo) {
                getIdUnion = listaMiembros[x]._id;
    
            }
        }

        btnExpulsar.addEventListener('click',function(){
            Swal.fire({
                title: '¿Está seguro que desea echar a este miembro de este Club de Lectura?',
                showCancelButton: true,
                imageUrl: 'https://static.thenounproject.com/png/158488-200.png',
                imageWidth: 50,
                imageHeight: 50,
                imageAlt: 'Custom image',
                confirmButtonColor: '#f6b93b',
                cancelButtonColor: '#000',
                confirmButtonText: 'Sí, estoy seguro',
                cancelButtonText:'Cancelar'

            }).then((result) => {
                if (result.value) {
                    setTimeout(function () {

                        location.replace('%20clubesLectura.html');
                    }, 1500);
                   
                   expulsar_miembro(getIdUnion);

                    Swal.fire({
                        title: 'Te has salido del Club de Lectura',
                        text: 'Se redireccionará a la página de Clubes',
                        type: 'success',
                        showCancelButton: false,
                        showConfirmButton: false,
                        allowOutsideClick: false
                    })

                }
            })
        });
        fila.appendChild(btnExpulsar)


        }         
    }


}

window.addEventListener('load', fillTabla);

