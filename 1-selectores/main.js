console.log('Hola soy el JS');

const title = document.querySelector('h1')
console.log(title);

title.innerText = 'Aprendemos Selectores con Js';

// const secondTitle = document.querySelector('h2');
// console.log('secondTitle:', secondTitle);

const studyTitle = document.querySelector('#study');
console.log('styudyTitle:', studyTitle);

// const technologies = document.getElementsByClassName('technology')
const technologies = document.querySelectorAll('.technology')
console.log('technologies', technologies);

for (let i = 0; i < technologies.length; i++) {
  const technology = technologies[i];
  const prevText = technology.innerText;
  technology.innerText = `${i + 1} - ${prevText}`
};


const THEPOWER_URL = 'https://app.thepowermba.com/'
const titleLink = document.querySelector('h2.title-link > a');
titleLink.href = THEPOWER_URL;