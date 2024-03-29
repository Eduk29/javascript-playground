import { equal, fail } from "assert";
import { everyPrototype } from "./everyPrototype";

describe("Array Every Lab", () => {
  it("should be a function", () => {
    equal(typeof everyPrototype, "function");
  });

  it("should receive an array", () => {
    const arrayTest = [];
    try {
      equal(
        everyPrototype(arrayTest, () => {}),
        true
      );
    } catch (error) {
      fail("Should receive an array");
    }
  });

  it("should receive an condition", () => {
    const arrayTest = [];
    try {
      everyPrototype(arrayTest, () => {});
    } catch (error) {
      fail("Should receive a condition");
    }
  });

  it("should return true if item < 10", () => {
    const arrayTest = [11, 22, 33];
    equal(
      everyPrototype(arrayTest, (element) => element > 10),
      true
    );
  });

  it("should return false if item > 10", () => {
    const arrayTest = [1, 22, 33];
    equal(
      everyPrototype(arrayTest, (element) => element > 10),
      false
    );
  });
});
