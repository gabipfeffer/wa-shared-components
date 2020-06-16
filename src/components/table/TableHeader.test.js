import React from 'react';
import Header from './TableHeader';

describe('Table Header component', () => {
  it.each`
    props                                                                         | msg
    ${{}}                                                                         | ${'is created with no props'}
    ${{ rows: ['test'] }}                                                         | ${'is created with rows'}
    ${{ className: { row: 'customRowClass', container: 'customBodyContainer' } }} | ${'is create with className row and container'}
  `('Header $msg', ({ props }) => {
    const header = shallow(<Header {...props} />);
    expect(header).toMatchSnapshot();
  });
});
