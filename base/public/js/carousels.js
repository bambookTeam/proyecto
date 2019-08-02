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

  slides[slideIndex-1].style.display = "block";  
}

function addNew(){
  let lista=[];
  lista=['https://tinypng.com/images/social/website.jpg','http://www.titikshapublicschool.com/wp-content/uploads/2018/11/developer-api.jpg','https://tinypng.com/images/social/photoshop.jpg'];
  let parent= document.getElementById('daddy')
  for(i=0;i<3;i++){
     let div= document.createElement('div');
  div.classList.add('mySlides');

  let img= document.createElement('img');
  img.setAttribute('src',lista[i]);

  div.appendChild(img);
  parent.appendChild(div);
  }
}


var slideLibrosVendidos = 1;
showMostSelled(slideLibrosVendidos);

function showMostSelled(n){
  var i;
  var slides = document.getElementsByClassName("libroVendido");

  if (n > slides.length) {slideLibrosVendidos = 1}    
  if (n < 1) {slideLibrosVendidos = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }

  slides[slideLibrosVendidos-1].style.display = "block";  
}

function plusSlidesLibros(n){
   showMostSelled(slideLibrosVendidos += n);
}

function currentSlideLibro(n){
  showMostSelled(slideLibrosVendidos = n);
}
