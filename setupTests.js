import React from 'react';
import Enzyme, { shallow, render, mount, configure } from 'enzyme';
import 'react-native';
import 'react-native-mock-render/mock';
import { JSDOM } from 'jsdom'
import Adapter from 'enzyme-adapter-react-16';
global.document = new JSDOM();
global.window = document.defaultView;
Object.keys(document.defaultView).forEach((property) => {
  if (typeof global[property] === 'undefined') {
    global[property] = document.defaultView[property];
  }
});
configure({adapter: new Adapter()});


Enzyme.configure({ adapter: new Adapter() });
// Make Enzyme functions available in all test files without importing
global.shallow = shallow;
global.render = render;
global.mount = mount;
