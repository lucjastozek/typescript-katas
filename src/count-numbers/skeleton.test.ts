import countNumbers from "./skeleton";

test("basic tests", () => {
  expect(countNumbers([-2, -2, "ukulele", "bottle"])).toBe(-4);
  expect(countNumbers(["ukulele", "bottle"])).toBe(0);
  expect(countNumbers([])).toBe(0);
  expect(countNumbers([2, 2, 4])).toBe(8);
});
