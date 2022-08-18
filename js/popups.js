//// 'From Creator' popup
const fromCreatorOpenBtn = document.querySelector('.from-creator-btn');
const fromCreatorCloseBtn = document.querySelector(
  '.close-from-creator-content-btn'
);
const fromCreatorContent = document.querySelector('.from-creator-content');
const backgroundOverlay = document.querySelector('.overlay-modal');

const displayFromCreatorContent = () => {
  fromCreatorOpenBtn.addEventListener('click', e => {
    backgroundOverlay.style.pointerEvents = 'all';
    e.preventDefault();
    fromCreatorContent.style.display = 'inline';
    backgroundOverlay.classList.remove('hide');
  });

  fromCreatorCloseBtn.addEventListener('click', () => {
    fromCreatorContent.style.display = 'none';
    backgroundOverlay.classList.add('hide');
  });

  backgroundOverlay.addEventListener('click', () => {
    fromCreatorContent.style.display = 'none';
    backgroundOverlay.classList.add('hide');
  });
};

displayFromCreatorContent();

////Cookies notification
const cookiesContainer = document.querySelector('.cookies-container');
const cookiesAcceptBtn = document.querySelector('.accept-cookies-btn');

const cookiesNotification = () => {
  document.addEventListener('DOMContentLoaded', function () {
    if (!localStorage.getItem('colorala-cookies-accepted')) {
      backgroundOverlay.style.pointerEvents = 'none';
      cookiesContainer.classList.remove('hide');
      backgroundOverlay.classList.remove('hide');
    } else {
      cookiesContainer.classList.add('hide');
      backgroundOverlay.classList.add('hide');
      backgroundOverlay.style.pointerEvents = 'all';
    }
  });
};

const acceptCookies = () => {
  cookiesAcceptBtn.addEventListener('click', function () {
    cookiesContainer.style.display = 'none';
    backgroundOverlay.classList.add('hide');
    localStorage.setItem('colorala-cookies-accepted', 'true');

    showWelcomePopup();
  });
};

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

const closeWelcomePopup = () => {
  const closeBtn = document.querySelector(
    '.close-about-local-storage-popup-btn'
  );
  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      localStorage.setItem('colorala-welcome-message', 'read');
      popupContainer.classList.add('hide');
      backgroundOverlay.classList.add('hide');
    });

    backgroundOverlay.addEventListener('click', () => {
      localStorage.setItem('colorala-welcome-message', 'read');
      popupContainer.classList.add('hide');
      backgroundOverlay.classList.add('hide');
    });
  }
};

cookiesNotification();
acceptCookies();
closeWelcomePopup();

//Event handler on DOMContentLoaded, if a user visited website again but haven't seen + accepted the popup for some reason  (popup accept isn't saved in the local storage)

document.addEventListener('DOMContentLoaded', () => {
  showWelcomePopup();
});
