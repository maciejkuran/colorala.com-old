'use strict';

/////////////////////////////////////////////////
////COLOR PICKERS FOR COLOR PALETTE GENERATOR

//Displaying color pickr functionality in DOM
const pickerPlacementsHTML = document.querySelectorAll('.clr-picker-placement');

export const insertClrPickers = () => {
  pickerPlacementsHTML.forEach(label => {
    const colorPicker = document.createElement('button');
    label.after(colorPicker);

    const pickr = Pickr.create({
      el: colorPicker,
      theme: 'classic',

      appClass: 'color-picker-custom-class',

      components: {
        preview: true,
        opacity: false,
        hue: true,

        interaction: {
          hex: false,
          rgba: false,
          hsla: false,
          hsva: false,
          cmyk: false,
          input: true,
          clear: false,
          save: true,
        },
      },

      i18n: {
        'btn:save': 'PICK 😀',
      },
    });
  });
};

insertClrPickers();

//Setting attributes
const pickrDivs = document.querySelectorAll('.pickr');

const setAttributes = () => {
  pickrDivs.forEach(div => {
    div.classList.add('action-button');
    div.setAttribute('data-tooltip', 'Color Picker');
  });
};

setAttributes();

//-----Color Palette Generator--------
//Applying color to DOM from color picker
const saveBtns = document.querySelectorAll('.pcr-save');
const results = document.querySelectorAll('.pcr-result');
const colorItems = document.querySelectorAll('.color');
const HEXlabels = document.querySelectorAll('.hex-label');
const copyHEXbtn = document.querySelectorAll('.copy-hex-btn');
const addToPaletteBtns = document.querySelectorAll('.add-to-palette-btn');

const applyColorFromPicker = e => {
  let target = e.target;
  let hex = target.parentElement.children[0].value;
  let clickedIndex = [...saveBtns].map(btn => [...saveBtns].indexOf(target))[0];

  if (!colorItems[clickedIndex]) return;

  if (!colorItems[clickedIndex].classList.contains('locked')) {
    colorItems[clickedIndex].style.backgroundColor = hex;
    HEXlabels[clickedIndex].textContent = hex;
  } else {
    colorItems[clickedIndex].style.backgroundColor = ' ';
  }
};

saveBtns.forEach(btn => btn.addEventListener('click', applyColorFromPicker));

//---------WCP - Website Color Preview---------------
//Hiding picker when user scrolls
const pickerContainers = document.querySelectorAll('.pcr-app');
const settingsContainer = document.querySelector('.wcp-settings-container');

let prevScroll;
const hidePicker = e => {
  let target = e.target;
  let curScroll = target.scrollTop;

  if (curScroll > prevScroll || curScroll < prevScroll) {
    pickerContainers.forEach(cont => {
      if (cont.classList.contains('visible')) {
        cont.classList.remove('visible');
      }
    });
  }

  prevScroll = curScroll;
};

settingsContainer?.addEventListener('scroll', hidePicker);

//Setting color from manual picker - selected color will be displayed in the input field
const hexInputs = document.querySelectorAll('.hex-code-input');
import { changeElColor } from './main_3.js';

const applyColorToWCP = e => {
  let target = e.target;
  let hex = target.parentElement.children[0].value;
  let clickedIndex = [...saveBtns].map(btn => [...saveBtns].indexOf(target))[0];
  if (hexInputs[clickedIndex] && hexInputs) hexInputs[clickedIndex].value = hex;

  //prettier-ignore
  let classname = hexInputs[clickedIndex]?.parentElement.parentElement.dataset.classname;
  //prettier-ignore
  let styleProperty = hexInputs[clickedIndex]?.parentElement.parentElement.dataset.styleproperty;

  //Change elements color in DOM
  changeElColor(hexInputs[clickedIndex]?.value, classname, styleProperty);
};

saveBtns.forEach(btn => btn.addEventListener('click', applyColorToWCP));

//Close library containers if color picker is clicked, also remove active class from library btn icon
const pickerBtns = document.querySelectorAll('.pcr-button');
const libraryContainers = document.querySelectorAll(
  '.wcp-my-library-container'
);

const closeLibraryIfPicker = e => {
  const heartIcons = document.querySelectorAll('.fa-heart-circle-plus');

  if (libraryContainers) {
    libraryContainers.forEach(cont => cont.classList.add('hide'));
    heartIcons.forEach(heart => heart.classList.remove('icon-active'));
  }
};

pickerBtns.forEach(btn => btn.addEventListener('click', closeLibraryIfPicker));
