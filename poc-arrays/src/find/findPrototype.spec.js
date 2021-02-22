import { equal, fail } from "assert";
import { findPrototype } from "./findPrototype";

describe("Array Find Lab", () => {
  it("should be a function", () => {
    equal(typeof findPrototype, "function");
  });

  it("should receive an array", () => {
    const arrayTest = [];
    try {
      equal(
        findPrototype(arrayTest, () => {}),
        undefined
      );
    } catch (error) {
      fail(error);
    }
  });

  it("should receive a condition", () => {
    const arrayTest = [];
    const condition = () => {};
    try {
      findPrototype(arrayTest, condition);
    } catch (error) {
      fail("Should receive a condition");
    }
  });

  it("should return first element greater than 10", () => {
    const arrayTest = [1, 22, 33];
    const condition = element => element > 10; 
    equal(
      findPrototype(arrayTest, condition),
      22
    );
  });
});
