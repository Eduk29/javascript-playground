import { equal } from "assert";
import { somePrototype } from "./somePrototype";

describe("Array Some Lab", () => {
  it("should be a function", () => {
    equal(typeof somePrototype, "function");
  });

  it("may receive an array", () => {
    const arrayTest = [];
    equal(somePrototype(arrayTest).toString(), [].toString());
  });

  it("should return true if some element in array satisfies the condition", () => {
    const arrayTest = [1, 5, 8, 22, 33];
    const condition = (item) => item > 10;
    equal(somePrototype(arrayTest, condition), true);
  });

  it("should return false if some element in array satisfies the condition", () => {
    const arrayTest = [1, 5, 8, 22, 33];
    const condition = (item) => item > 50;
    equal(somePrototype(arrayTest, condition), false);
  });
});
