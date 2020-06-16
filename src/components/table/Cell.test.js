import React from 'react';
import Cell from './Cell';

describe('Cell Component', () => {
  it.each`
    props                                                 | msg                                      | expected
    ${{ tag: undefined, children: 'string' }}             | ${'default props'}                       | ${{ tag: 'td', children: 'string', className: '' }}
    ${{ tag: 'th', children: 1 }}                         | ${'tag th'}                              | ${{ tag: 'th', children: 1, className: '' }}
    ${{ className: 'test', children: <span>test</span> }} | ${'className test and costum component'} | ${{ tag: 'td', children: <span>test</span>, className: 'test' }}
    ${{ className: 'test', children: <span>test</span> }} | ${'className test and costum component'} | ${{ tag: 'td', children: <span>test</span>, className: 'test', linkUrl: true }}
  `('mount with $msg', ({ props, expected }) => {
    const wrapper = mount(componentWithProps(props));
    const componentProps = wrapper.find(Cell).props();

    expect(componentProps.tag).toEqual(expected.tag);
    expect(componentProps.children).toEqual(expected.children);
    expect(componentProps.className).toEqual(expected.className);
  });

  function componentWithProps({ children, ...rest } = {}) {
    return (
        <table>
          <tbody>
            <tr>
              <Cell {...rest}>{children}</Cell>
            </tr>
          </tbody>
        </table>
    );
  }
});
