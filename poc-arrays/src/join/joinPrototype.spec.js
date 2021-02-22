import { equal, fail } from "assert";
import { joinPrototype } from "./joinPrototype";

describe("Array Join Lab", () => {
  it("should be a function", () => {
    equal(typeof joinPrototype, "function");
  });

  it("should receive an array", () => {
    const arrayBase = [];
    try {
      equal(joinPrototype(arrayBase, "").toString(), [].toString());
    } catch (error) {
      fail(error);
    }
  });

  it("should return with array joined", () => {
    const arrayBase = [11, 22, 33];
    const separator = "-";
    equal(joinPrototype(arrayBase, separator), "11-22-33");
  });
});
