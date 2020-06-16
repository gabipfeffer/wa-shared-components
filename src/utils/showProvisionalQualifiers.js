export default function showProvisionalQualifiers(phaseCode) {
  const phases = ['sf', 'h', 'q', 'pr'];
  return phases.includes(phaseCode);
}
