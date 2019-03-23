/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';

import { Image } from '..';

describe('Image Component', () => {
  it('renders as expected', () => {
    const wrapper = shallow(<Image />);
    expect(wrapper).toMatchSnapshot();
  });
});
