import React from 'react';
import MedalTableDetails from './MedalTableDetails';
import { medalTableTestData } from '../../test-fixtures/test-data';

describe('<MedalTableDetails />', () => {
  let props;
  beforeEach(() => {
    props = {
      data: medalTableTestData,
      match: {
        params: {
          competitionId: '5151'
        }
      }
    };
  });

  it('should render', () => {
    const wrapper = shallow(<MedalTableDetails {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
  it('should contain a Table', () => {
    const wrapper = shallow(<MedalTableDetails {...props} />);
    const table = wrapper.find('Table');
    expect(table).toHaveLength(1);
  });
  it('should contain a Table Header', () => {
    const wrapper = shallow(<MedalTableDetails {...props} />);
    const tableHeader = wrapper.find('TableHeader');
    expect(tableHeader).toHaveLength(1);
  });
  it('Table Header should contain column names', () => {
    const wrapper = shallow(<MedalTableDetails{...props} />);
    const tableHeader = wrapper.find('TableHeader');
    const expectedColumnNames = ['Athlete', 'Sex', 'Discipline', 'Medal'];
    expect(tableHeader.props().rows).toEqual(['Athlete', 'Sex', 'Discipline', 'Medal']);
  });
  it('should contain a Table Body', () => {
    const wrapper = shallow(<MedalTableDetails {...props} />);
    const tableBody = wrapper.find('Memo(TableBody)');
    expect(tableBody).toHaveLength(1);
  });
  it('Table Body should contain two rows of data', () => {
    const wrapper = shallow(<MedalTableDetails {...props} />);
    const tableBody = wrapper.find('Memo(TableBody)');
    expect(tableBody.props().rows).toHaveLength(2);
  });
  it('Table Rows should be clickable', () => {
    const wrapper = shallow(<MedalTableDetails {...props} />);
    const tableBodyRowsClick = wrapper.find('Memo(TableBody)').simulate('click');
    expect(tableBodyRowsClick).toHaveLength(1);
  });
});
