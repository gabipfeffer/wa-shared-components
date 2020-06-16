import React from 'react';
import cs from 'classnames';
import isArrayWithData from '../../utils/isArrayWithData';
import s from './TableBody.pcss';
import MobileCollapsibleRow from './MobileCollapsibleRow';
import Row from './Row';

export function TableBody({ rows, className, rowClickHandler, isMobile }) {

  return (
    <tbody className={className.container}>
      {isArrayWithData(rows) &&
        rows.map((row, index) => {
          return (row.mobileCollapsibleContent ? (
            <MobileCollapsibleRow
              key={index}
              row={row}
              className={className.row}
              isMobile={isMobile}
              rowClickHandler={rowClickHandler}
            />
            ) : (
              <Row
                key={index}
                row={row}
                rowClickHandler={rowClickHandler}
                isMobile={isMobile}
                className={cs(className.row, s[row.styleClass])} />
            )
          )
        })}
    </tbody>
  );
}

TableBody.defaultProps = {
  className: {
    container: '',
    row: ''
  }
};

export default React.memo(TableBody);
