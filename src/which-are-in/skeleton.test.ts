import inArray from "./skeleton";

test("basic tests", () => {
  expect(
    inArray(
      ["arp", "live", "strong"],
      ["lively", "alive", "harp", "sharp", "armstrong"]
    )
  ).toEqual(["arp", "live", "strong"]);
  expect(
    inArray(
      ["tarp", "mice", "bull"],
      ["lively", "alive", "harp", "sharp", "armstrong"]
    )
  ).toEqual([]);
});
