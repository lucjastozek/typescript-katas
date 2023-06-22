function findInLower(array: string[]): string {
  const alphabet: { [key: string]: string } = {
    a: "b",
    b: "c",
    c: "d",
    d: "e",
    e: "f",
    f: "g",
    g: "h",
    h: "i",
    i: "j",
    j: "k",
    k: "l",
    l: "m",
    m: "n",
    n: "o",
    o: "p",
    p: "q",
    q: "r",
    r: "s",
    s: "t",
    t: "u",
    u: "v",
    v: "w",
    w: "x",
    x: "y",
    y: "z",
    z: "a",
  };

  for (let i = 1; i < array.length; i++) {
    if (alphabet[array[i - 1]] !== array[i]) {
      return alphabet[array[i - 1]];
    }
  }

  return "";
}

/**
 * Finds the missing letter
 * @param array - array of letters
 * @returns the missing letter
 */
function findMissingLetter(array: string[]): string {
  if (array[0].toLowerCase() === array[0]) {
    return findInLower(array);
  } else {
    array = array.map((a) => a.toLowerCase());

    return findInLower(array).toUpperCase();
  }
}

export default findMissingLetter;
