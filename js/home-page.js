'use strict';

////Home page - load with delay
const homePageContainer = document.querySelector('.general-container');
document.addEventListener('DOMContentLoaded', function () {
  setTimeout(() => {
    homePageContainer.style.opacity = '1';
  }, 300);
});
