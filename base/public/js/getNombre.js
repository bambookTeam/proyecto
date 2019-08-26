let usuario_activo_123=sessionStorage.getItem('tipoUsuario');
console.log(usuario_activo_123)
let optionSucursales=document.querySelector('#sucursal_href');
let optionLibrerias = document.querySelector('#optionlibrerias');
let optionUsuarios = document.querySelector('#optionUsers');
let optionGeneros = document.querySelector('#optionGeneros');
let optionCategorias = document.querySelector('#optionCategorias');
let options=document.getElementsByClassName('optionProfile');
let optionIntercambio=document.querySelector('#optionIntercambio');
let optionAutores=document.querySelector('#optionAutores');
let optionMisLibros=document.querySelector('#optionMisLibros');
let optionInventario=document.querySelector('#optionInventario');
let optionLibros=document.querySelector('#option_libros');



window.addEventListener('load',function(){
    if(usuario_activo_123==2){
        
    optionSucursales.style.display="none";
    optionLibrerias.href='listar_librerias_cliente.html';
    optionUsuarios.style.display="none";
    document.querySelector('#refGeneros').href='listar_generos_adminlibre.html';
    optionCategorias.style.display="none";
    document.querySelector('#optionBitacora').style.display='none';
    document.querySelector('#optionReportes').style.display='none';
    document.querySelector('#optionInventario').style.display='none';
    optionAutores.style.display="none";
    optionLibros.href='listar_librerias_cliente.html'
    }else{
        for (let index = 0; index < options.length; index++) {
            options[index].style.display='none';
            document.querySelector('#idVerPerfil').style.display="block";
            document.querySelector('#signinpopup').style.height="58px";
            
        }
        if (usuario_activo_123==1) {
            optionCategorias.style.display="none";
            optionAutores.style.display="none";
            optionIntercambio.style.display="none";
            optionUsuarios.style.display="none";
            document.querySelector('#optionBitacora').style.display='none';
            document.querySelector('#refGeneros').href='listar_generos_adminlibre.html';
            optionSucursales.href='listar_sucursalesAdmin.html';
            optionMisLibros.style.display="none";
            optionInventario.href="inventario_libreria.html";
            optionLibrerias.href='listar_libreria_adminLib.html';
            optionLibros.href='listar_librerias_cliente.html'
           
        } else {
            optionInventario.href="inventario_general.html"
        }

        if(document.querySelector('#idVerPerfil')) {
            document.querySelector('#idVerPerfil').style.display="block";
            document.querySelector('#signinpopup').style.height="58px";
        }


    }
    
});