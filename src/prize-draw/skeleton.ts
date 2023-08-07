function getRankFromLetter(letter: string): number {
  return letter.toLowerCase().charCodeAt(0) - 96;
}

function rank(names: string, weights: number[], n: number): string {
  if (names === "") {
    return "No participants";
  }

  const namesArr = names.split(",");

  if (n > namesArr.length) {
    return "Not enough participants";
  }

  const participants: [string, number][] = [];

  for (let i = 0; i < namesArr.length; i++) {
    const name = namesArr[i];

    let som = name.length;

    for (const letter of name) {
      som += getRankFromLetter(letter);
    }

    const winningNum = som * weights[i];

    participants.push([name, winningNum]);
  }

  participants.sort((a, b) => {
    if (b[1] > a[1]) {
      return 1;
    } else if (b[1] === a[1]) {
      return b[0] > a[0] ? -1 : 1;
    } else {
      return -1;
    }
  });

  return participants[n - 1][0];
}

export default rank;
