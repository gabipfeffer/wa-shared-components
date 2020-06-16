export default function phaseNameAndUnitName(phaseName, phaseCode, unitName) {
  if (phaseCode === 'h') {
    return `${phaseName} - Heat ${unitName}`
  }
  else if (phaseCode === 'q') {
    return `${phaseName} - Group ${unitName}`
  }
  else if (phaseCode === 'f') {
    return phaseName
  }
  return `${phaseName} - ${unitName}`
}
