import * as R from 'ramda';

export const selectKeyAndDirection = (key, descending = false) => (a, b) => {
  return descending ? b[key] - a[key] : a[key] - b[key];
};

/**
 * @param props Object([{ prop: String, sortOrder: 'ascend' | 'descend'}])
 * @returns Array<Object>
 */
export const sortByMultipleKey = (props, data) => {
  return R.sortWith(props.map(({ prop, sortOrder }) => R[sortOrder](R.prop(prop))))(data);
};

export const selectDateKeyAndDirection = (key, descending) => (a, b) =>
  descending ? new Date(b[key]) - new Date(a[key]) : new Date(a[key]) - new Date(b[key]);

export const sortByStartTime = (descending) =>
  selectDateKeyAndDirection('startTime', descending);
export const sortByphaseDateAndTime = (descending) =>
  selectDateKeyAndDirection('phaseDateAndTime', descending);
export const sortByDisciplineOrder = selectKeyAndDirection('disciplineOrder');
export const sortByPhaseOrder = selectKeyAndDirection('primaryPhaseOrder');
export const sortByUnitOrder = selectKeyAndDirection('unitOrder');
export const sortByCombinedPhaseOrder = selectKeyAndDirection('combinedDisciplineOrder');
export const sortByResultOrder = selectKeyAndDirection('resultOrder');
export const sortByPhaseSummaryOrder = selectKeyAndDirection('phaseSummaryOrder');
export const sortByMedalTableOrder = selectKeyAndDirection('eventMedalTableOrder');
export const sortByStartOrder = selectKeyAndDirection('startOrder');
export const sortByIntermediateResultOrder = selectKeyAndDirection('intermediateResultOrder');
export const sortByintermediateOrder = selectKeyAndDirection('intermediateOrder');
export const sortByintermediateOrderDesc = selectKeyAndDirection('intermediateOrder', true);
export const sortByRank = selectKeyAndDirection('rank');
export const sortByTypeId = selectKeyAndDirection('typeId');

export const customPositionSort = (rowA, rowB, columnId) => {
  const [a, b] = [rowA.values[columnId], rowB.values[columnId]];
  const aIsNull = a === null;
  const bIsNull = b === null;
  if (aIsNull && bIsNull) return -1;
  if (aIsNull && !bIsNull) return 1;
  if (bIsNull && !aIsNull) return 0;
  return a - b;
};
