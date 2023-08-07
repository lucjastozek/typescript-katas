/**
 * Returns the middle character of the given word
 * @param s - string to look for the middle character
 * @returns the middle character
 */
function getMiddle(s: string): string {
  const len = s.length;

  if (len % 2 === 1) {
    return s[Math.floor(len / 2)];
  } else {
    return s[Math.floor(len / 2) - 1] + s[Math.floor(len / 2)];
  }
}

export default getMiddle;
