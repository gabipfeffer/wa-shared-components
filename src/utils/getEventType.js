export function getEventTypeClass(isTrack, isField, isRoad, isCombined) {
  if (isTrack) {
    return 'isTrack';
  }
  if (isField) {
    return 'isField';
  }
  if (isRoad) {
    return 'isRoad';
  }
  if (isCombined) {
    return 'isCombined';
  }
  return ''
}



export function getEventType(d) {
  // Lots of data has null when track should be true.
  // this results in the same as if it were
  if (!d.isField && !d.isRoad && !d.isCombined) {
    return 'isTrack';
  }
  if (d.isField) {
    return 'isField';
  }
  if (d.isRoad) {
    return 'isRoad';
  }
  if (d.isCombined) {
    return 'isCombined';
  }
    return ''
}
