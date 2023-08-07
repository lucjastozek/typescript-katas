import getMiddle from "./skeleton";

test("basic tests", () => {
  expect(getMiddle("test")).toBe("es");
  expect(getMiddle("testing")).toBe("t");
  expect(getMiddle("middle")).toBe("dd");
  expect(getMiddle("A")).toBe("A");
  expect(getMiddle("kayak")).toBe("y");
});
