import sortAscending from "./skeleton";

test("basic tests", () => {
  expect(sortAscending([])).toStrictEqual([]);
  expect(sortAscending([1, 8, 2, 4, 3])).toStrictEqual([1, 2, 3, 4, 8]);
  expect(sortAscending([1, 2, 3])).toStrictEqual([1, 2, 3]);
  expect(sortAscending([1])).toStrictEqual([1]);
  expect(sortAscending([-1, -2, -8])).toStrictEqual([-8, -2, -1]);
});
