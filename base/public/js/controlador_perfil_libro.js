'use strict'

const  urlParams = new URLSearchParams(window.location.search);
// console.log(urlParams.get('_id'));
let id_ = urlParams.get('_id');
let txt_titulo = document.querySelector('#txt_titulo');
let txt_edicion = document.querySelector('#txt_edicion');
let txt_editorial = document.querySelector('#txt_editorial');
let txt_autor = document.querySelector('#txt_autor');
let txt_anno = document.querySelector('#txt_anno');
let txt_idioma = document.querySelector('#txt_idioma');
let txt_isbn = document.querySelector('#txt_isbn');
let txt_genero = document.querySelector('#txt_genero');
let txt_tipo = document.querySelector('#txt_tipo');
let txt_portada = document.querySelector('#portada');

let img=document.querySelector('#imagen');



let llenar_perfil = async () => {

    let libro = JSON.parse(localStorage.getItem("infoLibro"));
   if(libro){
    txt_titulo.innerHTML = libro['titulo'];
    txt_edicion.innerHTML = libro['edicion'];
    txt_editorial.innerHTML = libro['editorial'];
    txt_autor.innerHTML = libro['autor'];
    txt_anno.innerHTML = libro['anno'];
    txt_idioma.innerHTML = libro['idioma'];
    txt_isbn.innerHTML = libro['isbn'];
    txt_genero.innerHTML = libro['genero'];
    txt_tipo.innerHTML = libro['tipo'];

    img.setAttribute('src',libro['imagen']);
   

    localStorage.removeItem("infoLibro");
   }
};

// Script para carousel
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " active";
}

llenar_perfil ();