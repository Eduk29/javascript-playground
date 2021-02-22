import { equal } from "assert";
import { sortPrototype } from "./sortPrototype";

describe("Array Sort Lab", () => {
  it("should be a function", () => {
    equal(typeof sortPrototype, "function");
  });

  it("may receive an array", () => {
    const arrayTest = [];
    equal(sortPrototype(arrayTest).toString(), [].toString());
  });

  it("should return array sorted by unicode number", () => {
    const arrayTest = [11, 5, 28, 2, 13];
    equal(sortPrototype(arrayTest).toString(), [11, 13, 2, 28, 5].toString());
  });
});
