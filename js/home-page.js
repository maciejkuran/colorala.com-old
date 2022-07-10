'use strict';

////Home page - load with delay
const homePageContainer = document.querySelector('.general-container');
document.addEventListener('DOMContentLoaded', function () {
  setTimeout(() => {
    homePageContainer.style.display = 'inline';
  }, 450);
});
