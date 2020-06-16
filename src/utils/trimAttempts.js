export default function trimAttempts(str) {
  if (str && typeof str === 'string') {
    const [key, val] = str.split(' ');
    if (key === 'Attempt') {
      return `Att. ${val}`;
    }
  }

  return str;
}
