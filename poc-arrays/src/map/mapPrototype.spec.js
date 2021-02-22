import { equal } from "assert";
import { mapPrototype } from "./mapPrototype";

describe("Array Map Lab", () => {
  it("should be a function", () => {
    equal(typeof mapPrototype, "function");
  });

  it("may receive an array", () => {
    const arrayTest = [];
    equal(mapPrototype(arrayTest).toString(), [].toString());
  });

  it("should return an array", () => {
    const arrayTest = [1, 2, 3];
    equal(mapPrototype(arrayTest) instanceof Array, true);
  });

  it("should multiply items by 2", () => {
    const arrayTest = [1, 2, 3];
    equal(mapPrototype(arrayTest).toString(), [2, 4, 6]);
  });
});
