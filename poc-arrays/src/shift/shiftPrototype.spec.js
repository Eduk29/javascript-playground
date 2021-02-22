import { equal } from "assert";
import { shiftPrototype } from "./shiftPrototype";

describe("Array Reverse Lab", () => {
  it("should be a function", () => {
    equal(typeof shiftPrototype, "function");
  });

  it("may receive an array", () => {
    const arrayTest = [];
    equal(shiftPrototype(arrayTest), undefined);
  });

  it("should return a copy of original array with positions reversed", () => {
    const arrayTest = [1, 2, 3];
    equal(shiftPrototype(arrayTest), 1);
  });
});
