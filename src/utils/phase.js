//@flow
import phaseNameEnum from '../types/phaseNameEnum';
import phaseCodeEnum from '../types/phaseCodeEnum';
import unitTypeNamesEnum from '../types/unitTypeNamesEnum';

export function shortPhaseName(phaseName) {
  return phaseNameEnum[phaseName.toUpperCase()];
}

export function fullUnitName(unit, phase) {
  if (phase.isCombined) return `${unitTypeNamesEnum[unit.unitType]} ${unit.unitName}`;
  if (phase.phaseCode === phaseCodeEnum.FINAL) return 'Final';

  return `${phase.phaseName} ${unitTypeNamesEnum[unit.unitType]} ${unit.unitName}`;
}
