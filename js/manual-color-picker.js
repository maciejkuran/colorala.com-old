'use strict';

//COLOR-PICKER OBJECTS
//1
const pickr = Pickr.create({
  el: '.color-picker1',
  theme: 'classic',

  appClass: 'color-picker-custom-class',

  components: {
    preview: true,
    opacity: true,
    hue: true,

    interaction: {
      hex: true,
      rgba: true,
      hsla: true,
      hsva: true,
      cmyk: true,
      input: true,
      clear: false,
      save: true,
    },
  },

  i18n: {
    'btn:save': 'PICK 😀',
  },
});

//2
const pickr2 = Pickr.create({
  el: '.color-picker2',
  theme: 'classic',

  appClass: 'color-picker-custom-class',

  components: {
    preview: true,
    opacity: true,
    hue: true,

    interaction: {
      hex: true,
      rgba: true,
      hsla: true,
      hsva: true,
      cmyk: true,
      input: true,
      clear: false,
      save: true,
    },
  },

  i18n: {
    'btn:save': 'PICK 😀',
  },
});

//3
const pickr3 = Pickr.create({
  el: '.color-picker3',
  theme: 'classic',

  appClass: 'color-picker-custom-class',

  components: {
    preview: true,
    opacity: true,
    hue: true,

    interaction: {
      hex: true,
      rgba: true,
      hsla: true,
      hsva: true,
      cmyk: true,
      input: true,
      clear: false,
      save: true,
    },
  },

  i18n: {
    'btn:save': 'PICK 😀',
  },
});

//4
const pickr4 = Pickr.create({
  el: '.color-picker4',
  theme: 'classic',

  appClass: 'color-picker-custom-class',

  components: {
    preview: true,
    opacity: true,
    hue: true,

    interaction: {
      hex: true,
      rgba: true,
      hsla: true,
      hsva: true,
      cmyk: true,
      input: true,
      clear: false,
      save: true,
    },
  },

  i18n: {
    'btn:save': 'PICK 😀',
  },
});

//Applying color to DOM from manual color picker
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

  if (!colorItems[clickedIndex].classList.contains('locked')) {
    colorItems[clickedIndex].style.backgroundColor = hex;
    HEXlabels[clickedIndex].textContent = hex;
  } else {
    colorItems[clickedIndex].style.backgroundColor = ' ';
  }
};

saveBtns.forEach(btn => btn.addEventListener('click', applyColorFromPicker));
