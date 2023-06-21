/**
 * Sorts the given array ascending
 * @param nums - array of numbers
 * @returns the sorted array
 */
function sortAscending(nums: number[]): number[] {
  const arr = [...nums].sort((a: number, b: number): number => a - b);

  return arr;
}

export default sortAscending;
