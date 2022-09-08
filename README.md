# colorala.com

<p align="center"><img width="1000" src="/img/Colorala banner 2.jpg"></p>

<b>For designers, developers ... for everybody! 🤍</b>

Create the Best Looking Color Palette by using `Color Palette Generator` or exploring hand-picked `Pre-made Color Palettes`.

🔥 Check latest `Website Color Preview` tool where you can see live what your color scheme looks like!

[colorala - LIVE APP](https://colorala.com)

<b>Current version: 2.0</b>

<i>Creator: Maciej Kuran-Janowski</i>

## Hi there!

<p align="center"><img width="200" src="/img/Avatar Maciej Kuran-Janowski.png"></p>

> Lots of work accomplished so far. I worked diligently to implement all functionalities. I want to remain objective and meet user expectations. Therefore, feel free to submit your request via `GitHub -> issues.`

# Documentation

> Documentation is a general overview of the changes made. Colorala is the project that I intend to regularly improve and enhance with new functionality. I will announce all changes at this time on GitHub. In case of growing documentation, I may create a special place for documentation on colorala.com website.

## v.2.0

### 🟢 Modified application navbar

> Navbar now is the same across all the pages

#### 1. Toggle tools container (list of available tools)

#### 2. User can access and export library colors everywhere on the site (preview library on red heart icon click)

#### 3. GitHub icon added

### 🟢 Modified home page

#### 1. Modified top section

- added buttons that link to colorala tools

#### 2. New sections added

- section, which features new tool `Website Color Preview`
- section, which introduces the creator and provides the message

### 🟢 Modified Color Palette Generator Functionalities

#### 1. Algorithm that checks current user library colors

- algorithm checks the library colors, everytime a user adds a new color. If picked color is already there, error notification is returned.
  > I implemented this functionality to avoid duplicates in the library.

#### 2. Proper notifications are displayed in UI if `added to library`, `already added` or `copied to clipboard`

### 🟢 Tooltips - appearing across all colorala tools

> Tooltips were implemented in v.1.0. However it required massive fixes

#### 1. Tooltip has a `setTimeout` method that will run after 700ms and is set on `mouseenter` event handler attached to a certain element

- if user `mouseleave` before 700ms, tooltip is not going to be displayed - `clearTimeout`
- if user `mouseenter` over 700ms and then `mouseleave`, tooltip is immediately off

### 🟢 Color picker - appearing across all colorala tools

> Color values are only displayed in `HEXA` (RGBA, HSLA, HSVA, CMYK is no longer supported). For now, there's no validation/conversion so if you decide to input manually color value, please provide HEXA value.

### 🟢🆕 Pre-made Color Palettes

> Explore hand-picked color palettes

#### 1. Dynamically retrieved, hand-picked color palettes

- each created palette is an `instance` of `class Palette`
- `class Palette` contains properties `this.type` and `this.colors`

#### 2. Filter palettes

- choose between `All`, `Dark`, `Light`, `Mix`

- all newly created palettes are pushed to `palettes` array
- filtering takes place based on `this.type` property which each palette has defined

#### 3. Hidden options bar - `hex code`, `copy`, `add to library`

- options bar only shows if user `mouseenter` and hides when `mouseleave`

#### 4. Notifications are displayed if `added to library`, `already added` or `copied to clipboard`

### 🟢🆕 Website Color Preview! - \*BETA

> Please note, that it is currently a beta version. This tool will be further developed, and new functionalities will be added in new versions. However, the current functionalities have been tested and are working properly. Feel free to use it! 🔥

#### 1. One theme available

- in beta version there's only `business theme` available

#### 2. Laptop and mobile preview

- switch preview between devices
- laptop preview is NOT displayed if `window.matchMedia('(max-width: 588.98px)')`- preview switcher becomes hidden and only mobile view is on

#### 3. Access to your library colors

> user library is read via `localStorage.getItem`. User can access all the colors.

- library colors automatically update in `settings` if any got removed from library (navbar -> library preview -> remove)

#### 4. Toggle settings container

> this settings container I call `manual settings`. This is a list of all the settings responsible for changing color styles to individual theme elements `body`, `h1`, `header` etc. When color is picked, style will be dynamically applied to specific theme el.

- user can manually input color
- user can select color straight from library
- user can use color picker to pick a color

#### 5. Popup settings

> `popup setting` is the opposite to `manual setting`. `Popup setting` is activated when user clicks directly on theme element. The element itself gets a highlight 'red border`, and setting window automatically gets popped up.

- `popup setting` has the same options as `manual setting` (access to library, color picker or manually providing color in input field)
- when `popup setting` is on, `manual settings` become off, and vice versa
- applied HEX color code is auto filled in both: `manual setting input` and `popup setting input`

#### 6. Toggle instructions container

> available next to `hamburger icon` - `manual settings`

#### 7. Reset

> available next to `instructions btn`. When `reset` is clicked, it will reload the page and all changes will be lost

## v.1.0

- Generating 4 random colors (HEXA) at once (press 'space' or button);
- Manual color picker (HEXA, RGBA, HSLA, HSVA, CMYK );
- Copying to clipboard randomly generated/manually picked color;
- Layer (color) blocking;
- Adding color to 'My Palette';
- Copying to clipboard a color from 'My Palette';
- Removing unwanted color from 'My Palette';
- Exporting 'My Palette' to PDF file;
- Automatic saving 'My Palette' to browser's local storage.

<p align="center">
  <img width="1000" src="/flowchart.jpg">
</p>

## License

The material appearing on the colorala.com website is protected by © copyright.

Excluding:

- pickr library by simonwep (simonwep.github.io/pickr);
- jsPDF library by parallax (github.com/parallax/jsPDF);
- icons (fontawesome.com, remixicon.com);
- lottie animation (lottiefiles.com) presented on the home page (author: julien bulle )

The creator of the colorala.com application is Maciej Kuran-Janowski.
www.maciejkuran.com

You may not copy the source code, reproduce or create derivative works for commercial as well as non-commercial purposes - unless you obtain direct permission.

Reach me via email 😀:
maciejkuran@gmail.com
