'use strict';
var 
modificar= document.getElementById('btn-registrar-tarjeta'),
input_numerotarjeta = document.getElementById('txt-numerotarjeta'),
    input_fechavencimiento = document.getElementById('txt-fechadevencimiento'),
    input_codigocvv = document.querySelector('#txt-codigocvv');


const urlParams = new URLSearchParams(window.location.search);
let _id = urlParams.get('_id');