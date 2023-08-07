/**
 * Checks if word is a substring of any substring from an array
 * @param word - string
 * @param arr - array of strings
 * @returns true if word is a substring, returns false if it's not
 */
function isSubstringOfArray(word: string, arr: string[]): boolean {
  for (const str of arr) {
    if (str.includes(word)) {
      return true;
    }
  }

  return false;
}

/**
 * Given two arrays of strings a1 and a2 return a sorted array r in lexicographical order of the strings of a1 which are substrings of strings of a2.
 * @param a1 - array of strings
 * @param a2 - array of strings
 * @returns sorted array of strings of a1 which are substrings of strings of a2
 */
function inArray(a1: string[], a2: string[]): string[] {
  const r: string[] = [];

  for (const word of a1) {
    if (isSubstringOfArray(word, a2)) {
      r.push(word);
    }
  }
  return r.sort();
}

export default inArray;
