import React from 'react';
import Body from './TableBody';

describe('Table Body component', () => {
  it.each`
    props                                                                                                             | msg
    ${{}}                                                                                                             | ${'is created with no props'}
    ${{ rows: [{data:['test']}] }}                                                                                           | ${'is created with rows'}
    ${{ rows: [{data:['test']}], className: { row: 'customRowClass', container: 'customBodyClass' } }}                       | ${'is create with rows, className row and container'}
    ${{ rows: [{data:['test']}], className: { row: 'customRowClass', container: 'customBodyClass', withAnimation: true } }}  | ${'is create with rows, className row and container and withAnimation'}
  `('Table Body $msg', ({ props }) => {
    const header = shallow(<Body {...props} />);
    expect(header).toMatchSnapshot();
  });
});
