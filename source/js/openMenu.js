"use strict";

var navMain = document.querySelector(".page-header__navigation");
var navToggle = document.querySelector(".page-header__toggle");
var pageHeader = document.querySelector(".page-header");

navMain.classList.remove("page-header__navigation--nojs");
navToggle.classList.remove("page-header__toggle--nojs");
pageHeader.classList.remove("page-header--nojs");
navToggle.addEventListener("click", function() {
  if (navMain.classList.contains("page-header__navigation--closed") && navToggle.classList.contains("page-header__toggle--opened")) {
    navMain.classList.remove("page-header__navigation--closed");
    navMain.classList.add("page-header__navigation--opened");
    navToggle.classList.remove("page-header__toggle--opened");
    pageHeader.classList.add("page-header--opened");
  } else {
    navMain.classList.add("page-header__navigation--closed");
    navMain.classList.remove("page-header__navigation--opened");
    navToggle.classList.add("page-header__toggle--opened");
    pageHeader.classList.remove("page-header--opened");
  }
});
