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
const backgrounds = document.querySelectorAll('.color');
const HEXlabels = document.querySelectorAll('.hex-label');
const copyHEXbtn = document.querySelectorAll('.copy-hex-btn');
const addToPaletteBtns = document.querySelectorAll('.add-to-palette-btn');

const applyColorFromManual = () => {
  let outputColor = '';
  saveBtns.forEach((btn, i) => {
    btn.addEventListener('click', function (e) {
      if (saveBtns[i] && !backgrounds[i].classList.contains('locked')) {
        outputColor = results[i].value;
        backgrounds[i].style.backgroundColor = outputColor;
        HEXlabels[i].textContent = outputColor;

        copyHEXbtn.forEach(btn => {
          btn.style.color = '#1A3253';
        });
      } else {
        outputColor = ' ';
        backgrounds[i].style.backgroundColor = ' ';
      }
    });
  });
};

applyColorFromManual();
