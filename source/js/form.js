"use strict";

(function () {
var modalSuccess = document.querySelector(".modal__ok");
var modalError = document.querySelector(".modal__error");
var buttonSubmit = document.querySelector(".review-form__button");
var name = document.getElementById("name-field");
var surname = document.getElementById("surname-field");
var email = document.getElementById("email-field");
var buttonFault = document.querySelector(".modal__button--fault");
var buttonRepair = document.querySelector(".modal__button--repair");
var storage = localStorage.getItem("surname");

if (buttonSubmit) {
  buttonSubmit.addEventListener("click", function (evt) {
    if (!name.value || !surname.value || !email.value) {
      evt.preventDefault();
      modalError.classList.add("modal--opened");
    } else {
      evt.preventDefault();
      modalSuccess.classList.add("modal--opened");
      localStorage.setItem("surname", surname.value);
    }
  })
};

if (buttonFault) {
  buttonFault.addEventListener("click", function (evt) {
    evt.preventDefault();
    modalError.classList.remove("modal--opened");
  })
};

if (buttonRepair) {
  buttonRepair.addEventListener("click", function (evt) {
    evt.preventDefault();
    modalSuccess.classList.remove("modal--opened");
  })
};

if (storage) {
  surname.value = storage;
  name.focus();
} else {
  surname.focus();
};


})();
