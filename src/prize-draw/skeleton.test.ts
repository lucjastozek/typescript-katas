import rank from "./skeleton";

test("basic tests", () => {
  expect(
    rank("COLIN,AMANDBA,AMANDAB,CAROL,PauL,JOSEPH", [1, 4, 4, 5, 2, 1], 4)
  ).toBe("PauL");
});
