function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
// close modal 
const close = document.querySelector(".close");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal
function closeModal() {
  modalbg.style.display = "none";
}
close.addEventListener("click", closeModal);


// Partie Formulaire
const firstNameUser = document.getElementById("first");
const lastNameUser = document.getElementById("last");
const emailUser = document.getElementById("email");
const birthdateUser = document.getElementById("birthdate");
const quantityUser = document.getElementById("quantity");
const checkbox = document.getElementById("checkbox1");
