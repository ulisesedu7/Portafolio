/*
JS Object Data
*/
import projectInfo from "./data.js";

const hamburger = document.querySelector('#nav-bar-btn');
const navMenu = document.querySelector('.mobile-menu');
const mainLogo = document.querySelector('#main-logo');
const headerB = document.querySelector('#mobile-header');

/*
Open Hamburguer menu when the icon is clicked
*/
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
  mainLogo.classList.toggle('is-hidden');
  headerB.classList.toggle('header-b');
});

/*
Close Menu when you click the nav links
*/
document.querySelectorAll('.mobile-link').forEach((n) => n.addEventListener('click', () => {
  hamburger.classList.remove('active');
  navMenu.classList.remove('active');
  mainLogo.classList.remove('is-hidden');
  headerB.classList.remove('header-b');
}));

/*
Pop Up Window JS code 
*/
const popUpMobile = document.querySelector('#project-pop');
const btnOpen = document.querySelectorAll('.project-btn');

btnOpen.forEach((n) => n.addEventListener('click', () => {
  changeContent();
  popUpMobile.classList.add('show');
}));

/*
Close pop up window
*/
const btnClose = document.getElementById('img-btn');

btnClose.addEventListener('click', () => {
  popUpMobile.classList.remove('show');
});

/*
Function to change the content of the Project
*/
function changeContent () {
  document.getElementById('project-title').innerHTML = projectInfo[0].projectName;
};
