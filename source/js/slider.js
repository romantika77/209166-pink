"use strict";

var btn__prev = document.querySelector('.reviews__button--prev'),
    btn__next = document.querySelector('.reviews__button--next');
var slides = document.querySelectorAll('.reviews__item');
var i = 0;
btn__prev.onclick = function(){
    slides[i].id = "";
    i--;
    if(i < 0) {
      i = slides.length - 1;
    }
    slides[i].id = "show";
};

btn__next.onclick = function(){
  slides[i].id = "";
  i++;
  if(i >= slides.length) {
    i = 0;
  }
  slides[i].id = "show";
};
