const hamburger = document.querySelector("#nav-bar-btn");
const navMenu = document.querySelector(".mobile-menu");

hamburger.addEventListener ("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});