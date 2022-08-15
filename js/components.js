class appNav extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<nav class="app-nav">
    <a href="/"
      ><img
        src="/img/Colorala logo.png"
        alt="color palette generator colorala logo "
    /></a>
    <div class="nav-wrapper">
      <div class="nav-subwrapper">
        <ul>
          <li>
            <a class="tools-popup-btn" href="">Tools</a
            ><i class="ri-arrow-drop-down-line arrow-down-icon"></i>
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
              <h4>Colors Generator!</h4>
              <p>Generate colors and add to your custom palette!</p>
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

        <a href="/website-colors-preview">
          <div class="tool">
            <img src="/img/live website preview.gif" alt="" />
            <div>
              <h4><span>NEW!</span> Website Colors Preview!</h4>
              <p>Are you designing a website? Preview your colors!</p>
            </div>
          </div>
        </a>
      </div>

      <div class="my-palette hide">
        <div class="flex-my-palette">
          <button class="export-btn">
            <i class="fa-solid fa-file-export export-icon"></i>Export
            palette to PDF
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
    this.innerHTML = `<div class="from-creator-content">
    <div class="close-from-creator-content-area">
      <button class="close-from-creator-content-btn">
        <i class="fa-solid fa-circle-xmark"></i>
      </button>
    </div>
    <h3>Dear Community,</h3>
    <p>
      Thank you 💗 for using my app. I created it with you in mind 🥰.
      Colors complement our lives. They make us feel comfortable and
      confident. You can use my app to build a color palette for a website,
      but it doesn't exclude other projects.
    </p>
    <p>
      You can <b>develop this application directly with me</b> or send your
      <b>suggestions for the improvement/development of other features</b>.
    </p>
    <p>Become a member of colorala and develop this project with me.</p>
    <a href="mailto:maciejkuran@gmail.com">contact me 📧</a>
    <p><i>Maciej Kuran-Janowski</i></p>
  </div>`;
  }
}

customElements.define('from-creator-popup', fromCreatorPopup);

class cookiesPopup extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<div class="cookies-container">
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
