import { equal, fail } from "assert";
import { lastIndexOfPrototype } from "./lastIndexOfPrototype";

describe("Array LastIndexOf Lab", () => {
  it("should be a function", () => {
    equal(typeof lastIndexOfPrototype, "function");
  });

  it("should receive an array", () => {
    const arrayTest = [];
    try {
      equal(
        lastIndexOfPrototype(arrayTest, () => {}),
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
      lastIndexOfPrototype(arrayTest, condition);
    } catch (error) {
      fail("Should receive a condition");
    }
  });

  it("should return index of first element greater than 10", () => {
    const arrayTest = [1, 22, 33, 1];
    const condition = 1;
    equal(lastIndexOfPrototype(arrayTest, condition), 3);
  });

  it("should return -1 if element is not present in the array", () => {
    const arrayTest = [1, 22, 33];
    const condition = 2;
    equal(lastIndexOfPrototype(arrayTest, condition), -1);
  });
});
