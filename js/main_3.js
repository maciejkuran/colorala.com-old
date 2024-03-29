'use strict';

/////////WCP - 'WEBSITE COLORS PREVIEW' functionality

////Creating a class and its instances (for displaying dynamically settings and then finding certain elements in the HTML for user's further modification)
const elements = [];

const Element = class {
  constructor(name, classname, placeholder, styleProperty) {
    this.name = name;
    this.classname = classname;
    this.placeholder = placeholder;
    this.styleProperty = styleProperty;

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

const element_1 = new Element(
  '<body>',
  '.user-choice--body',
  '#E3E3E3',
  'background-color'
);
const element_2 = new Element('<h1>', '.user-choice--h1', '#000000', 'color');
const element_3 = new Element('<h2>', '.user-choice--h2', '#000000', 'color');
const element_4 = new Element('<h3>', '.user-choice--h3', '#FFFFFF', 'color');
const element_5 = new Element('<p>', '.user-choice--p', '#000000', 'color');
const element_6 = new Element('<a>', '.user-choice--a', '#000000', 'color');
//prettier-ignore
const element_7 = new Element('<header>','.user-choice--header',
'#F2F5F5','background-color');
//prettier-ignore
const element_8 = new Element('<button>','.user-choice--button','#262626','background-color');
//prettier-ignore
const element_9 = new Element('<section>', '.user-choice--section','#262626', 'background-color');
//prettier-ignore
const element_10 = new Element('.p-section', '.user-choice--p-section', '#D1D1D1', 'color');
//prettier-ignore
const element_11 = new Element('<div>','.user-choice--div','#F2F5F5',
  'background-color');
const element_12 = new Element('<i>', '.user-choice--i', '#262626', 'color');
//prettier-ignore
const element_13 = new Element('<footer>','.user-choice--footer','#262626','background-color');

////Load wcp-simulator (preview screen) with delay - fixing bug that showed on mobile. When script loads, it showed for a sec. laptop version and then hided so now I set initially opacity 0  and when DOMContentloads, after 0.4 s. opacity changes to 1;

const simulatorOnDelay = () => {
  const simulatorContainer = document.querySelector('.wcp-simulator');

  if (simulatorContainer) {
    setTimeout(() => {
      simulatorContainer.style.opacity = '1';
    }, 400);
  }
};

document.addEventListener('DOMContentLoaded', simulatorOnDelay);

//// Inserting settings to DOM
const settingsContainer = document.querySelector('.wcp-settings-container');

const insertManualSettings = () => {
  elements.forEach(el => {
    const internalContainer = document.createElement('div');
    internalContainer.classList.add('wcp-setting-internal-container');
    internalContainer.innerHTML = `
    <div data-styleproperty="${el.styleProperty}" data-classname="${el.classname}" class="wcp-setting">
            <p>${el.name}</p>
            <div>
              <input
                class="hex-code-input"
                spellcheck="false"
                type="text"
                placeholder="${el.placeholder}"
              />
              <button data-tooltip="Your Library" class="action-button wcp-open-palette-btn clr-picker-placement">
                <i class="fa-solid fa-heart-circle-plus"></i>
              </button>
      
            </div>
          </div>`;
    settingsContainer?.append(internalContainer);
  });
};
//Inserting manual settings
insertManualSettings();

//Inserting popup settings
const insertPopupSettings = () => {
  const insertedAllPopups = document.querySelector('.inserted-popup-settings');

  elements.forEach(el => {
    const popupContainer = document.createElement('div');
    popupContainer.className = 'wcp-setting-popup-container hide';
    popupContainer.setAttribute('data-classname', el.classname);
    popupContainer.setAttribute('data-styleproperty', el.styleProperty);
    popupContainer.innerHTML = `
    <button class="close-setting-popup-btn">
      <i class="ri-close-circle-fill"></i>
    </button>
    <div class="wcp-setting wcp-setting-popup" data-classname="${el.classname}" data-styleproperty="${el.styleProperty}">
        <p>${el.name}</p>
        <div>
          <input
            class="hex-code-input"
            spellcheck="false"
            type="text"
            placeholder="${el.placeholder}"
          />
          <button
            data-tooltip="Your Library"
            class="action-button wcp-open-palette-btn clr-picker-placement"
          >
            <i class="fa-solid fa-heart-circle-plus"></i>
          </button>
        </div>
      </div>
    `;

    insertedAllPopups?.append(popupContainer);
  });
};

insertPopupSettings();

////Inserting user's color library

//If no colors in library - inform user what to do
export const informIfNoColors = library => {
  const notificationLabels = document.querySelectorAll(
    '.library-no-colors-notification'
  );

  notificationLabels.forEach(label => {
    if (library === null || library.length === 0) {
      label.textContent =
        '🔴 Your library is empty. Use color picker or other colorala tools to get the colors you want!';
    } else {
      label.textContent = '';
    }
  });
};

//Retreiving colors from user's local storage
export const getColors = () => {
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
    <p class="library-no-colors-notification"></p>
    <div class="wcp-my-library-colors-container">
    </div>`;
    cont.after(libraryContainer);

    if (library === null) return;

    //Insert colors to DOM
    library.forEach(color => {
      const colorWrapper = document.createElement('div');

      colorWrapper.classList.add('wcp-my-library-color-wrapper');
      colorWrapper.innerHTML = `
     <div style="background-color: ${color}"></div>
      <p>${color}</p>
     <button class="wcp-my-library-select-btn">select</button>`;
      libraryContainer.children[2].prepend(colorWrapper);
    });
  });

  informIfNoColors(library);
};

insertColors();

//Update 'setting colors library' if user removed color from library. This function is executed in main_1.js file - deleteItemFromPalette();
export const updateWCPLibraries = btn => {
  const wcpColorsContainers = document.querySelectorAll(
    '.wcp-my-library-colors-container'
  );

  wcpColorsContainers?.forEach(cont => {
    if (btn.className === 'remove-color-my-palette-btn') {
      let clickedIndex = [
        ...document.querySelectorAll('.remove-color-my-palette-btn'),
      ].indexOf(btn);
      cont.children[clickedIndex].remove();
    }
  });
};
////Toggling settings container
const hamburgerBtn = document.querySelector('.wcp-hamburger-btn');

const openSettings = e => {
  //prettier-ignore
  hideElement(instructionContainer, 'wcp-instructions-container--active', '.ri-information-fill', 'ri-information-fill--active')

  let target = e.target;
  target.children[0].classList.toggle('ri-menu-add-line--active');
  settingsContainer.classList.toggle('wcp-settings-container--active');

  updateManualSettingInput();
};

hamburgerBtn?.addEventListener('click', openSettings);

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

instructionBtn?.addEventListener('click', openInstruction);

////Hiding wcp-nav containers
const hideElement = (el, elClassnameActive, iClassname, iClassNameActive) => {
  if (el.classList.contains(elClassnameActive)) {
    el.classList.toggle(elClassnameActive);
    document.querySelector(iClassname).classList.toggle(iClassNameActive);
  }
};

////Switching device views
const viewBtns = document.querySelectorAll('.view-btn');
const devices = document.querySelectorAll('.wcp-device');

const switchView = e => {
  removeDeviceViews();
  removePrevActiveBtn();
  let target = e.target;

  let targetViewtype = target.dataset.viewtype;
  let displaySection = document.querySelector(
    `section[data-viewtype="${targetViewtype}"]`
  );

  displaySection.classList.add('view-active');
  target.classList.add('active-view-btn');
};

const removeDeviceViews = () => {
  devices.forEach(device => device.classList.remove('view-active'));
};

const removePrevActiveBtn = () => {
  let previousActiveBtn = [...viewBtns].filter(btn =>
    btn.classList.contains('active-view-btn')
  );

  previousActiveBtn[0].classList.remove('active-view-btn');
};

viewBtns.forEach(btn => btn.addEventListener('click', switchView));

//Hide laptop container if max-width: 588.98px;
const mediaQuery = window.matchMedia('(max-width: 588.98px)');
const laptopContainer = document.querySelector('.wcp-laptop-view-container');
const mobileContainer = document.querySelector('.wcp-mobile-view-container');

const hideLaptopContainer = () => {
  if (mediaQuery.matches && laptopContainer) {
    laptopContainer?.classList.remove('view-active');
    mobileContainer?.classList.add('view-active');

    //Removing active btns from all viewBtns
    viewBtns.forEach(btn => btn.classList.remove('active-view-btn'));
    //prettier-ignore
    //Adding active style to viewBtn that matches attribute value with mobileContainer
    document.querySelector(`button[data-viewtype="${mobileContainer.dataset.viewtype}"]`).classList.add('active-view-btn');
  }
};

// Adjust when DOM is loaded and when user resizes window
window.addEventListener('resize', hideLaptopContainer);
document.addEventListener('DOMContentLoaded', hideLaptopContainer);

////Selecting color from library and displaying in input field
const librarySelectBtns = document.querySelectorAll(
  '.wcp-my-library-select-btn'
);

const selectColorFromLibrary = e => {
  let target = e.target;
  let getHEX = target.previousElementSibling.textContent;

  //I did long DOM traversing in order to locate closestInput when 'select' btn is clicked. As the path is different between 'manual settings' and 'popup settings', I had to include if conditions, to avoid errors and let JS find seperately inputs

  //'inputManualSett' stands for input in manual settings
  let inputManualSett = target.parentElement?.closest(
    '.wcp-setting-internal-container'
  )?.children[0]?.children[1]?.children[0];

  //'inputPopupSett' stands for input in popup settings
  let inputPopupSett =
    target.parentElement?.parentElement.parentElement?.closest(
      '.wcp-setting-popup-container'
    )?.children[1]?.children[1]?.children[0];

  if (inputManualSett) {
    inputManualSett.value = getHEX;

    let styleProperty =
      inputManualSett.parentElement.parentElement.dataset.styleproperty;
    let classname =
      inputManualSett.parentElement.parentElement.dataset.classname;

    //Change elements color in DOM
    changeElColor(inputManualSett.value, classname, styleProperty);
  }

  if (inputPopupSett) {
    inputPopupSett.value = getHEX;

    let styleProperty =
      inputPopupSett.parentElement.closest('.wcp-setting-popup').dataset
        .styleproperty;
    let classname =
      inputPopupSett.parentElement.closest('.wcp-setting-popup').dataset
        .classname;

    changeElColor(inputPopupSett.value, classname, styleProperty);
  }
};

librarySelectBtns.forEach(btn =>
  btn.addEventListener('click', selectColorFromLibrary)
);

////Changing el style when user choosed a color
// --this function is a callback to selectColorFromLibrary() function--
export const changeElColor = (input, classname, styleProperty) => {
  document.querySelectorAll(`${classname}`).forEach(el => {
    el.style[styleProperty] = input;
  });
};

////Changing element color if any change was made in the input field - if any user's activity is detected in the input field
const inputFields = document.querySelectorAll('.hex-code-input');

const changeClrOnInputChange = e => {
  let target = e.target;
  let classname = e.target.parentElement.parentElement.dataset.classname;

  let styleProperty =
    e.target.parentElement.parentElement.dataset.styleproperty;

  changeElColor(target.value, classname, styleProperty);
};

inputFields.forEach(input =>
  input.addEventListener('keyup', changeClrOnInputChange)
);

////Displaying popup setting container on theme element click

//Update 'popup input' if user made changes to 'manual setting input value'. Find related 'manual setting' to just clicked popup setting and update value of placeholder

const updatePopupInput = (popupContainer, classname) => {
  let locateRelatedDiv = document.querySelector(
    `.wcp-setting-internal-container .wcp-setting[data-classname=".${classname}"]`
  );

  let locateInputInDiv = locateRelatedDiv.children[1].children[0]?.value;

  let eTargetInput = popupContainer.children[1].children[1].children[0];

  if (!locateInputInDiv) return;

  if (!eTargetInput.value)
    eTargetInput.setAttribute('placeholder', locateInputInDiv);

  if (eTargetInput.value) eTargetInput.value = locateInputInDiv;
};

//Update 'manual settings input' if any changes were done on the side of popup setting
const updateManualSettingInput = () => {
  const manualSettingsInputs = document.querySelectorAll(
    '.wcp-setting-internal-container input'
  );

  const popupSettingsInputs = document.querySelectorAll(
    '.wcp-setting-popup input'
  );

  popupSettingsInputs.forEach((_, i) => {
    if (popupSettingsInputs[i].value)
      manualSettingsInputs[i].value = popupSettingsInputs[i].value;

    if (!popupSettingsInputs[i].value) return;
  });
};

// Displaying setting popup
const bodyThemes = document.querySelectorAll('.user-choice--body');

let popupContainer, filteredAttribute;

const displaySettingPopup = e => {
  e.preventDefault();
  removeHighlight(filteredAttribute);
  closeManualSettings();

  popupContainer?.classList.add('hide');
  let targetAttributes = e.target.getAttribute('class');
  //As some elements contain more than one class that I am interested in, I wanna filter classes and retrieve that one desired;
  filteredAttribute = targetAttributes
    ?.split(' ')
    .filter(classname => classname.includes('user'))
    .join('');

  popupContainer = document.querySelector(
    `.wcp-setting-popup-container[data-classname=".${filteredAttribute}"]`
  );

  if (!popupContainer) return;
  if (popupContainer) {
    popupContainer.classList.remove('hide');
    addHighlight(filteredAttribute);
  }

  updatePopupInput(popupContainer, filteredAttribute);
};

bodyThemes.forEach(theme =>
  theme.addEventListener('click', displaySettingPopup, true)
);

//Adding highlight (red border) to clicked theme element
const addHighlight = classname => {
  const elements = document.querySelectorAll(`.${classname}`);
  elements.forEach(el => el.classList.add('active-el'));
};

//Remove highlight (red border)
const removeHighlight = classname => {
  if (!classname || classname === undefined) {
    return;
  } else {
    const elements = document.querySelectorAll(`.${classname}`);
    elements.forEach(el => el.classList.remove('active-el'));
  }
};

//Closing popup setting container on close btn click;
const popupContainers = document.querySelectorAll(
  '.wcp-setting-popup-container'
);

const closePopupSettingContainer = e => {
  e.stopPropagation();

  popupContainers.forEach(cont => cont.classList.add('hide'));
  document
    .querySelectorAll(`.${filteredAttribute}`)
    .forEach(el => el.classList.remove('active-el'));
};

//prettier-ignore
document.querySelectorAll('.close-setting-popup-btn').forEach(btn => btn.addEventListener('click', closePopupSettingContainer));

//Closing popup setting on manual settings hamburger btn click
hamburgerBtn?.addEventListener('click', closePopupSettingContainer);

//Close manual settings container if popup setting is opened
const closeManualSettings = () => {
  settingsContainer.classList.remove('wcp-settings-container--active');
  document
    .querySelector('.ri-menu-add-line')
    .classList.remove('ri-menu-add-line--active');
};

////RESET EVERYTHING
const resetBtn = document.querySelector('.reset-btn');

const resetApp = () => {
  location.reload();
};

resetBtn?.addEventListener('click', resetApp);
