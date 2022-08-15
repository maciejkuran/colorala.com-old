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
