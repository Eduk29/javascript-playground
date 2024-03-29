import { equal, fail } from "assert";
import { findIndexPrototype } from "./findIndexPrototype";

describe("Array Find Index Lab", () => {
  it("should be a function", () => {
    equal(typeof findIndexPrototype, "function");
  });

  it("should receive an array", () => {
    const arrayTest = [];
    try {
      equal(
        findIndexPrototype(arrayTest, () => {}),
        -1
      );
    } catch (error) {
      fail(error);
    }
  });

  it("should receive a condition", () => {
    const arrayTest = [];
    const condition = () => {};
    try {
      findIndexPrototype(arrayTest, condition);
    } catch (error) {
      fail("Should receive a condition");
    }
  });

  it("should return index of first element greater than 10", () => {
    const arrayTest = [1, 22, 33];
    const condition = (element) => element > 10;
    equal(findIndexPrototype(arrayTest, condition), 1);
  });

  it("should return -1 if element is not present in the array", () => {
    const arrayTest = [1, 22, 33];
    const condition = (element) => element > 35;
    equal(findIndexPrototype(arrayTest, condition), -1);
  });
});
