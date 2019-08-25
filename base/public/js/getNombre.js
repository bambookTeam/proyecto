let usuario_activo=sessionStorage.getItem('tipoUsuario')
let optionSucursales=document.querySelector('#optionSucursales');
let optionLibrerias = document.querySelector('#optionlibrerias');
let optionUsuarios = document.querySelector('#optionUsers');
let optionGeneros = document.querySelector('#optionGeneros');
let optionCategorias = document.querySelector('#optionCategorias');
let options=document.getElementsByClassName('optionProfile');
let optionIntercambio=document.querySelector('#optionIntercambios');
let optionAutores=document.querySelector('#optionAutores');
var numItems = $('.optionProfile').length;
var items = $('.optionProfile')


window.addEventListener('load',function(){
    if(usuario_activo==2){
        
    optionSucursales.style.display="none";
    optionLibrerias.href='%20clubesLectura.html';
    optionUsuarios.style.display="none";
    document.querySelector('#refGeneros').href='listar_generos_adminlibre.html';
    optionCategorias.style.display="none";
    document.querySelector('#optionBitacora').style.display='none';
    document.querySelector('#optionReportes').style.display='none';
    document.querySelector('#optionInventario').style.display='none';
    optionAutores.style.display="none";
    
    }else{
        for (let index = 0; index < options.length; index++) {
            options[index].style.display='none';
            document.querySelector('#idVerPerfil').style.display="block";
            document.querySelector('#signinpopup').style.height="58px";
            
        }
        if (usuario_activo==1) {
            
            document.querySelector('#sucursal_href').setAttribute('href','listar_sucursales_admin.html');
            optionAutores.style.display="none";
            optionIntercambio.style.display="none";
            optionUsuarios.style.display="none";
            document.querySelector('#optionBitacora').style.display='none';
            document.querySelector('#refGeneros').href='listar_generos_adminlibre.html';
    
           
        } else {
            
        }

        if(document.querySelector('#idVerPerfil')) {
            document.querySelector('#idVerPerfil').style.display="block";
            document.querySelector('#signinpopup').style.height="58px";
        }


    }
    
});