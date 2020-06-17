export function sortLowHigh(dataArray, prop) {
  return dataArray.sort((a, b) => (a[prop] > b[prop]) ? 1 : -1);
}

export function sortHighLow(dataArray, prop) {
  return dataArray.sort((a, b) => (a[prop] < b[prop]) ? 1 : -1);
}
