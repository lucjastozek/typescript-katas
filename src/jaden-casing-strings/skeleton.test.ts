import toJadenCase from "./skeleton";

test("basic tests", () => {
  expect(toJadenCase("underneath the moonlight")).toBe(
    "Underneath The Moonlight"
  );
  expect(toJadenCase("")).toBe("");
  expect(toJadenCase("together, we'll sail across the sea")).toBe(
    "Together, We'll Sail Across The Sea"
  );
});
