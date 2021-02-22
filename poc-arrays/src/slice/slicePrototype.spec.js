import { equal } from "assert";
import { slicePrototype } from "./slicePrototype";

describe("Array Slice Lab", () => {
  it("should be a function", () => {
    equal(typeof slicePrototype, "function");
  });

  it("may receive an array", () => {
    const arrayTest = [];
    equal(slicePrototype(arrayTest).toString(), [].toString());
  });

  it("should return a copy of original array", () => {
    const arrayTest = [1, 2, 3];
    equal(slicePrototype(arrayTest).toString(), [1, 2, 3].toString());
  });

  it("should return a copy of original array with positions 2 and 3", () => {
    const arrayTest = [1, 2, 3];
    equal(slicePrototype(arrayTest, 1).toString(), [2, 3].toString());
  });

  it("should return a copy of original array with positions 1 and 2", () => {
    const arrayTest = [1, 2, 3, 4];
    equal(slicePrototype(arrayTest, 0, 2).toString(), [1, 2].toString());
  });
});
