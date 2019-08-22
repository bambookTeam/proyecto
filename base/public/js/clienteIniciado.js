var modal = document.getElementById("myModal");
var modalContent=document.querySelector("#signinpopup")
var btnShowOptions = document.getElementById("myBtn");


var span = document.getElementsByClassName("close")[0];


btnShowOptions.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  
  }
  
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