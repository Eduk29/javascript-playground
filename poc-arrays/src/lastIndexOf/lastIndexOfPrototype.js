export const lastIndexOfPrototype = (arrayInput, testCondition) => {
  if (!arrayInput || arrayInput.lenght === 0) {
    return arrayInput;
  }

  return arrayInput.lastIndexOf(testCondition);
};
