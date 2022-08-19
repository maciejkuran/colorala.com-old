//////////////PRE-MADE-COLOR-PALETTES

'use strict';

import { palettes } from './pre-made-palettes.js';
import { insertDynamicElements } from './main_1.js';
import { checkData } from './main_1.js';
import { saveToLocalStorage } from './main_1.js';
import { displayStatus } from './main_1.js';
import { hideStatus } from './main_1.js';
import { highlightHeart } from './main_1.js';
import { counter } from './main_1.js';
import { displayCounter } from './main_1.js';
import { copyToClipboard } from './main_1.js';
import { copyHEXfromPalette } from './main_1.js';

////Inserting palettes to DOM;
const palettesContainer = document.querySelector(
  '.pre-made-palettes-container'
);

const insertPalettes = allPalettes => {
  allPalettes.forEach(pal => {
    const palette = document.createElement('div');
    palette.classList.add('pre-made-palette');

    pal.colors.forEach(color => {
      const div = document.createElement('div');
      div.classList.add('single-color-container');
      div.style.backgroundColor = `${color}`;
      div.innerHTML = `<div class="single-color-internal-wrapper">
      <p class="hex-label">${color}</p>
      <button class="copy-hex-btn">
        <i class="fa-solid fa-copy copy-icon"></i>
      </button>
      <button class="add-pre-clr-to-palette-btn">
        <i class="fa-solid fa-heart heart"></i>
      </button>
    </div>`;
      palette.append(div);
      palettesContainer.append(palette);
    });
  });
};

insertPalettes(palettes);

////Show and hide bar (hex code and btns) on single palette's color hover

const initBar = () => {
  const singleColorContainer = document.querySelectorAll(
    '.single-color-container'
  );

  const showBar = e => {
    let target = e.target;
    let bar = e.target.children[0];

    if (!target) return;

    if (target && bar) {
      bar.classList.add('single-color-internal-wrapper-active');
    }
  };

  const bars = document.querySelectorAll('.single-color-internal-wrapper');

  const hideBar = () => {
    bars.forEach(bar =>
      bar.classList.remove('single-color-internal-wrapper-active')
    );
  };

  singleColorContainer.forEach(container => {
    container.addEventListener('mouseenter', showBar);
  });

  singleColorContainer.forEach(container => {
    container.addEventListener('mouseleave', hideBar);
  });
};
initBar();

////Add color to palette
const addToPaletteBtns = document.querySelectorAll(
  '.add-pre-clr-to-palette-btn'
);

const addColorToPalette = btns => {
  btns.forEach(btn => {
    //prettier-ignore
    btn.addEventListener('click',e => {
        let getHEX = e.target.previousElementSibling.previousElementSibling.textContent;
       let heart = e.target.children[0];
      checkData(getHEX);
      highlightHeart(heart)
      displayCounter();
      copyHEXfromPalette();
      },
    );
  });
};

addColorToPalette(addToPaletteBtns);

////Copy to clipboard
const initCopying = () => {
  const copyBtns = document.querySelectorAll('.copy-hex-btn');
  const copiedLabel = document.querySelector('.copied-to-clipboard-label');

  const copyHEX = e => {
    let target = e.target;
    let hex = e.target.previousElementSibling.textContent;
    copyToClipboard(hex);
    displayStatus(copiedLabel, 'copied-to-clipboard-label-active');
  };

  copyBtns.forEach(btn => btn.addEventListener('click', copyHEX));
};

initCopying();

////Filtering palettes
const filterBtns = document.querySelectorAll('.filter-btn');

//Updating 'add to palettes btns' in DOM and adding to palette functionality
const updatePaletteBtns = () => {
  const addToPaletteBtns = document.querySelectorAll(
    '.add-pre-clr-to-palette-btn'
  );
  addColorToPalette(addToPaletteBtns);
};

//Removing all before displaying filtered ones
const removePalettes = () => {
  const allPalettes = document.querySelectorAll('.pre-made-palette');
  allPalettes.forEach(pal => pal.remove());
};

const filterPalettes = e => {
  let target = e.target;
  filterBtns.forEach(btn => btn.classList.remove('active-filter-btn'));

  removePalettes();

  target.classList.add('active-filter-btn');
  let tagName = e.target.textContent;

  const filteredPalettes = palettes.filter(arr => arr.type.includes(tagName));
  insertPalettes(filteredPalettes);

  initFunctionality();
};

const initFunctionality = () => {
  initBar();
  updatePaletteBtns();
  initCopying();
  copyHEXfromPalette();
};

filterBtns.forEach(btn => btn.addEventListener('click', filterPalettes));
