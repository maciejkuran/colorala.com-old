'use strict';

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
const unlockedBtns = document.querySelectorAll('.ri-lock-unlock-fill');
const colorAreas = document.querySelectorAll('.color');

const lockColor = () => {
  lockUnlockColorBtns.forEach((button, i) => {
    button.addEventListener('click', function (e) {
      if (unlockedBtns[i].className === 'ri-lock-unlock-fill') {
        unlockedBtns[i].classList.replace(
          'ri-lock-unlock-fill',
          'ri-lock-fill'
        );
        colorAreas[i].classList.replace('unlocked', 'locked');
      } else {
        unlockedBtns[i].classList.replace(
          'ri-lock-fill',
          'ri-lock-unlock-fill'
        );
        colorAreas[i].classList.replace('locked', 'unlocked');
      }
    });
  });
};

lockColor();

//Generate colors in DOM
const generateColors = () => {
  const colorAreas = document.querySelectorAll('.color');
  const unlockIcons = document.querySelectorAll('.ri-lock-unlock-fill');
  let randomColor = '';

  colorAreas.forEach((area, i) => {
    if (colorAreas[i].classList.contains('unlocked')) {
      addToPaletteBtns[i].classList.remove('heart-animation');
      randomColor = RGBtoHEX();

      area.style.backgroundColor = randomColor;
      hexLabels[i].textContent = randomColor;
      addToPaletteBtns[i].style.color = '#42445a';
      confirmationLabels[i].style.display = 'none';
    } else {
      randomColor = ' ';
      area.style.backgroundColor = ' ';
    }
  });
  removingHighlightremoveBtns(copyHEXbtns);
};

//Event handlers for generating colors
const generateColorsBtn = document.querySelectorAll('.generate-colors-btn');

//btns on click
generateColorsBtn.forEach(btn => {
  btn.addEventListener('click', function (e) {
    generateColors();
  });
});

