import React from 'react';
import Table from './Table';

describe('Table component', () => {
  it('render correctly with className test', () => {
    const table = shallow(<Table className="test" />);
    expect(table.props().className.split(' ')[1]).toEqual(`test`);
    expect(table).toMatchSnapshot();
  });

  it('is created with no props', () => {
    const table = shallow(<Table />);
    expect(table).toBeDefined();
  });

  it('is created with children', () => {
    const table = shallow(
      <Table>
        <div>Test</div>
      </Table>
    );
    expect(table).toMatchSnapshot();
  });
});
