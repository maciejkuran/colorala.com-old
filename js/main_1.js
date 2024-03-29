'use strict';

// -> home page smooth scrolling to section-1
const whatsNewBtn = document.querySelector('.whatsNewBtn');
const section1 = document.querySelector('.home-section-1');

const scrollIntoSection = () => {
  if (whatsNewBtn) {
    whatsNewBtn.addEventListener('click', e => {
      e.preventDefault();
      section1.scrollIntoView({ behavior: 'smooth' });
    });
  }
};

scrollIntoSection();

///////////COLOR PALETTES GENERATOR

////GENERATING RANDOM NUMBER - functions
const randomNb = (min, max) => {
  return Math.trunc(Math.random() * (max - min) + 1);
};

// Random RGB color - returning full RGB
const randomRGB = () => {
  return `rgb(${randomNb(0, 250)},${randomNb(0, 250)},${randomNb(0, 250)})`;
};

// Random RGB color - returning array with RGB numbers
const randomRGBNumbs = () => {
  return [randomNb(0, 250), randomNb(0, 250), randomNb(0, 250)];
};

//RGB to HEX Converter
const RGBtoHEX = () => {
  const RGB = randomRGBNumbs();
  const HEX = RGB.map(nb => {
    const number = nb.toString(16);
    return number.length === 1 ? number + 0 : number;
  });

  return `#${HEX.join('').toUpperCase()}`;
};

////IMPLEMENTING LOCK/UNLOCK COLOR FUNCTIONALITY
const lockUnlockColorBtns = document.querySelectorAll('.lock-unlock-color-btn');

const lockColor = e => {
  let target = e.target;

  let grandParent = e.target.parentElement.parentElement;
  let targetIcon = target.children[0];

  if (targetIcon.className === 'ri-lock-unlock-fill') {
    targetIcon.classList.replace('ri-lock-unlock-fill', 'ri-lock-fill');
    grandParent.classList.add('locked');
  } else {
    targetIcon.classList.replace('ri-lock-fill', 'ri-lock-unlock-fill');
    grandParent.classList.remove('locked');
  }
};

lockUnlockColorBtns.forEach(btn => btn.addEventListener('click', lockColor));

//Generate colors in DOM
const generateColors = () => {
  const colorAreas = document.querySelectorAll('.color');
  let randomColor = '';

  colorAreas.forEach((area, i) => {
    if (!colorAreas[i].classList.contains('locked')) {
      randomColor = RGBtoHEX();

      area.style.backgroundColor = randomColor;
      hexLabels[i].textContent = randomColor;
    } else {
      randomColor = ' ';
      area.style.backgroundColor = ' ';
    }
  });
};

//Event handlers for generating colors
const generateColorsBtn = document.querySelectorAll('.generate-colors-btn');

//btns on click - mobile and desktop
generateColorsBtn.forEach(btn => btn.addEventListener('click', generateColors));

//on DOMContentLoaded - fixing scripts loading issues that caused colors jumping etc.
document.addEventListener('DOMContentLoaded', function () {
  const bodyAppContainer = document.querySelector('.body-app-container');

  if (!bodyAppContainer) return;
  setTimeout(() => {
    //Load everything on delay
    bodyAppContainer.style.opacity = '1';
    generateColors();
  }, 100);
});

//Blurring buttons (if user presses space, lock/unlock btns will be blurred so can't toggle - fixed bug)
const blurBtns = btns => {
  btns.forEach(btn => {
    btn.blur();
  });
};

//on space button
document.addEventListener('keydown', e => {
  blurBtns(lockUnlockColorBtns);
  blurBtns(copyHEXbtns);
  blurBtns(addToPaletteBtns);
  blurBtns(generateColorsBtn);
  if (e.code === 'Space') {
    generateColors();
  }
});

////IMPLEMENTING TOOLTIPS ON 'MOUSEHOOVER' OVER BTNS

export const initTooltip = () => {
  const actionBtns = document.querySelectorAll('.action-button');
  const divTooltip = document.querySelector('.div-tooltip');
  const mediaQueryMobile = window.matchMedia('(max-width: 700px)');

  let run;
  const showTooltip = e => {
    divTooltip.style.display = 'none';
    let target = e.target;
    let targetAttr = target.dataset.tooltip;
    //Target coords
    let targetTop = target.getBoundingClientRect().top + 'px';
    let targetLeft = target.getBoundingClientRect().left + 30 + 'px';
    //Let div tooltip display targetAttribute and add styles to it
    // tooltip is displayed with delay
    run = setTimeout(() => {
      if (!mediaQueryMobile.matches && divTooltip) {
        divTooltip.textContent = targetAttr;
        divTooltip.style.top = targetTop;
        divTooltip.style.left = targetLeft;
        divTooltip.style.display = 'inline';
      }
    }, 700);
  };
  //clear timeout if 'mouseleave' and set back style
  const hideTooltip = e => {
    clearTimeout(run);
    setTimeout(() => {
      divTooltip.style.display = 'none';
    }, 0);
  };

  actionBtns.forEach(btn => btn.addEventListener('mouseenter', showTooltip));

  actionBtns.forEach(btn => btn.addEventListener('mouseleave', hideTooltip));
};

