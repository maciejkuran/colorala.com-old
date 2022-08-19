//// 'From Creator' popup
const fromCreatorOpenBtn = document.querySelector('.from-creator-btn');
const fromCreatorCloseBtn = document.querySelector(
  '.close-from-creator-content-btn'
);
const fromCreatorContent = document.querySelector('.from-creator-content');
const backgroundOverlay = document.querySelector('.overlay-modal');

const displayFromCreatorContent = e => {
  e.preventDefault();
  fromCreatorContent.classList.remove('hide');
  backgroundOverlay.classList.remove('hide');
};

fromCreatorOpenBtn.addEventListener('click', displayFromCreatorContent);

const closeFromCreatorContent = classname => {
  fromCreatorContent.classList.add(classname);
  backgroundOverlay.classList.add(classname);
};

fromCreatorCloseBtn.addEventListener(
  'click',
  closeFromCreatorContent.bind(null, 'hide')
);

backgroundOverlay.addEventListener(
  'click',
  closeFromCreatorContent.bind(null, 'hide')
);

////Cookies notification
const cookiesContainer = document.querySelector('.cookies-container');
const cookiesAcceptBtn = document.querySelector('.accept-cookies-btn');
const overlayCookies = document.querySelector('.overlay-modal-cookies');

const showCookies = () => {
  if (!localStorage.getItem('colorala-cookies-accepted')) {
    cookiesContainer.classList.remove('hide');
    overlayCookies.classList.remove('hide');
  } else {
    cookiesContainer.classList.add('hide');
    overlayCookies.classList.add('hide');
  }
};

document.addEventListener('DOMContentLoaded', showCookies);

const acceptCookies = () => {
  cookiesContainer.classList.add('hide');
  overlayCookies.classList.add('hide');
  localStorage.setItem('colorala-cookies-accepted', 'true');

  showWelcomePopup();
};

cookiesAcceptBtn.addEventListener('click', acceptCookies);

////Welcome popup - about adding to palette and local storage
const popupContainer = document.querySelector(
  '.add-to-palette-local-storage-info-popup'
);

const showWelcomePopup = () => {
  if (!popupContainer) return;

  setTimeout(() => {
    if (
      !localStorage.getItem('colorala-welcome-message') &&
      localStorage.getItem('colorala-cookies-accepted')
    ) {
      popupContainer.classList.remove('hide');

      backgroundOverlay.classList.remove('hide');
      backgroundOverlay.style.pointerEvents = 'all';
    }
  }, 500);
};

const closeWelcomePopup = e => {
  if (e.target) {
    localStorage.setItem('colorala-welcome-message', 'read');
    popupContainer.classList.add('hide');
    backgroundOverlay.classList.add('hide');
  }
};

const closeBtn = document.querySelector('.close-about-local-storage-popup-btn');

closeBtn?.addEventListener('click', closeWelcomePopup);
backgroundOverlay.addEventListener('click', closeWelcomePopup);

//Event handler on DOMContentLoaded, if a user visited website again but haven't seen + accepted the popup for some reason  (popup accept isn't saved in the local storage)

document.addEventListener('DOMContentLoaded', showWelcomePopup);
