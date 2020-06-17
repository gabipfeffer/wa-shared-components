// @flow
import React from 'react';

import s from './SexBadge.pcss';

function SexBadge({ sex }) {
  return <span className={s[`sex-badge-${sex.toLowerCase()}`]}>{sex}</span>;
}

export default SexBadge;
