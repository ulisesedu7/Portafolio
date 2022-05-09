const hamburger = document.querySelector('#nav-bar-btn');
const navMenu = document.querySelector('.mobile-menu');
const mainLogo = document.querySelector('#main-logo');
const headerB = document.querySelector('#mobile-header');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
  mainLogo.classList.toggle('is-hidden');
  headerB.classList.toggle('header-b');
});
