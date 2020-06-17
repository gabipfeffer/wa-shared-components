// @flow
import React from 'react';

import s from './MedalBadge.pcss';

function MedalBadge({ medalType }) {
  return <span className={s[`medal-badge-${medalType}`]}>&nbsp;</span>;
}

export default MedalBadge;
