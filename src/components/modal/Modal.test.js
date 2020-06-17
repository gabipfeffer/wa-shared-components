import React from 'react';
import Modal from './Modal';
import ReactModal from 'react-modal';

const props = {
  children: <h1>Hello World!</h1>,
  title: 'test',
  content: <p>Ipsum Lorem</p>,
  customWidth: 700
};

describe('Modal', () => {
  let props;
  beforeEach(() => {
    props = {
      children: <h1>Hello World!</h1>,
      title: 'test',
      content: <p>Ipsum Lorem</p>,
      customWidth: 700
    };
  });

  it('should render a div', () => {
    const wrapper = shallow(<Modal {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
  it('the div should be clickable', () => {
    const wrapper = shallow(<Modal {...props} />);
    const click = wrapper.find('div').simulate('click');
    expect(click).toBeTruthy();
  });
  it('should contain children', () => {
    const wrapper = shallow(<Modal {...props} />);
    expect(wrapper.find('h1').text()).toBe('Hello World!');
  });
  it('should contain a react modal component', () => {
    const wrapper = mount(
      <ReactModal>
        <Modal {...props} />
      </ReactModal>
    );
    expect(wrapper).toMatchSnapshot();
  });
  it('the react modal should contain content', () => {
    const wrapper = mount(
      <ReactModal>
        <Modal {...props} />
      </ReactModal>
    );
    expect(wrapper.props().children.props.content.props.children).toBe('Ipsum Lorem');
  });
});
