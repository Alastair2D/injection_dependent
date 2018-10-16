import {shallow} from 'enzyme';
import React from 'react';
import ConfirmButton from '../src/ConfirmButton';

describe('ConfirmButton', () => {
  it('renders something', () => {
    let wrapper = shallow(<ConfirmButton />);
    expect(wrapper.length > 0).toBe(true);
  });
});
