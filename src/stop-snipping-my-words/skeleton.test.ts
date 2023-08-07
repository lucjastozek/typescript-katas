import spinWords from "./skeleton";

test("basic tests", () => {
  expect(spinWords("Hey fellow warriors")).toBe("Hey wollef sroirraw");
  expect(spinWords("This is a test")).toBe("This is a test");
  expect(spinWords("This is another test")).toBe("This is rehtona test");
  expect(spinWords("")).toBe("");
  expect(spinWords("parameter")).toBe("retemarap");
  expect(spinWords("a parameter")).toBe("a retemarap");
});
