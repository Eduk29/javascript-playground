import { equal } from "assert";
import { reversePrototype } from "./reversePrototype";

describe("Array Reverse Lab", () => {
  it("should be a function", () => {
    equal(typeof reversePrototype, "function");
  });

  it("may receive an array", () => {
    const arrayTest = [];
    equal(reversePrototype(arrayTest).toString(), [].toString());
  });

  it("should return a copy of original array with positions reversed", () => {
    const arrayTest = [1, 2, 3];
    equal(reversePrototype(arrayTest).toString(), [3, 2, 1].toString());
  });
});
