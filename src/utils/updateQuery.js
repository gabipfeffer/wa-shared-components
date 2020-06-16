import { pathOr } from 'ramda';

import getFeatureFlag from '../../../importer/src/utils/featureFlag';

export default function updateQuery(fn, path) {
  return (prev, { subscriptionData }) => {
    if (!prev || !subscriptionData.data) return prev;
    if (getFeatureFlag('DEBUG_MODE')) console.log(subscriptionData);

    return fn(prev, pathOr(null, path, subscriptionData.data));
  };
}
