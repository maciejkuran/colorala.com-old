'use strict';

/////////'WEBSITE COLORS PREVIEW' functionality

////Creating a class and its instances (for displaying dynamically settings and then finding certain elements in the HTML for user's further modification)
const elements = [];

const Element = class {
  constructor(name, classname, placeholder) {
    this.name = name;
    this.classname = classname;
    this.placeholder = placeholder;

    elements.push(this);
  }
  //encoding 'name' values as they will be inserted in the HTML document
  set name(name) {
    this._name = name.replaceAll('<', '&lt;').replaceAll('>', '&gt;');
  }

  get name() {
    return this._name;
  }

  static addInstance(item) {
    elements.push(item);
  }

  static getInstances() {
    return elements;
  }
};

const element_1 = new Element('<body>', '.user-choice--body', '#E3E3E3');
const element_2 = new Element('<h1>', '.user-choice--h1', '#000000');
const element_3 = new Element('<h2>', '.user-choice--h2', '#000000');
const element_4 = new Element('<h3>', '.user-choice--h3', '#FFFFFF');
const element_5 = new Element('<p>', '.user-choice--p', '#000000');
const element_6 = new Element('<a>', '.user-choice--a', '#000000');
const element_7 = new Element('<header>', '.user-choice--header', '#F2F5F5');
const element_8 = new Element('<button>', '.user-choice--button', '#262626');
//prettier-ignore
const element_9 = new Element('<section>', '.user-choice--section','#262626');
//prettier-ignore
const element_10 = new Element('.p-section', '.user-choice--p-section', '#D1D1D1');
const element_11 = new Element('<div>', '.user-choice--div', '#F2F5F5');
const element_12 = new Element('<i>', '.user-choice--i', '#262626');
const element_13 = new Element('<footer>', '.user-choice--footer', '#262626');

//// Inserting settings to DOM
const settingsContainer = document.querySelector('.wcp-settings-container');

const insertSettings = () => {
  elements.forEach(el => {
    const internalContainer = document.createElement('div');
    internalContainer.classList.add('wcp-setting-internal-container');
    internalContainer.innerHTML = `
    <div data-classname="${el.classname}" class="wcp-setting">
            <p>${el.name}</p>
            <div>
              <input
                class="hex-code-input"
                spellcheck="false"
                type="text"
                placeholder="${el.placeholder}"
              />
              <p class="action-label-info-popup your-palette-label">
                Your palette
              </p>
              <button class="action-button wcp-open-palette-btn">
                <i class="fa-solid fa-heart-circle-plus"></i>
              </button>
              <p class="action-label-info-popup color-picker">Color picker</p>
            </div>
          </div>`;
    settingsContainer.append(internalContainer);
  });
};

insertSettings();

////Inserting user's color library

//Retreiving colors from user's local storage
const getColors = () => {
  const userColors = JSON.parse(localStorage.getItem('myPalette'));
  return userColors;
};

const insertColors = () => {
  const settingContainers = document.querySelectorAll('.wcp-setting');

  const library = getColors();

  settingContainers.forEach(cont => {
    const libraryContainer = document.createElement('div');
    libraryContainer.className = 'wcp-my-library-container hide';
    libraryContainer.innerHTML = `
    <h4>👇 Your Library</h4>
    <div class="wcp-my-library-colors-container">
    </div>`;
    cont.after(libraryContainer);

    //Insert colors to DOM
    library.forEach(color => {
      const colorWrapper = document.createElement('div');
      colorWrapper.classList.add('wcp-my-library-color-wrapper');
      colorWrapper.innerHTML = `
     <div style="background-color: ${color}"></div>
      <p>${color}</p>
     <button class="wcp-my-library-select-btn">select</button>`;
      libraryContainer.children[1].prepend(colorWrapper);
    });
  });
};

insertColors();

////Toggling settings container
const hamburgerBtn = document.querySelector('.wcp-hamburger-btn');

const openSettings = e => {
  //prettier-ignore
  hideElement(instructionContainer, 'wcp-instructions-container--active', '.ri-information-fill', 'ri-information-fill--active')

  let target = e.target;
  target.children[0].classList.toggle('ri-menu-add-line--active');
  settingsContainer.classList.toggle('wcp-settings-container--active');
};

hamburgerBtn.addEventListener('click', openSettings);

////Toggling my library colors container
const libraryBtns = document.querySelectorAll('.wcp-open-palette-btn');
const libraryContainers = document.querySelectorAll(
  '.wcp-my-library-container'
);

const openLibrary = e => {
  const wcpPaletteIcons = document.querySelectorAll('.fa-heart-circle-plus');

  let target = e.target;

  let targetIndex = [...libraryBtns].findIndex(el => el === target);
  libraryContainers[targetIndex];

  libraryContainers[targetIndex].classList.toggle('hide');
  target.children[0].classList.toggle('icon-active');

  //Untoggling previously clicked library btn & container (hiding)
  Array.from(libraryContainers)
    .filter(el => el !== libraryContainers[targetIndex])
    .forEach(cont => cont.classList.add('hide'));

  Array.from(wcpPaletteIcons)
    .filter(icon => icon !== target.children[0])
    .forEach(i => i.classList.remove('icon-active'));
};

libraryBtns.forEach(btn => btn.addEventListener('click', openLibrary));

////Toggling instructions container
const instructionBtn = document.querySelector('.instruction-btn');
const instructionContainer = document.querySelector(
  '.wcp-instructions-container'
);

const openInstruction = e => {
  //prettier-ignore
  hideElement(settingsContainer, 'wcp-settings-container--active', '.ri-menu-add-line', 'ri-menu-add-line--active')

  e.stopPropagation();
  let target = e.target;
  instructionContainer.classList.toggle('wcp-instructions-container--active');
  target.children[0].classList.toggle('ri-information-fill--active');
};

instructionBtn.addEventListener('click', openInstruction);

////Hiding wcp-nav containers
const hideElement = (el, elClassnameActive, iClassname, iClassNameActive) => {
  if (el.classList.contains(elClassnameActive)) {
    el.classList.toggle(elClassnameActive);
    document.querySelector(iClassname).classList.toggle(iClassNameActive);
  }
};
