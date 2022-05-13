/*
JS Object Data
*/
import projectInfo from './data.js';

/*
Hamburguer Menu constants
*/
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
Create HTML dynamically
*/
function genProjectTechMarkUp(technologies) {
  const projectTechsListMarkup = `
    <ul class="display-flex">
      ${technologies.reduce(
    (acc, tech) => `${acc}<li class="card-work-item">${tech}</li>`,
    '',
  )}
    </ul>
  `;
  return projectTechsListMarkup;
}

function genProjectMarkup(projectName, technologies, projectId) {
  const technologiesMarkUp = genProjectTechMarkUp(technologies);
  const projectMarkUp = `<div class="work-card display-flex">
  <div class="work-card-content">
    <h3>${projectName}</h3>
    ${technologiesMarkUp}
    <button type="button" class="main-button project-btn" id=${projectId}>See Project</button>
  </div>
</div>`;
  return projectMarkUp;
}

const projectsMarkUp = projectInfo.reduce((acc, { id, projectName, technologies }) => `${acc}${genProjectMarkup(projectName, technologies, id)}`, '');

const workSection = document.getElementById('portafolio');

workSection.insertAdjacentHTML('beforeend', projectsMarkUp);

/*
Create pop up automatically
*/
function genProjectPopUpMarkUp(
  featureImg,
  projectName,
  technologies,
  description,
  liveBtn,
  sourceBtn,
) {
  const projectPopUpMarkUp = `<div class="mobile-pop display-flex" id="popUp">
  <div id="img-container">
    <img src=${featureImg} alt="image of the project" id="project-img">
    <div id="img-btn">
      <span class="bar"></span>
      <span class="bar"></span>
      <span class="bar"></span>
    </div>
  </div>

  <div class="info-container">
    <h3 id="project-title">${projectName}</h3>
    ${genProjectTechMarkUp(technologies)}
    <p id="project-d">${description}</p>
    <div class="display-flex btn-order">
      <a  id="live-btn" class="main-button" target="_blank" href=${liveBtn}>See Live</a>
      <a  id="source-btn" class="main-button" target="_blank" href=${sourceBtn}>See Source</a>
    </div>
  </div>
</div>`;

  return projectPopUpMarkUp;
}

const projectPop = document.getElementById('project-pop');

/*
Pop Up Window JS code
*/
const btnOpen = document.querySelectorAll('.project-btn');

btnOpen.forEach((n) => n.addEventListener('click', () => {
  const { id } = n;
  const {
    featureImg, projectName, technologies, description, liveBtn, sourceBtn,
  } = projectInfo[id];

  const projectPopUpMarkUp = genProjectPopUpMarkUp(
    featureImg,
    projectName,
    technologies,
    description,
    liveBtn,
    sourceBtn,
  );

  projectPop.insertAdjacentHTML('beforeend', projectPopUpMarkUp);

  projectPop.classList.add('show');

  const btnClose = document.getElementById('img-btn');

  btnClose.addEventListener('click', () => {
    const popUp = document.getElementById('popUp');

    projectPop.classList.remove('show');
    popUp.remove();
  });
}));

/*
Form Validation 2
*/

let emailValid = false;

function validateEmail (){
  const email = document.getElementById('email-form').value;

  let regx = /^([a-z0-9\._]+)@([a-z0-9])+.([a-z]+)(.[a-z]+)?$/;

  if (regx.test(email)) {
    alert ("You have provided a valid email");
    emailValid = true;
    return true;
  } else {
    alert ("You have provided an incorred email");
    emailValid = false;
    return false;
  }
}

const btnSubmit = document.getElementById('form-btn');

btnSubmit.addEventListener('click', () => {
  validateEmail();
});

// Prevent Submission if email is invalid
const mainForm = document.querySelector('#main-form');

mainForm.addEventListener('submit', (event) => {
  // stop form submission
  event.preventDefault();

  if (emailValid == true) {
    mainForm.submit();
  }
});