// LES EFFETS DE LA BARRE DE NAVIGATION
window.addEventListener("scroll", function(){
  // RECUPERER LA BALISE HEADER
  const header = document.querySelector('header');
  // DONNER LA NOUVELLE CLASE POUR HEADER
  header.classList.toggle('sticky', window.scrollY > 0);
})


// JavaScript du menu de la barre latérale de navigation réactif
const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector(".nav");
const navigationItems = document.querySelectorAll('.nav a');

menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("active");
  nav.classList.toggle("active");
})

navigationItems.forEach((navigationItems) => {
  navigationItems.addEventListener('click', () => {
    menuBtn.classList.remove("active");
    nav.classList.remove("active");
  })
})


// JAVASCRIPT POUR LE BOUTON DE DEFILEMENT VERS LE HAUT
const scrollBtn = document.querySelector('.scrollToTop-btn');

window.addEventListener("scroll", function () {
  scrollBtn.classList.toggle("active", window.scrollY > 500);
})


// JAVASCRIPT POUR FAIRE DEFILER VERS LE HAUT EN CLIQUANT SUR LE BUTTON DE DEFILEMENT VERS LE HAUT
scrollBtn.addEventListener('click', () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
})


//JAVASCRIPT POUR RÉVÉLER LES ÉLÉMENTS DU SITE WEB SUR SCROLL
window.addEventListener('scroll', reveal);

function reveal() {
  var reveals = document.querySelectorAll('.reveal');

  for(var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var revealTop = reveals[i].getBoundingClientRect().top;
    var revealPoint = 50;

    if(revealTop < windowHeight - revealPoint) {
      reveals[i].classList.add('active');
    }
  }
}