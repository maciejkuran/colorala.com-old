'use strict';

// Media queries - Manipulating DOM elements
const addIntroDivToDOM = () => {
  const mainTag = document.querySelector('.main-app');
  const html = `<div class="intro-app-mobile">
    <h1>Push the <span class="highlight">button</span> to start!</h1>
    <button class="generate-colors-btn">Generate</button>
  </div>`;
  mainTag.insertAdjacentHTML('afterbegin', html);
};

addIntroDivToDOM();

const manipulateDOM = () => {
  const myPaletteNav = document.querySelector('.my-palette-open');
  const introAppDesktop = document.querySelector('.intro-app');
  const introAppMobile = document.querySelector('.intro-app-mobile');

  const mediaQuery = window.matchMedia('(max-width: 700px)');
  if (mediaQuery.matches) {
    myPaletteNav.innerHTML = `<i class="fa-solid fa-heart nav-icon"></i
      >`;

    introAppDesktop.style.display = 'none';
    introAppMobile.style.display = 'flex';
  } else {
    myPaletteNav.innerHTML = `My Palette<i class="fa-solid fa-heart nav-icon"></i
      >`;
    introAppDesktop.style.display = 'flex';
    introAppMobile.style.display = 'none';
  }
};
document.addEventListener('DOMContentLoaded', manipulateDOM);
window.addEventListener('resize', manipulateDOM);
