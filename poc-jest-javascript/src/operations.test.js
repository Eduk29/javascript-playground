import { sum, sub, mul, div } from "./operations";

describe("Testing sum function", () => {
  it("Add 1 + 2 to equal 3", () => {
    expect(sum(1, 2)).toBe(3);
  });
});

describe("Testing sub function", () => {
  it("Add 2 - 1 to equal 1", () => {
    expect(sub(2, 1)).toBe(1);
  });
});

describe("Testing mul function", () => {
  it("Add 2 * 2 to equal 4", () => {
    expect(mul(2, 2)).toBe(4);
  });
});

describe("Testing div function", () => {
  it("Add 2 / 2 to equal 1", () => {
    expect(div(2, 2)).toBe(1);
  });
});