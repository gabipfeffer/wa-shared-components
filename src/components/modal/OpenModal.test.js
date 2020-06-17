import React from 'react';
import OpenModal from './OpenModal';

const props = {
  children: <h1>Hello World!</h1>,
  title: 'test',
  customWidth: 700
};

describe('Modal', () => {
  it('should contain a react modal component', () => {
    const wrapper = shallow(<OpenModal {...props} />);
    expect(wrapper.find('Modal')).toHaveLength(1);
  });
  it('should render a close button', () => {
    const wrapper = shallow(<OpenModal {...props} />);
    const button = wrapper.find('button')
    expect(button).toHaveLength(1);
  });
  it('button should have an X', () => {
    const wrapper = shallow(<OpenModal {...props} />);
    const button = wrapper.find('button').text();
    expect(button).toBe('X');
  });
  it('button should be clickable', () => {
    const wrapper = shallow(<OpenModal {...props} />);
    const button = wrapper.find('button').simulate('click');
    expect(button).toBeTruthy();
  });
  it('should render a modal title', () => {
    const wrapper = shallow(<OpenModal {...props} />);
    const title = wrapper.find('h1').at(0).props().className;
    expect(title).toBe('modal-title');
  });
  it('should render modal content', () => {
    const wrapper = shallow(<OpenModal {...props} />);
    const content = wrapper.find('div').props().className;
    expect(content).toBe('modal-content');
  });
  it('should contain children', () => {
    const wrapper = shallow(<OpenModal {...props} />);
    expect(
      wrapper
        .find('h1')
        .at(1)
        .text()
    ).toBe('Hello World!');
  });
});