initTooltip();

////COPY TO CLIPBOARD
const copyHEXbtns = document.querySelectorAll('.copy-hex-btn');
const hexLabels = document.querySelectorAll('.hex-label');
const copiedLabel = document.querySelector('.copied-to-clipboard-label');

//General copy function
export const copyToClipboard = text => {
  if (navigator.clipboard) {
    return navigator.clipboard.writeText(text);
  }
};

//Copy to clipboard DOM
const copyHEX = e => {
  let target = e.target;
  let hex = target.previousElementSibling.textContent;

  copyToClipboard(hex);
  displayStatus(copiedLabel, 'copied-to-clipboard-label-active');
};

copyHEXbtns.forEach(btn => btn.addEventListener('click', copyHEX));

////NAV ELEMENTS - DISPLAYING / HIDING
const myPalette = document.querySelector('.my-palette-open');

const myPaletteContent = document.querySelector('.my-palette');
const overlayModal = document.querySelector('.overlay-modal');
const closeBtn = document.querySelectorAll('.close');

const toolsBtn = document.querySelector('.tools-popup-btn');
const toolsContainer = document.querySelector('.tools-container');
const arrowDownIcon = document.querySelector('.arrow-down-icon');

//Displaying content
const displayContent = (el, el2) => {
  el.classList.remove('hide');
  el2.classList.remove('hide');
  overlayModal.style.pointerEvents = 'all';
};

//hiding content
const hideContent = (el, el2) => {
  el.classList.add('hide');
  el2.classList.add('hide');
};

// Event handlers on nav btns
myPalette.addEventListener('click', e => {
  e.preventDefault();
  toolsContainer.classList.add('hide');
  displayContent(myPaletteContent, overlayModal);
});
//CLosing on buttons click
closeBtn.forEach(btn => {
  btn.addEventListener('click', e => {
    hideContent(myPaletteContent, overlayModal);
  });
});
//Closing on overlay click
overlayModal.addEventListener('click', e => {
  hideContent(myPaletteContent, overlayModal);
});

//Toggling tools container
toolsBtn.addEventListener('click', e => {
  e.preventDefault();
  e.stopPropagation();
  toolsContainer.classList.toggle('hide');
  arrowDownIcon.classList.toggle('arrow-down-icon-red');
});

document.querySelector('body').addEventListener('click', e => {
  e.stopPropagation();
  toolsContainer.classList.add('hide');
  arrowDownIcon.classList.remove('arrow-down-icon-red');
});

////ADDING COLOR TO MY PALETTE
const addToPaletteBtns = document.querySelectorAll('.add-to-palette-btn');

//Implementing counter
export const counter = () => {
  const labelsMyPalette = document.querySelectorAll(
    '.label-hex-code-my-palette'
  );
  const arr = [];
  labelsMyPalette.forEach(label => {
    arr.push(label.textContent);
  });
  return arr.length;
};

// Adding color to palette functionality
const myPaletteLibrary = document.querySelector('.colors-container-my-palette');
const colorCounterLabel = document.querySelector('.my-palette-label-counter');

export const insertDynamicElements = content => {
  ////////
  const colorWrapper = document.createElement('div');
  colorWrapper.classList.add('color-wrapper-my-palette');
  colorWrapper.innerHTML = `
    <div
          class="color-my-palette"
          style="background-color: ${content}"
        ></div>
        <div class="divider-my-palette">
          <p class="label-hex-code-my-palette">${content}</p>
          <button class="copy-hex-my-palette-btn">
            <i class="fa-solid fa-copy off-pointer-event"></i>
          </button>
        </div>
        <button class="remove-color-my-palette-btn">
          <i class="ri-close-circle-line off-pointer-event"></i>
        </button>
  `;

  myPaletteLibrary.prepend(colorWrapper);
};

//Display counter in DOM
export const displayCounter = () => {
  if (counter() === 0)
    colorCounterLabel.textContent = `${counter()} colors in your library! 😌`;

  if (counter() === 1)
    colorCounterLabel.textContent = `${counter()} color in your library! 😀`;

  if (counter() > 1)
    colorCounterLabel.textContent = `${counter()} colors in your library! 😀`;
};

