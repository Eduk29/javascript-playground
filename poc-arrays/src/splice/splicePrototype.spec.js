import { equal } from "assert";
import { splicePrototype } from "./splicePrototype";

describe("Array Splice Lab", () => {
  it("should be a function", () => {
    equal(typeof splicePrototype, "function");
  });

  it("may receive an array", () => {
    const arrayTest = [];
    equal(splicePrototype(arrayTest).toString(), [].toString());
  });

  it("should return array with positions 2 and 3", () => {
    const arrayTest = [11, 5, 28, 2, 13];
    const indexToDelete = 1;
    const deleteCount = 2;
    equal(
      splicePrototype(arrayTest, indexToDelete, deleteCount).toString(),
      [5, 28].toString()
    );
  });

  it("should return array with positions 1, 4 and 5", () => {
    const arrayTest = [11, 5, 28, 2, 13];
    const indexToDelete = 1;
    const deleteCount = 2;

    splicePrototype(arrayTest, indexToDelete, deleteCount);

    equal(arrayTest.toString().replace(",,", ","), [11, 2, 13].toString());
  });

  it("should return array with positions 1, 4 and 5, but with 2 items inserted in positions 2 and 3", () => {
    const arrayTest = [11, 5, 28, 2, 13];
    const indexToDelete = 1;
    const deleteCount = 2;
    const itemsToAdd = ["Potato", "Sonora"];

    splicePrototype(arrayTest, indexToDelete, deleteCount, itemsToAdd);

    equal(
      arrayTest.toString().replace(",,", ","),
      [11, "Potato", "Sonora", 2, 13].toString()
    );
  });
});
