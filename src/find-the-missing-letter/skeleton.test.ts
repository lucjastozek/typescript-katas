import findMissingLetter from "./skeleton";

test("Basic tests", () => {
  expect(findMissingLetter(["a", "b", "d"])).toBe("c");
  expect(findMissingLetter(["a", "c"])).toBe("b");
  expect(findMissingLetter(["A", "B", "D"])).toBe("C");
  expect(findMissingLetter(["A", "C"])).toBe("B");
});
