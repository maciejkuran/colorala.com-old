//BUSINESS THEME

//laptop HTML
class businessThemeLaptop extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <div class="business-theme-desktop user-choice--body">
    <div class="business-theme-desktop--nav">
      <img src="./img/Brand logo.png" alt="" />
      <ul>
        <li>
          <a class="user-choice--a" href="">About &lt;a&gt;</a>
        </li>
        <li>
          <a class="user-choice--a" href="">Services</a>
        </li>
        <li>
          <a class="user-choice--a" href="">Contact</a>
        </li>
      </ul>
    </div>

    <div class="business-theme-desktop--header user-choice--header">
      <div>
        <h5 class="user-choice--h1">This is &lt;h1&gt;!</h5>
        <p class="user-choice--p">
          This is a paragraph. In the HTML any paragraph is marked as a
          &lt;p&gt; tag. The entire field including the picture is a
          &lt;header&gt; tag.
        </p>
        <button class="user-choice--button">&lt;button&gt;</button>
      </div>
      <img src="./img/new york city img.jpg" alt="" />
    </div>

    <div class="business-theme-desktop-undefined--section">
      <h6 class="user-choice--h2">This is &lt;h2&gt;!</h6>
      <div class="business-theme-desktop-undefined--section---wrapper">
        <div class="business-theme-desktop--div user-choice--div">
          <i
            class="fa-solid fa-circle-info business-theme-desktop--i user-choice--i"
          ></i>
          <p class="business-theme--p user-choice--p">
            This is a &lt;p&gt; tag and it's all wrapped in a
            &lt;div&gt;. Icon is represented by &lt;i&gt; tag.
          </p>
        </div>
        <div class="business-theme-desktop--div user-choice--div">
          <i
            class="fa-solid fa-circle-info business-theme-desktop--i user-choice--i"
          ></i>
          <p class="business-theme--p user-choice--p">
            This is a &lt;p&gt; tag and it's all wrapped in a
            &lt;div&gt;. Icon is represented by &lt;i&gt; tag.
          </p>
        </div>
        <div class="business-theme-desktop--div user-choice--div">
          <i
            class="fa-solid fa-circle-info business-theme-desktop--i user-choice--i"
          ></i>
          <p class="business-theme--p user-choice--p">
            This is a &lt;p&gt; tag and it's all wrapped in a
            &lt;div&gt;. Icon is represented by &lt;i&gt; tag.
          </p>
        </div>
      </div>
    </div>

    <div class="business-theme-desktop--section user-choice--section">
      <div>
        <h6 class="user-choice--h3">This is &lt;h3&gt;!</h6>
        <p class="user-choice--p-section">
          This is a &lt;p&gt; tag with a class of 'p-section'.
        </p>
        <p class="user-choice--p-section">
          The entire field including the picture is a &lt;section&gt;
          tag.
        </p>
      </div>
      <img src="./img/new york city img2.jpg" alt="" />
    </div>

    <div class="business-theme-desktop--footer user-choice--footer">
      <h6 class="user-choice--h3">&lt;footer&gt;</h6>
    </div>
  </div>`;
  }
}

customElements.define('business-theme-laptop', businessThemeLaptop);

//mobile HTML

class businessThemeMobile extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <div class="business-theme-mobile user-choice--body">
            <div class="business-theme-mobile--nav">
              <img src="./img/Brand logo.png" alt="" />
              <button class="business-theme-mobile-hamb-btn">
                <i class="ri-menu-line user-choice--i"></i>
              </button>
              <div class="business-theme-list--nav hide">
                <ul>
                  <li>
                    <a class="user-choice--a" href="#">About &lt;a&gt;</a>
                  </li>
                  <li>
                    <a class="user-choice--a" href="#">Services</a>
                  </li>
                  <li>
                    <a class="user-choice--a" href="#">Contact</a>
                  </li>
                </ul>
              </div>
            </div>

            <div class="business-theme-mobile--header user-choice--header">
              <h5 class="user-choice--h1">This is &lt;h1&gt;!</h5>
              <p class="user-choice--p">
                This is a paragraph. In the HTML any paragraph is marked as a
                &lt;p&gt; tag. The entire field including the picture is a
                &lt;header&gt; tag.
              </p>

              <img src="./img/new york city img.jpg" alt="" />
              <button class="user-choice--button">&lt;button&gt;</button>
            </div>

            <div class="business-theme-mobile-undefined--section">
              <h6>This is &lt;h2&gt;!</h6>
              <div class="business-theme-mobile-undefined--section---wrapper">
                <div class="business-theme-mobile--div user-choice--div">
                  <i
                    class="fa-solid fa-circle-info business-theme-desktop--i user-choice--i"
                  ></i>
                  <p class="business-theme--p user-choice--p">
                    This is a &lt;p&gt; tag and it's all wrapped in a
                    &lt;div&gt;. Icon is represented by &lt;i&gt; tag.
                  </p>
                </div>

                <div class="business-theme-mobile--div user-choice--div">
                  <i
                    class="fa-solid fa-circle-info business-theme-desktop--i user-choice--i"
                  ></i>
                  <p class="business-theme--p user-choice--p">
                    This is a &lt;p&gt; tag and it's all wrapped in a
                    &lt;div&gt;. Icon is represented by &lt;i&gt; tag.
                  </p>
                </div>

                <div class="business-theme-mobile--div user-choice--div">
                  <i
                    class="fa-solid fa-circle-info business-theme-desktop--i user-choice--i"
                  ></i>
                  <p class="business-theme--p user-choice--p">
                    This is a &lt;p&gt; tag and it's all wrapped in a
                    &lt;div&gt;. Icon is represented by &lt;i&gt; tag.
                  </p>
                </div>
              </div>
            </div>

            <div class="business-theme-mobile--section user-choice--section">
              <div>
                <h6 class="user-choice--h3">This is &lt;h3&gt;!</h6>
                <p class="user-choice--p-section">
                  This is a &lt;p&gt; tag with a class <br />
                  of 'p-section'.
                </p>
                <p class="user-choice--p-section">
                  The entire field including the picture is a &lt;section&gt;
                  tag.
                </p>
              </div>
              <img src="./img/new york city img2.jpg" alt="" />
            </div>

            <div class="business-theme-mobile--footer user-choice--footer">
              <h6 class="user-choice--h3">&lt;footer&gt;</h6>
            </div>
          </div>
        `;
  }
}

customElements.define('business-theme-mobile', businessThemeMobile);

//Toggle nav container in mobile version
const hamburgerBtn = document.querySelector('.business-theme-mobile-hamb-btn');
const navContainer = document.querySelector('.business-theme-list--nav');

const toggleNav = () => {
  navContainer.classList.toggle('hide');
};

hamburgerBtn.addEventListener('click', toggleNav);
