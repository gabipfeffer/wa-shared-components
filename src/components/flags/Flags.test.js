import React from 'react';
import Flags from './Flags';

describe('Flags component', () => {
  it('render correctly with default props', () => {
    const wrapper = shallow(<Flags />);
    expect(wrapper).toMatchSnapshot();
  });
  it('render correctly when column is false', () => {
    const wrapper = shallow(<Flags flagName={'AFG'} column={false}>AFG</Flags>);
  });
  it('is created with FLAG AFG and column true', () => {
    const wrapper = shallow(
      <Flags flagName={'AFG'} column>AFG</Flags>
    );
    expect(wrapper.find('span').at(1).text()).toBe('AFG');
  });
});
