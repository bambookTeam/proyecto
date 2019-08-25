var modal = document.getElementById("myModal");
var modalContent=document.querySelector("#signinpopup")
var btn = document.getElementById("myBtn");
var btnCancelInicioSesion = document.getElementById("btnCancel");
const btn_iniciarSesion = document.querySelector('#iniciar_sesion_banner')

var span = document.getElementsByClassName("close")[0];


btn_iniciarSesion.onclick = function() {
  modal.style.display = "block";
}

btn.onclick = function() {
  modal.style.display = "block";
}
btnCancelInicioSesion.onclick = function(){
    modal.style.display = "none";
    modalContent.style.height="450px";
    cleanSignIn();
}
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
  modalContent.style.height="450px";
  cleanSignIn();
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modalContent.style.height="450px";
    modal.style.display = "none";
    cleanSignIn();
  }
  
}

let cleanSignIn  = () => {
  document.getElementById("formulario").reset();
  document.querySelector('#txt-username').classList.remove('input_error');
  document.querySelector('#txt-contrasena').classList.remove('input_error');
  document.querySelector('#rellene').style.display="none";
}
/*
let sendEmail = () => {
  Email.send({
    Host : "smtp.elasticemail.com",
    Username : "schaconr@ucenfotec.ac.cr",
    Password : "087cfc8e-bab4-4c3b-9d8c-ba905ef7b227",
    To : 'zebaz9898@gmail.com',
    From : "schaconr@ucenfotec.ac.cr",
    Subject : "Test",
    Body : "testy bodytse"
  }).then(
  message => alert(message)
  );
}
window.addEventListener('load',sendEmail);

*/