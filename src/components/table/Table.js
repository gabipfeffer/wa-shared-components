// @flow
import React from 'react';
import cs from 'classnames';

import s from './Table.pcss';

function Table({ children, className, theme }) {
  return (
    <table className={cs(s.table, className, s[theme])} cellPadding={0}>
      {children}
    </table>
  );
}

Table.defaultProps = {
  className: '',
  theme: 'standard'
}

export default Table;
