const hamburger = document.querySelector('#nav-bar-btn');
const navMenu = document.querySelector('.mobile-menu');
const mainLogo = document.querySelector('#main-logo');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
  mainLogo.classList.toggle('is-hidden');
});
