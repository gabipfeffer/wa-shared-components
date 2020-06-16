export default function qualificationRuleDisplay(ruleCode) {
  if (!ruleCode) return null;

  const parts = ruleCode.split('Q');
  const totalQualifiers = parts[1].replace(',','').replace('q','');

  if (ruleCode.indexOf('1-') !== 0) {
    // format 71.50Q,12q
    const score = parts[0];
    return `Qualifying performance ${score} (Q) or at least ${totalQualifiers} best performers (q)`

  } else if (ruleCode.indexOf('1-') === 0) {
    // format 1-3Q,12q
    const topQualifiers = parts[0].substring(parts[0].indexOf('-')+1);
    return `First ${topQualifiers} in each heat (Q) and the next ${totalQualifiers} fastest (q)`;

  }

  return null;
}
