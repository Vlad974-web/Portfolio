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