import React from 'react';
import ArrowSvg from './ArrowSvg';

describe('ArrowSvg component', () => {
  it('render correctly with default props', () => {
    const wrapper = shallow(<ArrowSvg />);
    expect(wrapper).toMatchSnapshot();
  });

  it('is created with red color and up true', () => {
    const wrapper = shallow(<ArrowSvg up color={'red'} />);
    expect(wrapper).toMatchSnapshot();
  });
});
