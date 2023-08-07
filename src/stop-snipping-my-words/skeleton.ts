/**
 * Reverses a word
 * @param word - string
 * @returns reversed word
 */
function reverseWord(word: string): string {
  let reversed = "";

  for (let i = word.length - 1; i >= 0; i--) {
    reversed += word[i];
  }

  return reversed;
}

/**
 * Reverses all five or more letter words
 * @param words - string of words
 * @returns string with reversed five or more letter words
 */
function spinWords(words: string): string {
  const wordList: string[] = words.split(" ");
  const spinnedWords: string[] = [];

  for (const word of wordList) {
    if (word.length < 5) {
      spinnedWords.push(word);
    } else {
      spinnedWords.push(reverseWord(word));
    }
  }

  return spinnedWords.join(" ");
}

export default spinWords;
