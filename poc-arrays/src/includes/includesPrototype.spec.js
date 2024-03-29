import { equal, fail } from "assert";
import { includesPrototype } from "./includesPrototype";

describe("Array Includes Lab", () => {
  it("should be a function", () => {
    equal(typeof includesPrototype, "function");
  });

  it("should receive an array", () => {
    const arrayTest = [];
    try {
      equal(
        includesPrototype(arrayTest, () => {}),
        false
      );
    } catch (error) {
      fail(error);
    }
  });

  it("should receive a condition", () => {
    const arrayTest = [];
    const condition = () => {};
    try {
      includesPrototype(arrayTest, condition);
    } catch (error) {
      fail("Should receive a condition");
    }
  });

  it("should return true if element is present in the array", () => {
    const arrayTest = [1, 22, 33];
    const condition = 22;
    equal(includesPrototype(arrayTest, condition), true);
  });

  it("should return false if element is present in the array", () => {
    const arrayTest = [1, 22, 33];
    const condition = 2;
    equal(includesPrototype(arrayTest, condition), false);
  });
});
