
var geoObject = convertir();
llenarProvincias();



function convertir() {
    return JSON.parse(geo);
}

function llenarProvincias() {
    for (let i = 0; i < geoObject.provincias.length; i++) {
        contruirOpciones("txt_provincia", geoObject.provincias[i].nombre);
    }
}

function contruirOpciones(idSelect, valor) {
    var x = document.getElementById(idSelect);
    var option = document.createElement("option");
    option.text = valor;
    option.value = valor;
    x.add(option);
}


function llenarCantones(provincia) {
    limpiarOpciones("txt_canton");
    limpiarOpciones("txt_distrito");
    contruirOpciones("txt_canton", "--Seleccione una opción");
    for (let i = 0; i < geoObject.provincias.length; i++) {
        if (provincia == geoObject.provincias[i].nombre) {
            for (let j = 0; j < geoObject.provincias[i].cantones.length; j++) {
                contruirOpciones("txt_canton", geoObject.provincias[i].cantones[j].nombre);
            }
        }

    }

}

function llenarDistritos(canton) {
    limpiarOpciones("txt_distrito");
    contruirOpciones("txt_distrito", "--Seleccione una opción");
    for (let i = 0; i < geoObject.provincias.length; i++) {

        for (let j = 0; j < geoObject.provincias[i].cantones.length; j++) {
            if (geoObject.provincias[i].cantones[j].nombre == canton) {
                for (let k = 0; k < geoObject.provincias[i].cantones[j].distritos.length; k++) {
                    contruirOpciones("txt_distrito", geoObject.provincias[i].cantones[j].distritos[k].nombre);
                }
            }

        }
    }
}



function limpiarOpciones(idSelect, select = document.getElementById(idSelect)) {
    for (let i = select.options.length - 1; i >= 0; i--) {
        select.remove(i);
    }
}

