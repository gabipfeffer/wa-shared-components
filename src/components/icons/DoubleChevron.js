// @flow
import React from 'react';

import s from './DoubleChevron.pcss';


const first =
  'M8.9,0L8.9,0c0,0-0.3,0.3-0.8,0.8c0.7,0.7,1.8,1.8,3.1,3L15,7.6l-3.8,3.8l-3.1,3l0.8,0.8l3.8-3.8l3.8-3.8l-3.8-3.8C10.6,1.7,9,0,8.9,0z';
const second =
  'M0.8,0L0.8,0c0,0-0.3,0.3-0.8,0.8c0.7,0.7,1.8,1.8,3.1,3l3.8,3.8l-3.8,3.8l-3.1,3l0.8,0.8l3.8-3.8l3.8-3.8L4.6,3.8C2.4,1.7,0.8,0,0.8,0z';

function DoubleChevron({ color, size, id }) {
  return (
    <i className={s.container} style={{ color }} id={id}>
      <svg
        id={id}
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        fill={color ? color : 'currentColor'}
        viewBox="0 0 16.6 15.2">
        <g>
          <g transform="translate(0)">
            <path fill={color} d={first} />
          </g>
        </g>
        <g>
          <g transform="translate(0)">
            <path fill={color} d={second} />
          </g>
        </g>
      </svg>
    </i>
  );
}

DoubleChevron.defaultProps = {
  size: 13,
  color: '#129B7D'
};

export default DoubleChevron;
