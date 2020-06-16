// @flow
import React from 'react';
import cs from 'classnames';

import s from './Arrow.pcss';

const arrowPath =
  'M317.256 354.744l-90.512 90.512 285.256 285.254 285.254-285.256-90.508-90.508-194.746 194.744z';

export default function ArrowSvg({ color, up, id, classNames }) {
  return (
    <i
      className={cs(s.arrow, { [s.up]: up, [s.down]: !up, classNames: classNames })}
      style={{ color }}
      id={id}>
      <svg
        id={id}
        xmlns="http://www.w3.org/2000/svg"
        width="34"
        height="34"
        fill={color ? color : 'currentColor'}
        viewBox="0 0 1024 1024">
        <path id={id} d={arrowPath} />
      </svg>
    </i>
  );
}

ArrowSvg.defaultProps = {
  up: false
};
