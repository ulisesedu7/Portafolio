// import projectInfo from "data.js";

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
JS Object Data
*/
const project1 = {
  id: 1,
  featureImg: "project-img1",
  projectName: "Project 1",
  technologies: ["Ruby on Rails", "CSS", "HTML", "Javascript"],
  description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
  liveBtn: "https://google.com",
  sourceBtn: "https://google.com"
};

const project2 = {
  id: 2,
  featureImg: "project-img2",
  projectName: "Project 2",
  technologies: ["Ruby on Rails", "CSS", "HTML", "Javascript"],
  description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
  liveBtn: "https://google.com",
  sourceBtn: "https://google.com"
};

const project3 = {
  id: 3,
  featureImg: "project-img2",
  projectName: "Project 3",
  technologies: ["Ruby on Rails", "CSS", "HTML", "Javascript"],
  description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
  liveBtn: "https://google.com",
  sourceBtn: "https://google.com"
};

const project4 = {
  id: 4,
  featureImg: "project-img2",
  projectName: "Project 4",
  technologies: ["Ruby on Rails", "CSS", "HTML", "Javascript"],
  description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
  liveBtn: "https://google.com",
  sourceBtn: "https://google.com"
};

const project5 = {
  id: 5,
  featureImg: "project-img2",
  projectName: "Project 5",
  technologies: ["Ruby on Rails", "CSS", "HTML", "Javascript"],
  description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
  liveBtn: "https://google.com",
  sourceBtn: "https://google.com"
};

const project6 = {
  id: 6,
  featureImg: "project-img2",
  projectName: "Project 6",
  technologies: ["Ruby on Rails", "CSS", "HTML", "Javascript"],
  description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
  liveBtn: "https://google.com",
  sourceBtn: "https://google.com"
};

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
  document.getElementById('project-title').innerHTML = project1.projectName;
};
