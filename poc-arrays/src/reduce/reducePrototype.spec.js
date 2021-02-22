import { equal } from "assert";
import { reducePrototype } from "./reducePrototype";

describe("Array Reduce Lab", () => {
  it("should be a function", () => {
    equal(typeof reducePrototype, "function");
  });

  it("may receive an array", () => {
    const arrayTest = [];
    equal(reducePrototype(arrayTest).toString(), [].toString());
  });

  it("should return an reduced value according to reducerFunction", () => {
    const arrayTest = [1, 2, 3];
    const reduceFunction = (acc, current) => acc + current;
    equal(reducePrototype(arrayTest, reduceFunction), 6);
  });
});
