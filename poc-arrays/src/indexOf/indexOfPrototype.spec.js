import { equal, fail } from "assert";
import { indexOfPrototype } from "./indexOfPrototype";

describe("Array IndexOf Lab", () => {
  it("should be a function", () => {
    equal(typeof indexOfPrototype, "function");
  });

  it("should receive an array", () => {
    const arrayTest = [];
    try {
      equal(
        indexOfPrototype(arrayTest, () => {}),
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
      indexOfPrototype(arrayTest, condition);
    } catch (error) {
      fail("Should receive a condition");
    }
  });

  it("should return index of first element greater than 10", () => {
    const arrayTest = [1, 22, 33];
    const condition = 33;
    equal(indexOfPrototype(arrayTest, condition), 2);
  });

  it("should return -1 if element is not present in the array", () => {
    const arrayTest = [1, 22, 33];
    const condition = 2;
    equal(indexOfPrototype(arrayTest, condition), -1);
  });
});
