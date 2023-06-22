function encrypt(word: string): string {
  let encrypted = "";
  if (word.length > 0) {
    encrypted += word.charCodeAt(0);
  }

  if (word.length === 1) {
    return encrypted;
  } else if (word.length === 2) {
    encrypted += word[1];
  } else {
    encrypted +=
      word[word.length - 1] + word.substring(2, word.length - 1) + word[1];
  }
  return encrypted;
}
/**
 * Encrypts a string
 * @param str - string to be encrypted
 * @returns encrypted string
 */
function encryptThis(str: string): string {
  if (str.length === 0) {
    return "";
  }

  let encrypted = [];
  let words = str.split(" ");

  for (let word of words) {
    encrypted.push(encrypt(word));
  }
  return encrypted.join(" ");
}

export default encryptThis;
