// LES EFFETS DE LA BARRE DE NAVIGATION
window.addEventListener("scroll", function(){
  // RECUPERER LA BALISE HEADER
  const header = document.querySelector('header');
  // DONNER LA NOUVELLE CLASE POUR HEADER
  header.classList.toggle('sticky', window.scrollY > 0);
})