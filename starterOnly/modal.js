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
const quantityInput = document.getElementById("quantity");
const checkboxInput = document.getElementById("checkbox1");


// Form validation
const form = document.querySelector("#formulaire"); // on récupère les entrées du formulaire
const formValidation = document.querySelector("#modal-inscription");//on récupère le formulaire de confirmation



// Ajouter validation ou messages d'erreur 

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!validInputs()) {//
    return;
  }
  form.reset();// on reset le form si il est valides,
  form.style.display = "none";
  formValidation.style.display = "block";
});

formValidation.addEventListener("submit", (e) => {
  e.preventDefault();
  formValidation.style.display = "none";
  modalbg.style.display = "none";//ferme la modal de l'inscription
  form.style.display = "block";
});

function validInputs() {
  let valid = true; 
//regex pour le nom et le prénom
  const regexName = /^[A-ÿ]{2,}[A-ÿ\-\s]*$/;
  const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]{2,3})$/; //regex email 
  const regexDate = /([\d]+)([\-\./])([\d]+)([\-\./])([\d]+)|((Jan(|uary)|Feb(|ruary)|Mar(|ch)|Apr(|il)|May|Jun(|e)|Jul(|y)|Aug(|ust)|Sept(|ember)|Oct(|ober)|(Nov|Dec)(|ember))([\s\-])(|([\d]+){1,2}([\s\-]|\, ))([\d]+){4})/;
// regex date de naissance 
  const firstNameValue = firstNameUser.value.trim();
  const lastNameValue = lastNameUser.value.trim();
  const emailValue = emailUser.value.trim();
  const birthdateValue = birthdateUser.value.trim();
  const quantityValue = quantityInput.value.trim();

  if (!regexName.test(firstNameValue)) {
    setErrorFor(firstNameUser, 'Veuillez entrer 2 caractères ou plus pour le champ du prénom.');
    valid = false;
  } else {
  
    setSuccessFor(firstNameUser);
  }

  if (!regexName.test(lastNameValue)) {
    setErrorFor(lastNameUser, 'Veuillez entrer 2 caractères ou plus pour le champ du nom.');
    valid = false;
  } else {
    setSuccessFor(lastNameUser);
  }

  if (!regexEmail.test(emailValue)) {
    setErrorFor(emailUser, 'Saisissez une adresse mail valide');
    valid = false;
  } else {
    setSuccessFor(emailUser);
  }

  if (!regexDate.test(birthdateValue)) {
    setErrorFor(birthdateUser, 'Vous devez entrer votre date de naissance.');
    valid = false;
  } else {
    setSuccessFor(birthdateUser);

    if (age(birthdateValue)) {
      setErrorFor(birthdateUser, 'Veuillez saisir une date de naissance valide  !');
      valid = false;
    } else {
      setSuccessFor(birthdateUser);
    }
  }
    // vérification pour voir si l'utilisateur à au moins 18 ans.
function age (date) {
  const birthdate = new Date(date);
  const now = new Date();
  let age = now.getFullYear() - birthdate.getFullYear();
  if (now.getMonth() < birthdate.getMonth() || (now.getMonth() === birthdate.getMonth() && now.getDate() < birthdate.getDate())) {
    age--;
  }
  return age < 18;
}


  if (quantityValue === '') {
    setErrorFor(quantityInput, 'Veuillez saisir un nombre entre 0 et 99');
    valid = false;
  } else {
    setSuccessFor(quantityInput);
  }
  const locationFormData = document.querySelector('#locationRadios');

  if (!isLocationSelected()) {
    locationFormData.className = 'formData error';
    valid = false;
  } else {
    locationFormData.className = 'formData';
  }

  // vérification pour voir un emplacement est sélectionné
function isLocationSelected() {
  const locationElements = document.querySelectorAll('input[name="location"]');
  for (let i = 0; i < locationElements.length; i++) {
    if (locationElements[i].checked) {
      return true;
    }
  }
  return false;
}

  if (!checkboxInput.checked) {
    setErrorFor(checkboxInput, 'Vous devez vérifier que vous acceptez les termes et conditions.');
    valid = false;
  } else {
    setSuccessFor(checkboxInput);
  }

  return valid;
}

function setErrorFor(input, message) {
  const formControl = input.parentElement; 
  const errorMessageElement = formControl.querySelector('.form-error');
  errorMessageElement.innerText = message;
  formControl.className = 'formData error';
}

function setSuccessFor(input) {
  const formControl = input.parentElement;
  const errorMessageElement = formControl.querySelector('.form-error');
  errorMessageElement.innerText = "";
  formControl.className = 'formData';
}