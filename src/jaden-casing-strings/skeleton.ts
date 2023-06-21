/**
 * Turns string to Jaden Case
 * @param str - input string
 * @returns Jaden Cased string
 */
function toJadenCase(str: string): string {
  const words = str.split(" ");
  let jadenCased = [];

  for (let word of words) {
    jadenCased.push(
      word.substring(0, 1).toUpperCase() +
        word.substring(1, word.length).toLowerCase()
    );
  }

  return jadenCased.join(" ");
}

export default toJadenCase;