const addColorToPalette = btns => {
  btns.forEach(btn => {
    btn.addEventListener('click', e => {
      let getHEX =
        e.target.parentElement.previousElementSibling.children[0].textContent;

      let heartIcon = Array.from(e.target.children)[0];
      highlightHeart(heartIcon);
      checkData(getHEX);
      displayCounter();
      copyHEXfromPalette();
    });
  });
};

addColorToPalette(addToPaletteBtns);

//Checking if recently added color already exists in the palette. If yes, do not add to palette and display error message
const addedConfirmationLabel = document.querySelector(
  '.added-to-palette-confirmation-label'
);
const addedErrorLabel = document.querySelector('.added-to-palette-error-label');

export const checkData = hex => {
  let data;
  if (localStorage.getItem('myPalette') === null) {
    data = [];
  } else {
    data = JSON.parse(localStorage.getItem('myPalette'));
  }

  if (data.indexOf(hex) === -1 || data === '[]') {
    insertDynamicElements(hex);
    saveToLocalStorage(hex);
    displayStatus(
      addedConfirmationLabel,
      'added-to-palette-confirmation-label-active'
    );
  }
  if (data.indexOf(hex) > -1)
    displayStatus(addedErrorLabel, 'added-to-palette-error-label-active');
};

//Displaying status message when added to palette
export const displayStatus = (el, classname) => {
  const display = setTimeout(() => {
    el.classList.add(classname);
  }, 100);

  hideStatus(el, classname);
};

export const hideStatus = (el, classname) => {
  const hide = setTimeout(() => {
    el.classList.remove(classname);
  }, 700);
};

//Highlighting heart when clicked on btn
export const highlightHeart = el => {
  const setHighlight = setTimeout(() => {
    el.classList.add('heart-highlight');
  }, 100);

  setTimeout(() => {
    document
      .querySelectorAll('.heart')
      .forEach(heart => heart.classList.remove('heart-highlight'));
  }, 1000);
};

////REMOVING COLOR FROM PALETTE
import { updateWCPLibraries } from './main_3.js';
import { informIfNoColors, getColors } from './main_3.js';

const deleteItemFromPalette = e => {
  e.stopPropagation();

  const btn = e.target;
  const container = btn.parentElement;

  if (btn.className === 'remove-color-my-palette-btn') {
    //This function updates 'colors in library setting' - WCP
    updateWCPLibraries(btn);
    ////////////////
    container.remove();
    removeFromLocalStorage(container);
  }
  displayCounter();
  //WCP - Website Color Preview
  informIfNoColors(getColors());
};

// Event handler
myPaletteContent.addEventListener('click', deleteItemFromPalette);

////COPY TO CLIPBOARD - MY PALETTE COLORS
//prettier-ignore
export const copyHEXfromPalette = e => {
  const copyHEXMyPaletteBtns = document.querySelectorAll(
    '.copy-hex-my-palette-btn'
  );

  copyHEXMyPaletteBtns.forEach(btn =>
    btn.addEventListener('click', e => {
      let hex = e.target.previousElementSibling.textContent;
      copyToClipboard(hex);
      displayStatus(copiedLabel, 'copied-to-clipboard-label-active' )
    })
  );
};

////LOCAL STORAGE
//Saving data to local storage
export const saveToLocalStorage = color => {
  let colors;
  if (localStorage.getItem('myPalette') === null) {
    colors = [];
  } else {
    colors = JSON.parse(localStorage.getItem('myPalette'));
  }

  colors.push(color);
  localStorage.setItem('myPalette', JSON.stringify(colors));
};

//Retreiving data from local storage
const getFromLocalStorage = () => {
  let colors;
  if (localStorage.getItem('myPalette') === null) {
    colors = [];
  } else {
    colors = JSON.parse(localStorage.getItem('myPalette'));
  }

  colors.forEach(color => {
    insertDynamicElements(color);
    displayCounter();
  });

  copyHEXfromPalette();
};

document.addEventListener('DOMContentLoaded', getFromLocalStorage);

//Removing from local storage
const removeFromLocalStorage = container => {
  let colors;

  if (localStorage.getItem('myPalette') === null) {
    colors = [];
  } else {
    colors = JSON.parse(localStorage.getItem('myPalette'));
  }

  const containerIndex = container.children[1].children[0].textContent;
  colors.splice(colors.indexOf(containerIndex), 1);
  localStorage.setItem('myPalette', JSON.stringify(colors));
};

////EXPORTING MY PALETTE TO PDF
import { generatePDF } from './generate-pdf.js';

generatePDF();
