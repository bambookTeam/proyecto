'use strict'


let mostrarlista = async () => {

        let listar_ofertas = [];
        listar_ofertas = await obtenerOfertas();
        console.log(listar_ofertas);

}

mostrarlista();
// mostrarlista();

// var slideIndex = 1;
// showSlides(slideIndex);

// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }

// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

// function showSlides(n) {
//   var i;
//   var slides = document.getElementsByClassName("mySlides");

//   if (n > slides.length) {slideIndex = 1}    
//   if (n < 1) {slideIndex = slides.length}
//   for (i = 0; i < slides.length; i++) {
//       slides[i].style.display = "none";  
//   }

//   slides[slideIndex-1].style.display = "block";  
// }

// function addNew(){
//   let listar_ofertas=[];
//   listar_ofertas=[];
//   let parent= document.getElementById('daddy')
//   for(i=0;i<3;i++){
//      let div= document.createElement('div');
//   div.classList.add('mySlides');

//   let img= document.createElement('img');
//   img.setAttribute('src',listar_ofertas[i]);

//   div.appendChild(img);
//   parent.appendChild(div);
//   }
// }


// var slideOfertas = 1;
// showMostSelled(slideOfertas);

// function showMostSelled(n){
//   var i;
//   var slides = document.getElementsByClassName("libroVendido");

//   if (n > slides.length) {slideOfertas = 1}    
//   if (n < 1) {slideOfertas = slides.length}
//   for (i = 0; i < slides.length; i++) {
//       slides[i].style.display = "none";  
//   }

//   slides[slideOfertas-1].style.display = "block";  
// }

// function plusSlidesLibros(n){
//    showMostSelled(slideOfertas += n);
// }

// function currentSlideLibro(n){
//   showMostSelled(slideOfertas = n);
// }