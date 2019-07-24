window.history.forward();

let  noback = () =>{ 
     window.history.forward(); 
}

window.addEventListener('load',noback);