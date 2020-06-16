import React from 'react';
import cs from 'classnames';

import flagStyles from './flagStyles.pcss';
import s from './Flags.pcss';

type Props = {
  flagName: string,
  column: boolean,
  hideText: boolean,
  withTitle?: string
};

function Flags({ flagName, column, withTitle, hideText }: Props) {
  if (withTitle) {
    return (
      <div>
        <h2>
          {withTitle} <i className={cs(s.icon, flagStyles[`icon-flag-${flagName}`])} />
        </h2>
      </div>
    );
  }
  return (
    <span
      className={cs(s.container, { [s.column]: column })}
      style={hideText ? { width: 'auto' } : {}}>
      {hideText ? null : <span>{flagName}</span>}
      <i className={cs(s.icon, flagStyles[`icon-flag-${flagName}`])} />
    </span>
  );
}

Flags.defaultProps = {
  flagName: '',
  column: false,
  hideText: false
};

export default Flags;
