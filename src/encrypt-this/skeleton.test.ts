import encryptThis from "./skeleton";

test("basic tests", () => {
  expect(encryptThis("Hello")).toBe("72olle");
  expect(encryptThis("good")).toBe("103doo");
  expect(encryptThis("hello world")).toBe("104olle 119drlo");
  expect(encryptThis("")).toBe("");
});
