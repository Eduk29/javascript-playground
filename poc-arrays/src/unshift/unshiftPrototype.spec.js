import { equal } from "assert";
import { unshiftPrototype } from "./unshiftPrototype";

describe("Array Unshift Lab", () => {
  it("should be a function", () => {
    equal(typeof unshiftPrototype, "function");
  });

  it("may receive an array", () => {
    const arrayTest = [];
    equal(unshiftPrototype(arrayTest).toString(), [].toString());
  });

  it("should return the length of new array", () => {
    const arrayTest = [11, 5, 28, 2, 13];
    const itemsToAdd = [20];
    equal(unshiftPrototype(arrayTest, itemsToAdd), 6);
  });
});
