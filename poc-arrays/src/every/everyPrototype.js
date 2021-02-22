export const everyPrototype = (arrayInput, testCondition) => {
  if (!arrayInput || arrayInput.lenght === 0) {
    return arrayInput;
  }

  return arrayInput.every(testCondition);
};
