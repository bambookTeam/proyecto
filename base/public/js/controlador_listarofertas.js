'use strict'
var arrayListas = [];





var slideIndex = 1;



showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}



function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");

  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }

  if (slides[slideIndex-1]) {
        slides[slideIndex-1].style.display = "block";  
  }

}

let addNew = async () =>{
        
  let listar_ofertas = await obtenerOfertas();

  let lista=[];
  for (let i = 0; i < listar_ofertas.length; i++) {
        arrayListas.push(listar_ofertas[i].imagen);
        
}
  lista=arrayListas;
  let parent= document.getElementById('daddy')
  for(let j=0;j<arrayListas.length;j++){
     let div= document.createElement('div');
  div.classList.add('mySlides');

  let img= document.createElement('img');
  img.setAttribute('src',lista[j]);

  div.appendChild(img);
  parent.appendChild(div);
  }
  showSlides();

}

addNew();


function plusSlidesLibros(n){
   showMostSelled(slideLibrosVendidos += n);
}

function currentSlideLibro(n){
  showMostSelled(slideLibrosVendidos = n);
}