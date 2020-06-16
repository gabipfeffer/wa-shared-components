// @flow
import React from 'react';

import s from './DoubleChevron.pcss';


const closeIcon =
  'M512 439.603l-362.035-362.035-72.397 72.397 362.035 362.035-362.035 362.035 72.397 72.397 362.035-362.035 362.035 362.035 72.397-72.397-362.035-362.035 362.035-362.035-72.397-72.397-362.035 362.035z';

function CloseIcon({ color, size, id, scale }) {
  return (
    <i className={s.container} style={{ color, width: size, height: size }} id={id}>
      <svg
        id={id}
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        fill={color ? color : 'currentColor'}
        viewBox={`0 0 ${size} ${size}`}>
        <g transform={`scale(${scale} ${scale})`}>
          <path d={closeIcon} />
        </g>
      </svg>
    </i>
  );
}

CloseIcon.defaultProps = {
  size: 20,
  scale: 0.01953125,
  color: '#ed1c24'
};

export default CloseIcon;