//on DOMContentLoaded
document.addEventListener('DOMContentLoaded', function () {
  const bodyAppContainer = document.querySelector('.body-app-container');
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

////IMPLEMENTING INFO-POPUPS ON 'MOUSEHOOVER'
const addToPaletteBtns = document.querySelectorAll('.add-to-palette-btn');
const addToPaletteLabels = document.querySelectorAll(
  '.add-color-to-palette-label'
);

const colorPickerBtns = document.querySelectorAll('.pcr-button');
const colorPickerLabels = document.querySelectorAll(
  '.manual-color-picker-label'
);

const lockUnlockColorLabels = document.querySelectorAll(
  '.lock-unlock-color-label'
);

const mediaQueryMobile = window.matchMedia('(max-width: 700px)');

const showInfoPopups = (buttons, labels) => {
  buttons.forEach((btn, i) => {
    btn.addEventListener('mouseover', function (e) {
      if (buttons[i] && !mediaQueryMobile.matches) {
        labels[i].style.display = 'flex';
      }
      setTimeout(() => {
        labels[i].style.display = 'none';
      }, 700);
    });
  });
};

showInfoPopups(addToPaletteBtns, addToPaletteLabels);
showInfoPopups(colorPickerBtns, colorPickerLabels);
showInfoPopups(lockUnlockColorBtns, lockUnlockColorLabels);

////COPY TO CLIPBOARD
const copyHEXbtns = document.querySelectorAll('.copy-hex-btn');
const hexLabels = document.querySelectorAll('.hex-label');

//General copy function
const copyToClipboard = text => {
  if (navigator.clipboard) {
    return navigator.clipboard.writeText(text);
  }
};

//removing highlighted copy btn (when new copy btn is clicked, all previous are removed)
const removingHighlightremoveBtns = buttons => {
  buttons.forEach(btn => {
    btn.style.color = '#1A3253';
  });
};

//copy to clipboard with DOM
const copyHEX = () => {
  copyHEXbtns.forEach((btn, i) => {
    btn.addEventListener('click', e => {
      const copyHEXMyPaletteBtns = document.querySelectorAll(
        '.copy-hex-my-palette-btn'
      );

      removingHighlightremoveBtns(copyHEXMyPaletteBtns);
      removingHighlightremoveBtns(copyHEXbtns);
      if (btn.className === `copy-hex-btn copy-hex-btn${i + 1}`) {
        copyToClipboard(hexLabels[i].textContent);
        setTimeout(() => {
          btn.style.color = '#54E98A';
        }, 0);
      }
    });
  });
};
copyHEX();

////NAV ELEMENTS - DISPLAYING / HIDING
const howItWorks = document.querySelector('.how-it-works-open');
const myPalette = document.querySelector('.my-palette-open');

const howItWorksContent = document.querySelector('.how-it-works-info');
const myPaletteContent = document.querySelector('.my-palette');
const overlayModal = document.querySelector('.overlay-modal');
const closeBtn = document.querySelectorAll('.close');

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
howItWorks.addEventListener('click', e => {
  e.preventDefault();
  displayContent(howItWorksContent, overlayModal);
});
myPalette.addEventListener('click', e => {
  e.preventDefault();
  displayContent(myPaletteContent, overlayModal);
});
//CLosing on buttons click
closeBtn.forEach(btn => {
  btn.addEventListener('click', e => {
    hideContent(howItWorksContent, overlayModal);
    hideContent(myPaletteContent, overlayModal);
  });
});
//Closing on overlay click
overlayModal.addEventListener('click', e => {
  hideContent(howItWorksContent, overlayModal);
  hideContent(myPaletteContent, overlayModal);
});

////ADDING COLOR TO MY PALETTE

//Implementing counter
const counter = () => {
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

const insertDynamicElements = content => {
  const colorWrapper = document.createElement('div');
  colorWrapper.classList.add('color-wrapper-my-palette');

  const firstChild = document.createElement('div');
  firstChild.classList.add('color-my-palette');
  firstChild.style.backgroundColor = content;
  colorWrapper.prepend(firstChild);

  const secondChild = document.createElement('div');
  secondChild.classList.add('divider-my-palette');
  const pTag = document.createElement('p');
  pTag.classList.add('label-hex-code-my-palette');
  pTag.innerHTML = content;
  const copyBtn = document.createElement('button');
  copyBtn.classList.add('copy-hex-my-palette-btn');
  copyBtn.innerHTML = '<i class="fa-solid fa-copy off-pointer-event"></i>';
  secondChild.prepend(pTag);
  secondChild.append(copyBtn);
  colorWrapper.append(secondChild);

  const removeBtn = document.createElement('button');
  removeBtn.classList.add('remove-color-my-palette-btn');
  // removeBtn.innerHTML = '<i class="fa-solid fa-x off-pointer-event"></i>';
  removeBtn.innerHTML =
    '<i class="ri-close-circle-line off-pointer-event"></i>';
  colorWrapper.append(removeBtn);
  myPaletteLibrary.prepend(colorWrapper);
};

const confirmationLabels = document.querySelectorAll(
  '.added-to-palette-confirmation-label'
);

const addColorToPalette = () => {
  addToPaletteBtns.forEach((btn, i) => {
    addToPaletteBtns[i].addEventListener('click', e => {
      addToPaletteBtns[i].classList.add('heart-animation');
      if (addToPaletteBtns[i].classList.contains('heart-animation')) {
        confirmationLabels[i].style.display = 'inline';

        insertDynamicElements(hexLabels[i].textContent);
        saveToLocalStorage(hexLabels[i].textContent);
        hexCopy();
        removeAnimation();
      }

      if (counter() === 1) {
        colorCounterLabel.textContent = `${counter()} color in your library! 😀`;
      } else if (counter() > 1) {
        colorCounterLabel.textContent = `${counter()} colors in your library! 😀`;
      }
    });
  });
};

addColorToPalette();

//Removing added to palette animation
const removeAnimation = () => {
  colorAreas.forEach((area, i) => {
    setTimeout(() => {
      confirmationLabels.forEach(label => {
        label.style.display = 'none';
      });
      addToPaletteBtns.forEach(btn => {
        btn.classList.remove('heart-animation');
      });
    }, 3000);
  });
};

////REMOVING COLOR FROM PALETTE
const deleteItemFromPalette = e => {
  e.stopPropagation();

  const btn = e.target;
  const container = btn.parentElement;

  if (btn.className === 'remove-color-my-palette-btn') {
    container.remove();
    removeFromLocalStorage(container);
  }

  if (counter() === 0) {
    colorCounterLabel.textContent = `${counter()} colors in your library! 😌`;
  } else {
    colorCounterLabel.textContent = `${counter()} colors in your library! 😀`;
  }
};

// Event handler
myPaletteContent.addEventListener('click', deleteItemFromPalette);

////COPY TO CLIPBOARD - MY PALETTE COLORS
const hexCopy = () => {
  const copyHEXMyPaletteBtns = document.querySelectorAll(
    '.copy-hex-my-palette-btn'
  );
  const hexLabelsMyPalette = document.querySelectorAll(
    '.label-hex-code-my-palette'
  );

  copyHEXMyPaletteBtns.forEach((btn, i) => {
    btn.addEventListener('click', e => {
      removingHighlightremoveBtns(copyHEXbtns);
      removingHighlightremoveBtns(copyHEXMyPaletteBtns);
      e.stopPropagation();

      if (copyHEXMyPaletteBtns[i]) {
        copyToClipboard(hexLabelsMyPalette[i].textContent);
        copyHEXMyPaletteBtns[i].style.color = '#54E98A';
      }
    });
  });
};

////LOCAL STORAGE
//Saving data to local storage
const saveToLocalStorage = color => {
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
    hexCopy();

    if (counter() === 1) {
      colorCounterLabel.textContent = `${colors.length} color in your library! 😀`;
    } else if (counter() > 1) {
      colorCounterLabel.textContent = `${colors.length} colors in your library! 😀`;
    }
  });
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
