// @flow
import React from 'react';
import cs from 'classnames';

import s from './Table.pcss';

type Props = {
  children?: any,
  className?: string,
  theme?: string
};

function Table({ children, className, theme }: Props) {
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
