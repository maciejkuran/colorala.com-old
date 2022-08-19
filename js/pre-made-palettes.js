export const palettes = [];

const Palette = class {
  constructor(type, colors) {
    this.type = type;
    this.colors = colors;
    palettes.push(this);
  }
};

//Dark
const palette_1_dark = new Palette(
  ['All', 'Dark'],
  ['#323333', '#0FFFBD', '#F54B83', '#FF637C']
);
const palette_2_dark = new Palette(
  ['All', 'Dark'],
  ['#1F004E', '#060075', '#0015FF', '#3C0CDE']
);
const palette_3_dark = new Palette(
  ['All', 'Dark'],
  ['#FFA703', '#EDB600', '#F55B2D', '#E66432']
);
const palette_4_dark = new Palette(
  ['All', 'Dark'],
  ['#494847', '#6E6E6E', '#F76526', '#FF7527']
);
//Light
const palette_1_light = new Palette(
  ['All', 'Light'],
  ['#323333', '#B4979A', '#F0A2DC', '#FFD8F5']
);
const palette_2_light = new Palette(
  ['All', 'Light'],
  ['#F1EAFE', '#A5FFDC', '#D7FAFF', '#CBEFFF']
);
const palette_3_light = new Palette(
  ['All', 'Light'],
  ['#FFEEDF', '#F5FFD5', '#D4ECF0', '#DADADA']
);
const palette_4_light = new Palette(
  ['All', 'Light'],
  ['#FFEFEF', '#FEEDFF', '#E8DBE8', '#F5D8E8']
);
//Mix
const palette_1_mix = new Palette(
  ['All', 'Mix'],
  ['#ACC0D3', '#63B3C2', '#1F1C68', '#506D76']
);
const palette_2_mix = new Palette(
  ['All', 'Mix'],
  ['#CFE1BC', '#628DFA', '#40513A', '#41E2D7']
);
const palette_3_mix = new Palette(
  ['All', 'Mix'],
  ['#E37E7C', '#40C2F4', '#B5CB70', '#281032']
);
const palette_4_mix = new Palette(
  ['All', 'Mix'],
  ['#7B60B6', '#AE8CF0', '#C97948', '#7860D0']
);
const palette_5_mix = new Palette(
  ['All', 'Mix'],
  ['#261596', '#4D8960', '#B5B492', '#CCDFDF']
);
const palette_6_mix = new Palette(
  ['All', 'Mix'],
  ['#303030', '#0068FF', '#EBEBEB', '#00FF70']
);
