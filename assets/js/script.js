'use strict';

/**
 * navbar toggle
 */

const overlay = document.querySelector("[data-overlay]");
const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbar = document.querySelector("[data-navbar]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");
const navLinks = document.querySelectorAll("[data-nav-link]");

const card=document.querySelector(".good");
const sir=document.querySelector(".himachall");
const bila=document.querySelector(".bilaspur");
const man=document.querySelector(".mandi");
const una=document.querySelector(".una");
const hamir=document.querySelector(".hamirpur");
const cba=document.querySelector(".chamba");
const sol=document.querySelector(".solan");
const kullu=document.querySelector(".kullu");
const shimla=document.querySelector(".shimla");
const kinnaur=document.querySelector(".kinnaur");
const kangra=document.querySelector(".kangra");
const aboutus=document.querySelector(".about");
const contact=document.querySelector("#good");



aboutus.onclick=function(){
location.assign('./About.html')

}
contact.onclick=function(){
  window.scrollTo(0, document.body.scrollHeight);
}


card.onclick=function(){
  location.assign('./himachall.html');
}

sir.onclick=function(){
  
  location.assign('./himachal.html');
}

bila.onclick=function(){
  location.assign('./bilaspurimg.html');
}
man.onclick=function(){
  location.assign('./mandiimg.html');
}
una.onclick=function(){
  location.assign('./unaimg.html');

}

hamir.onclick=function(){
  location.assign('./hamirpurimg.html');
}


cba.onclick=function(){
  location.assign('./himachall.html');

}
sol.onclick=function(){
  location.assign('./andhrapradesh.html');

}
kullu.onclick=function(){
  location.assign('./tamilnadu.html');

}
shimla.onclick=function(){
  location.assign('./bihar.html');
}

kinnaur.onclick=function(){
  location.assign('./gujrat.HTML');
}

kangra.onclick=function(){
  location.assign('./karnataka.html');
  
}













const navElemArr = [navOpenBtn, navCloseBtn, overlay];

const navToggleEvent = function (elem) {
  for (let i = 0; i < elem.length; i++) {
    elem[i].addEventListener("click", function () {
      navbar.classList.toggle("active");
      overlay.classList.toggle("active");
    });
  }
}

navToggleEvent(navElemArr);
navToggleEvent(navLinks);



/**
 * header sticky & go to top
 */

const header = document.querySelector("[data-header]");
const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {

  if (window.scrollY >= 200) {
    header.classList.add("active");
    goTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    goTopBtn.classList.remove("active");
  }

});


