// @flow
import React from 'react';
import cs from 'classnames';
import isArrayWithData from '../../utils/isArrayWithData';
import s from './TableBody.pcss';
import MobileCollapsibleRow from './MobileCollapsibleRow';
import Row from './Row';

type Props = {
  rows: Array<?Content>,
  isMobile: boolean,
  rowClickHandler?: Function,
  className: {
    row: string,
    container: string
  }
};
type ObjContent = {
  value: string | number | Object,
  className: string,
  hide: Array<'mobile' | 'tablet' | 'desktop'>,
  style: Object,
  mobileCollapsibleContent: any
};
type Content = string | number | ObjContent;

export function TableBody({ rows, className, rowClickHandler, isMobile }: Props) {

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
