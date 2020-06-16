// @flow
import React, { useCallback, isValidElement } from 'react';
import cs from 'classnames';

import noop from '../../utils/noop';

import Cell from './Cell';

import s from './Row.pcss';

type Props = {
  row: Object,
  rowClickHandler: function,
  isMobile: boolean,
  className: string | Object
}

function Row({ row, rowClickHandler, isMobile, className }: Props) {
  return (
    <>
      <tr
        className={cs(s.row, className, row.rowClass)}
        onClick={(e) => {
          rowClickHandler && rowClickHandler(e, row.linkUrl, row.rowClickHandler)
        }}>
        {renderCells(row)}
      </tr>
    </>
  );

  function renderCells({ linkUrl, data }) {
    return data.map((col) => {
      const content = getContent(col);
      const showMobile = col.hasOwnProperty('mobile') && isMobile;
      const hasLink = !!linkUrl ? 'hasLink' : '';
      return (
        <Cell
          key={col.key}
          className={cs(col.className, { [s[hasLink]]: hasLink })}
          hide={col.hide}
          style={col.style || {}}>
          {showMobile ? col.mobile : content}
        </Cell>
      );
    });
  }

  function getContent(item) {
    let content = null;
    const isReactElement = isValidElement(item);

    if (isReactElement) {
      content = item;
    } else if (typeof item === 'string') {
      content = item;
    } else if (typeof item === 'object' && item.hasOwnProperty('value')) {
      content = item.value;
    }

    return content;
  }
}

export default Row;
