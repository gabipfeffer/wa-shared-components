export type LiveProgress = '' | 'decrease' | 'increase' | 'equal';

export default function compareProgress(prev: number, next: number): LiveProgress {
  if (!Boolean(prev) || !Boolean(next)) return '';
  else if (prev < next) return 'decrease';
  else if (prev > next) return 'increase';
  return 'equal';
}
