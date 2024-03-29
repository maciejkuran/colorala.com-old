class appNav extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <nav class="app-nav">
    <a href="/"
      ><img
        src="/img/Colorala logo.png"
        alt="color palette generator colorala logo"
    /></a>
    <div class="nav-wrapper">
      <div class="nav-subwrapper">
        <ul>
          <li>
            <a class="tools-popup-btn" href=""
              >Tools<i class="ri-arrow-drop-down-line arrow-down-icon"></i></a
            >
          </li>
          <li>
            <a class="my-palette-open" href=""
              ><i class="fa-solid fa-heart heart-icon"></i
            ></a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://github.com/maciejkuran/colorala.com"
              ><i class="ri-github-line github-icon"></i
            ></a>
          </li>
        </ul>
      </div>

      <div class="tools-container hide">
        <a href="/color-palette-generator">
          <div class="tool">
            <img
              src="/img/Generate colors! colorala.gif"
              alt="colors generator colorala"
            />
            <div>
              <h4>Color Palette Generator!</h4>
              <p>Generate colors and add to your library!</p>
            </div>
          </div>
        </a>

        <a href="/pre-made-color-palettes">
          <div class="tool">
            <img src="/img/pre-made color palettes colorala.jpg" alt="" />
            <div>
              <h4><span>NEW!</span> Pre-made Palettes!</h4>
              <p>Expore amazing pre-made color palettes!</p>
            </div>
          </div>
        </a>

        <a href="/website-color-preview">
          <div class="tool">
            <img src="/img/live website preview.gif" alt="" />
            <div>
              <h4><span>NEW!</span> Website Color Preview!</h4>
              <p>Are you a website designer? Preview your colors!</p>
            </div>
          </div>
        </a>
      </div>

      <div class="my-palette hide">
        <div class="flex-my-palette">
          <button class="export-btn">
            <i class="fa-solid fa-file-export export-icon"></i>Export library
            to PDF
          </button>
          <button class="close close-my-palette-btn">
            <i class="fa-solid fa-circle-xmark"></i>
          </button>
        </div>
        <p class="my-palette-label-counter">0 colors in your library! 😌</p>
        <div class="colors-container-my-palette"></div>
      </div>
    </div>
  </nav>`;
  }
}

customElements.define('app-nav', appNav);

class fromCreatorPopup extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<div class="from-creator-content hide">
    <div class="close-from-creator-content-area">
      <button class="close-from-creator-content-btn">
        <i class="fa-solid fa-circle-xmark"></i>
      </button>
    </div>
    <h3>Dear Community,</h3>
    <p>
      Thank you 💗 for using my app. I created it with you in mind 🥰.
    <p>Help me to develop this app further!</p>
    <p>I want to remain objective and meet your expectations. Therefore, feel free to submit your request via <a target="_blank" href="https://github.com/maciejkuran/colorala.com/issues">GitHub -> issues.</a></p>
    <p>New features or something else?</p>
    <p>All requests are considered important.</p>
  </div>`;
  }
}

customElements.define('from-creator-popup', fromCreatorPopup);

class cookiesPopup extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<div class="cookies-container hide">
    <div>
      <h3>Cookies!</h3>
      <img src="/img/cookies img.png" alt="" />
    </div>
    <p>
      By using colorala website, you agree to the use of cookies.
      <a target="_blank" href="/privacy-policy"
        >Find out more about cookies</a
      >
      or launch the app now!
    </p>
    <button class="accept-cookies-btn primary-button">ACCEPT</button>
  </div>`;
  }
}

customElements.define('cookies-popup', cookiesPopup);

class localStoragePopup extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<div class="add-to-palette-local-storage-info-popup hide">
    <div class="close-local-storage-info-content-area">
      <button class="close-about-local-storage-popup-btn">
        <i class="fa-solid fa-circle-xmark"></i>
      </button>
    </div>
    <h3>Hello there 😉</h3>
    <img
      src="/img/colorala how to save to palette animation.gif"
      alt="colorala how to save color to palette"
    />
    <p>
      When creating your color palette, save the colors in
      <b>'My Palette'</b>. All colors are
      <strong>saved in your browser's local storage</strong>. Unless you
      delete the data from your browser, the
      <b> added colors will NOT disappear! </b> 🟢
    </p>
    <p>Export your palette to <b>PDF format</b> at any time.</p>
  </div>`;
  }
}

customElements.define('about-local-storage-popup', localStoragePopup);

class appFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<footer>
    <div class="footer-links">
      <a href="">From Creator 😀</a>
      <a href="/privacy-policy">Privacy Policy</a>
    </div>
    <p>
      Copyright ©,
      <a target="_blank" href="https://maciejkuran.com">maciejkuran.com</a>,
      All Rights Reserved
    </p>
  </footer>`;
  }
}

customElements.define('app-footer', appFooter);
