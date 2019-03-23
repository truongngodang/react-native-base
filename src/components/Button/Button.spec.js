/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';

import { Button } from '..';

describe('Button Component', () => {
  it('renders as expected', () => {
    const wrapper = shallow(<Button />);
    expect(wrapper).toMatchSnapshot();
  });
});
