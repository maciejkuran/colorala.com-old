'use strict';

/////////'WEBSITE COLORS PREVIEW' functionality

////Creating a class and its instances to display dynamically available HTML elements for user's modification

const elements = [];

const Element = class {
  constructor(name, classname, placeholder) {
    this.name = name;
    this.classname = classname;
    this.placeholder = placeholder;

    Element.addInstance(this);
  }
  //encoding 'name' values as they will be used in the HTML
  set name(name) {
    this._name = name.replaceAll('<', '&lt;').replaceAll('>', '&gt;');
  }

  get name() {
    return this._name;
  }

  static addInstance(item) {
    elements.push(item);
  }

  static getInstances() {
    return elements;
  }
};

const element_1 = new Element('<body>', '.classic-theme--body', '#E3E3E3');
const element_2 = new Element('<h1>', '.classic-theme--h1', '#000000');
const element_3 = new Element('<h2>', '.classic-theme--h2', '#000000');
const element_4 = new Element('<h3>', '.classic-theme--h3', '#FFFFFF');
const element_5 = new Element('<p>', '.classic-theme--p', '#000000');
const element_6 = new Element('<a>', '.classic-theme--a', '#000000');
const element_7 = new Element('<header>', '.classic-theme--header', '#F2F5F5');
const element_8 = new Element('<button>', '.classic-theme--button', '#262626');
//prettier-ignore
const element_9 = new Element('<section>', '.classic-theme--section','#262626');
//prettier-ignore
const element_10 = new Element('.p-section', '.classic-theme--p-section', '#D1D1D1');
const element_11 = new Element('<div>', '.classic-theme--div', '#F2F5F5');
const element_12 = new Element('<i>', '.classic-theme--i', '#262626');
const element_13 = new Element('<footer>', '.classic-theme--footer', '#262626');

const App = class {
  constructor() {
    console.log(Element.getInstances());
  }
};

const runApp = new App();
