import { equal, fail } from "assert";
import { filterPrototype } from "./filterPrototype";

describe("Array Filter Lab", () => {
  it("should be a function", () => {
    equal(typeof filterPrototype, "function");
  });

  it("should receive an array", () => {
    const arrayTest = [];
    try {
      equal(filterPrototype(arrayTest, () => {}).toString(), [].toString());
    } catch (error) {
      fail(error);
    }
  });

  it("should receive a condition", () => {
    const arrayTest = [];
    const condition = () => {};

    equal(filterPrototype(arrayTest, () => {}).toString(), [].toString());
  });

  it("should return elements greater than 10", () => {
    const arrayTest = [1, 22, 33];
    const condition = (element) => element > 10;
    equal(
      filterPrototype(arrayTest, condition).toString(),
      [22, 33].toString()
    );
  });
});
