import { shallow } from 'enzyme';
import React from 'react';
import { Image } from 'react-native';
import BodyImages from '../components/BodyImages';

describe('BodyImages', () => {
  it('renders an image', () => {
    const bi = shallow(<BodyImages />);
    expect(bi.containsMatchingElement(<Image />)).toEqual(true);
  });
});
