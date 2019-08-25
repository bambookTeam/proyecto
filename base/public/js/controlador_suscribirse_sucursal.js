'use strict';

let getOfertas=async(idLibreria)=>{
    let listaOfertas=[];
    let ofertasxLibreria=[];

    listaOfertas=await obtenerOfertas();

    for (let x = 0; x < listaOfertas.length; x++) {
        if (idLibreria == listaOfertas[x].id) {
            ofertasxLibreria.push(listaOfertas[x].imagen)
        }
    }
    return ofertasxLibreria
}

let getClubes = async (idSucursal) => {
    let listaClubesSucursal = []
    let listaClubes = [];
    let listaSucursales = [];
    let nombreSucursal = "";

    listaSucursales = await obtenerSucursales();
    listaClubes = await obtenerClubes();

    for (let x = 0; x < listaSucursales.length; x++) {
        if (idSucursal == listaSucursales[x]._id) {
            nombreSucursal = listaSucursales[x].nombre;

        }
    }

    for (let index = 0; index < listaClubes.length; index++) {
        if (listaClubes[index].sucursal == nombreSucursal) {
            listaClubesSucursal.push(listaClubes[index]);
        }

    }


    return listaClubesSucursal
}

let getClubesandOffers = async () => {

    let text = "";
    let clubExist = [];
    let offerExist=[];

    let idSucursal = localStorage.getItem('idSucursal');
    let idLibreria = localStorage.getItem('idLibreria');


    clubExist = await getClubes(idSucursal);
    offerExist = await getOfertas(idLibreria)
    console.log(offerExist)

}

window.addEventListener('load', getClubesandOffers)