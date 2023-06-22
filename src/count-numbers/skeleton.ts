/*
INPUT:
arr - array of numbers and strings
---
OUTPUT:
sum - sum of numbers
-----
DECLARE numbers = []

FOR EACH element of arr DO:
  IF typeOf(element) === number THEN:
    numbers.push(element)
  END IF
END FOR

DECLARE sum = 0

ADD ALL OF THE ELEMENTS OF THE ARRAY AND ASSIGN IT TO SUM

RETURN sum
*/

function countNumbers(arr: (number | string)[]): number {
  let numbers :number[] = [];
  for (let element of arr) {
    if (typeof element === "number") {
      numbers.push(element);
    }
  }
  return numbers.reduce((sum, num) => sum + num, 0);
}

export default countNumbers;

