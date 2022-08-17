'use strict';

import { palettes } from './pre-made-palettes.js';

////Inserting palettes to DOM;
const palettesContainer = document.querySelector(
  '.pre-made-palettes-container'
);

const insertPalettes = () => {
  palettes.forEach(pal => {
    const palette = document.createElement('div');
    palette.classList.add('pre-made-palette');

    pal.colors.forEach(color => {
      const div = document.createElement('div');
      div.classList.add('single-color-container');
      div.style.backgroundColor = `${color}`;
      div.innerHTML = `<div class="single-color-internal-wrapper">
      <p class="hex-label">${color}</p>
      <button class="copy-hex-btn">
        <i class="fa-solid fa-copy"></i>
      </button>
      <button class="add-pre-clr-to-palette-btn">
        <i class="fa-solid fa-heart"></i>
      </button>
    </div>`;
      palette.append(div);
      palettesContainer.append(palette);
    });
  });
};

insertPalettes();

////Show and hide bar (hex code and btns) on single palette's color hover
const singleColorContainer = document.querySelectorAll(
  '.single-color-container'
);

const showBar = e => {
  let target = e.target;
  let bar = e.target.children[0];
  e.stopPropagation();

  if (!target) return;

  if (target && bar) {
    console.log(target);
    bar.classList.add('single-color-internal-wrapper-active');
  }
};

const bars = document.querySelectorAll('.single-color-internal-wrapper');

const hideBar = e => {
  e.stopPropagation();
  bars.forEach(bar =>
    bar.classList.remove('single-color-internal-wrapper-active')
  );
};

singleColorContainer.forEach(container => {
  container.addEventListener('mouseover', showBar);
});

singleColorContainer.forEach(container => {
  container.addEventListener('mouseout', hideBar);
});
