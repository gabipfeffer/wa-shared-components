export function mapByGroup(groupKey) {
  return (acc, cur) => {
    const mapKey = cur[groupKey];
    if (mapKey) {
      if (acc[mapKey]) acc[mapKey].push(cur);
      else {
        acc[mapKey] = [];
        acc[mapKey].push(cur);
      }
    }
    return acc;
  }
}
