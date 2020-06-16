import React from 'react';
import cs from 'classnames';

import Cell from './Cell';

import styles from './TableHeader.pcss';

function TableHeader({ rows, hide, className: { row, container } }) {
  return (
    <thead className={cs(styles.container, container, { hide: hide })}>
      <tr className={cs(styles.row, row)}>
        {rows && Array.isArray(rows) && rows.map(renderHeaders)}
      </tr>
    </thead>
  );
}

TableHeader.defaultProps = {
  className: {
    container: '',
    row: ''
  },
  hide: false
};

function renderHeaders(col) {
  const isString = typeof col === 'string';
  const content = isString ? col : col.hasOwnProperty('value') ? col.value : col;
  const key = col.key ? `${col.key}-header` : `${JSON.stringify(content)}-header`;

  return (
    <Cell
      key={key}
      scope="col"
      className={col.className}
      hide={col.hide}
      style={col.style}
      tag="th">
      {content}
    </Cell>
  );
}

export default TableHeader;
